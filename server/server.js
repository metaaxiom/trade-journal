const express = require('express');
const app = express();
const { pool, pgFormat } = require('./db');
const tdAmeritradeData = require('./td-ameritrade-data');

/* MIDDLEWARE */
app.use(express.json());

/* ROUTES */
app.get('/journal-entries', async(req, res) => {
    try {
        const entryTransactionsQry = await pool.query(
            'SELECT journal_entry.journal_entry_id, journal_entry_transaction.transaction_id, journal_entry.description, journal_entry.ts_created AS ts_created_entry, journal_entry.ts_modified AS ts_modified_entry, journal_entry_transaction.ts_created AS ts_created_transaction FROM journal_entry_transaction INNER JOIN journal_entry ON journal_entry_transaction.journal_entry_id = journal_entry.journal_entry_id;'
        );
        const dbEntriesWithTransactions = [];
        entryTransactionsQry.rows.forEach(entryTransaction => {
            let currEntryIdx = dbEntriesWithTransactions.findIndex(
                entry => entry.journal_entry_id === entryTransaction.journal_entry_id
            );
            // if entry doesn't exist within entries array yet, create it
            if(currEntryIdx === -1){
                dbEntriesWithTransactions.push({
                    ...entryTransaction,
                    transactions: []
                });
                currEntryIdx = (dbEntriesWithTransactions.length > 0) ? (dbEntriesWithTransactions.length - 1) : 0;
            }
            // once certain that entry exists in entries array, push transactions to subarray
            dbEntriesWithTransactions[currEntryIdx].transactions.push({
                ...entryTransaction
            });
        });
        // entries includes entry info + transaction ID for each entry

        res.json({dbEntriesWithTransactions});
    } catch(err) {
        console.log(err.message);
    }
})

app.get('/all-transactions', (req, res) => 
    res.json({transactions: tdAmeritradeData.filter(
        transaction => transaction.type === 'TRADE'
    )})
)

app.post('/insert-entry', async (req, res) => {
    const {entryDto} = req.body;
    let currISOStr = new Date(Date.now()).toISOString();

    try {
        let insertedEntryQry = await pool.query(
            'INSERT INTO journal_entry (description, ts_modified, ts_created) VALUES ($1, $2, $3) RETURNING journal_entry_id, description, ts_modified AS ts_modified_entry, ts_created AS ts_created_entry',
            [entryDto.description, currISOStr, currISOStr]
        );
        let insertedEntry = insertedEntryQry.rows[0];

        entryTransactionSqlInsertArr = entryDto.transactionDtos.map(transactionDto => 
            [insertedEntry.journal_entry_id, transactionDto.transactionId, currISOStr]
        );

        let insertedEntryTransactionsQry = await pool.query(
            pgFormat(
                'INSERT INTO journal_entry_transaction (journal_entry_id, transaction_id, ts_created) VALUES %L RETURNING transaction_id, ts_created AS ts_created_transaction',
                entryTransactionSqlInsertArr
            )
        );
        insertedEntry.transactions = insertedEntryTransactionsQry.rows;

        res.status(201).send(JSON.stringify({
            resultMsg: `Added journal entry with ID ${insertedEntry.journal_entry_id}`,
            dbEntryWithTransactions: insertedEntry
        }))
    }catch(err){
        res.status(500).send(JSON.stringify({resultMsg: `Failed to add journal entry due to server issue.`}))
    }
})

app.put('/update-entry', async (req, res) => {
    const {entryDto} = req.body;
    let currISOStr = new Date(Date.now()).toISOString();

    try {
        // update entry and retrieve it
        let updatedEntryQry = await pool.query(
            'UPDATE journal_entry SET description = $1, ts_modified = $2 WHERE journal_entry_id = $3 RETURNING journal_entry_id, description, ts_modified as ts_modified_entry, ts_created AS ts_created_entry',
            [entryDto.description, currISOStr, entryDto.entryId]
        );
        let updatedEntry = updatedEntryQry.rows[0];

        // retrieve all entry transations from db
        let entryTransactionsQry = await pool.query(
            'SELECT * FROM journal_entry_transaction WHERE journal_entry_id = $1',
            [entryDto.entryId]
        );
        let entryTransactionsRows = entryTransactionsQry.rows;

        let transactionIdsMarkedForRemoval = [];
        let transactionsToInsert = [];

        entryDto.transactionDtos = entryDto.transactionDtos
            .filter(transactionDto => {
                // remove transactionDtos marked for removal from entryDto, and push ID onto removed array
                if(transactionDto.isMarkedForRemoval){
                    transactionIdsMarkedForRemoval.push(transactionDto.transactionId);
                    return false;
                }
                // proceed with not marked for removal
                // if not already in DB, push to insertion array
                if(entryTransactionsRows.findIndex(entryTransactionsRow => 
                    entryTransactionsRow.transaction_id == transactionDto.transactionId) === -1
                ){
                    transactionsToInsert.push([entryDto.entryId, transactionDto.transactionId, currISOStr]);
                }
                // if already in DB, don't do anything
                return true;
            });

        // remove marked transaction from DB
        if(transactionIdsMarkedForRemoval.length > 0){
            await pool.query(
                pgFormat(
                    'DELETE FROM journal_entry_transaction WHERE transaction_id IN (%L)',
                    transactionIdsMarkedForRemoval
                )
            )
        }
        // add transactions to DB which aren't marked for removal and which don't already exist in DB
        if(transactionsToInsert.length > 0){
            await pool.query(
                pgFormat(
                    'INSERT INTO journal_entry_transaction (journal_entry_id, transaction_id, ts_created) VALUES %L',
                    transactionsToInsert
                )
            );
        }

        // retrieve updated entry's transactions
        let updatedEntryTransactionQry = await pool.query(
            'SELECT transaction_id, ts_created AS ts_created_transaction FROM journal_entry_transaction WHERE journal_entry_id = $1',
            [updatedEntry.journal_entry_id]
        );

        res.status(201).send({
            dbEntryWithTransactions: {...updatedEntry, transactions: updatedEntryTransactionQry.rows},
            resultMsg: `Updated journal entry with ID ${updatedEntry.journal_entry_id}`
        });
    }catch(err){
        res.status(500).send({resultMsg: `Failed to update journal entry with ID ${entryDto.entryId}`});
    }
})

app.delete('/delete-entry', async (req, res) => {
    const { entryId } = req.body;

    try {
        await pool.query(
            `DELETE FROM journal_entry_transaction WHERE journal_entry_id = ${entryId}`
        );

        await pool.query(
            `DELETE FROM journal_entry WHERE journal_entry_id = ${entryId}`
        );

        res.status(201).send(JSON.stringify({resultMsg: `Deleted journal entry with ID ${entryId}`}))
    }catch(err){
        res.status(500).send({resultMsg: `Failed to delete journal entry with ID ${entryId}`});
    }
});

app.listen(5000, () => {console.log('Server started on port 5000')})