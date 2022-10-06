import React, { useEffect, useState } from 'react'
import axios from 'axios';
import JournalEntryCreateModal from './JournalEntryCreateModal'
import JournalEntryListModal from './JournalEntryListModal'
import { toIntermediateDtoSyntax, getTransactionsCostSum, getEntryStatus, buildDateTimeStr } from '../utils/utils'
import JournalEntryDto from '../models/JournalEntryDto';

export default function TransactionsTable(props){
    
    const { allTransactionDtos, entriesWithTransactions, populateEntryModal, 
        entryDto, setEntryDto, toggleEntryEditModal, toggleEntryListModal, showEntryListModal,
        setEntriesWithTransactions} = props;
    const [selectedEntryTransactionIds, setSelectedEntryTransactionIds] = React.useState([]);
    const [allSelectChecked, setAllSelectChecked] = React.useState(false);
    const [transactionSortCol, setTransactionSortCol] = React.useState('none');
    const [transactionSortOrder, setTransactionSortOrder] = React.useState('ascending');
    const [showNewEntryModal, setShowNewEntryModal] = React.useState(false);

    const toggleNewEntryModal = () => {
        if(!showNewEntryModal){
            populateEntryModal(-1, selectedEntryTransactionIds);
        }
        setShowNewEntryModal(!showNewEntryModal);
    }

    const toggleSelected = (transactionId) => {
        console.log('attempting to add to (or remove from) staging:', transactionId);

        if(selectedEntryTransactionIds.findIndex(
            selectedTransactionId => selectedTransactionId == transactionId) == -1
        ){
            // if transaction id doesn't yet exist in the array, add it
            setSelectedEntryTransactionIds(prevSelectedIds => [...prevSelectedIds, transactionId]);
            return;
        }

        // if transaction already existed in selectedEntryTransactionIds, then clicking it again will remove it
        setSelectedEntryTransactionIds(prevSelectedIds => prevSelectedIds.filter(
            prevSelectedId => prevSelectedId != transactionId)
        );
    }

    const clearSelected = () => {
        setSelectedEntryTransactionIds([]);
    }

    const selectAll = () => {
        setSelectedEntryTransactionIds(
            allTransactionDtos.map(transactionDto => transactionDto.transactionId)
        );
    }

    const toggleAllSelect = () => {
        //setAllSelectChecked(!allSelectChecked);
        if(isAllSelected()){
            clearSelected();
            return;
        }
        selectAll();
    }

    const isAllSelected = () => {
        return allTransactionDtos.length > 0 && allTransactionDtos.length === selectedEntryTransactionIds.length;
    }

    const getTransactionCheckboxValue = (transactionId) => {
        return selectedEntryTransactionIds.findIndex(
            selectedTransactionId => selectedTransactionId == transactionId
        ) != -1;
    }

    const transactionSorts = {
        none: {
            ascending: (prevTransaction, currTransaction) => (null)
        },
        default: {
            ascending: (prevTransaction, currTransaction) => (
                (prevTransaction[transactionSortCol] > currTransaction[transactionSortCol]) ? -1 : 1
            ),
            descending: (prevTransaction, currTransaction) => (
                (prevTransaction[transactionSortCol] < currTransaction[transactionSortCol]) ? -1 : 1
            )
        }
    };
    const handleTransactionChangeSort = (sortCol) => {
        // assume sort order flip
        let sortOrder = (transactionSortOrder === 'ascending') ? 'descending' : 'ascending';
        // re-sort the same column in opposite order
        // also check that sort for col has the sortOrder
        if(sortCol === transactionSortCol && (transactionSorts[sortCol] == undefined || transactionSorts[sortCol][sortOrder] != undefined)){
            setTransactionSortOrder(sortOrder);
            return;
        }
        // when sorting a different column, always start at 'ascending'
        setTransactionSortCol(sortCol);
        setTransactionSortOrder('ascending');
    }
    const getTransactionSort = () => {
        console.log('transactionSorts[transactionSortCol]', transactionSorts[transactionSortCol])
        let transactionSortsKey = (transactionSorts[transactionSortCol] != undefined) ? transactionSortCol : 'default';
        console.log('transactionSorts[transactionSortsKey][transactionSortOrder]', transactionSortsKey, transactionSortOrder);
        return transactionSorts[transactionSortsKey][transactionSortOrder];
    }

    const insertEntry = async () => {
        let response = await axios.post('insert-entry', {
            entryDto: entryDto
        });
        console.log('response', response);
    
        let intermInsertedEntryWithTransactions = toIntermediateDtoSyntax(response.data.dbEntryWithTransactions);
        let insertedTransactionDtos = allTransactionDtos.filter(transactionDto => 
            intermInsertedEntryWithTransactions.transactions.findIndex(intermTransaction => 
                intermTransaction.transactionId == transactionDto.transactionId
            ) != -1
        )

        if(response.status === 201){
          setEntriesWithTransactions(prevEntriesWithTransactions => {
            return [
                ...prevEntriesWithTransactions,
                new JournalEntryDto({
                    ...intermInsertedEntryWithTransactions.entry,
                    transactionDtos: insertedTransactionDtos,
                    transactionsCostSum: getTransactionsCostSum(insertedTransactionDtos),
                    isActive: getEntryStatus(insertedTransactionDtos)
                })
            ]
          });
        }
    
        return { resultMsg: response.data.resultMsg, status: response.status };
    }

    useEffect(() => {
        if(isAllSelected()){
            setAllSelectChecked(true);
            return;
        }
        setAllSelectChecked(false);
    }, [selectedEntryTransactionIds]);

    return (
        <>
            <div id="transactions-table_top-controls">
                <button onClick={toggleNewEntryModal} className="btn btn--green" disabled={selectedEntryTransactionIds.length == 0}>New Entry</button>
                <button onClick={toggleEntryListModal} className="btn btn--green" disabled={selectedEntryTransactionIds.length == 0}>Existing Entry</button>
            </div>

            <div id="transactions-table-wrapper">
                <table id="transactions-table">
                    <thead>
                        <tr>
                            <th scope="col" id="transactions-table__heading-checkbox">
                                <input 
                                    type="checkbox" 
                                    checked={allSelectChecked}
                                    onChange={toggleAllSelect}
                                />
                            </th>
                            <th scope="col" id="transactions-table__heading-transaction-date">
                                <button onClick={() => {handleTransactionChangeSort('transactionDate')}}>
                                    <i className="fa-solid fa-sort"></i>
                                    <span>Transaction Date</span>
                                </button>
                            </th>
                            <th scope="col" id="transactions-table__heading-ticker">
                                <button onClick={() => {handleTransactionChangeSort('ticker')}}>
                                    <i className="fa-solid fa-sort"></i>
                                    Ticker
                                </button>
                            </th>
                            <th scope="col" id="transactions-table__heading-instruction">
                                <button onClick={() => {handleTransactionChangeSort('instruction')}}>
                                    <i className="fa-solid fa-sort"></i>
                                    Side
                                </button>
                            </th>
                            <th scope="col" id="transactions-table__heading-asset-subtype">
                                <button onClick={() => {handleTransactionChangeSort('assetSubType')}}>
                                    <i className="fa-solid fa-sort"></i>
                                    Type
                                </button>
                            </th>
                            <th scope="col" id="transactions-table__heading-strike-price">
                                <button onClick={() => {handleTransactionChangeSort('strikePrice')}}>
                                    <i className="fa-solid fa-sort"></i>
                                    Strike
                                </button>
                            </th>
                            <th scope="col" id="transactions-table__heading-exp-date">
                                <button onClick={() => {handleTransactionChangeSort('expDate')}}>
                                    <i className="fa-solid fa-sort"></i>
                                    Expiry
                                </button>
                            </th>
                            <th scope="col" id="transactions-table__heading-qty">
                                <button onClick={() => {handleTransactionChangeSort('qty')}}>
                                    <i className="fa-solid fa-sort"></i>
                                    Qty
                                </button>
                            </th>
                            <th scope="col" id="transactions-table__heading-cost-per-unit">
                                <button onClick={() => {handleTransactionChangeSort('costPerUnit')}}>
                                    <i className="fa-solid fa-sort"></i>
                                    Unit Cost
                                </button>
                            </th>
                            <th scope="col" id="transactions-table__heading-cost-total">
                                <button onClick={() => {handleTransactionChangeSort('costTotal')}}>
                                    <i className="fa-solid fa-sort"></i>
                                    Premium
                                </button>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                    {allTransactionDtos.sort(getTransactionSort()).map(transactionDto => (
                        <tr key={transactionDto.transactionId}>
                            <td className="transactions-table__cell-all-checkbox">
                                <input 
                                    type="checkbox" 
                                    id={transactionDto.transactionId} 
                                    value={getTransactionCheckboxValue(transactionDto.transactionId)}
                                    checked={getTransactionCheckboxValue(transactionDto.transactionId)}
                                    onChange={() => {toggleSelected(transactionDto.transactionId)}} 
                                />
                            </td>
                            <td className="transactions-table__cell-transaction-date">
                                {buildDateTimeStr(transactionDto.transactionDate)}
                            </td>
                            <td className="transactions-table__cell-ticker">{transactionDto.ticker}</td>
                            <td className={`transactions-table__cell-instruction text--data-${transactionDto.instructionColor}`}>{transactionDto.instruction}</td>
                            <td className={`transactions-table__cell-asset-subtype text--data-${transactionDto.assetSubTypeColor}`}>{transactionDto.assetSubType}</td>
                            <td className="transactions-table__cell-strike-price text--number">
                                {transactionDto.strikePrice != '' ? parseInt(transactionDto.strikePrice).toFixed(2) : ''}
                            </td>
                            <td className="transactions-table__cell-exp-date">
                                {buildDateTimeStr(transactionDto.expDate, false)}
                            </td>
                            <td className="transactions-table__cell-qty">{transactionDto.qty}</td>
                            <td className={`transactions-table__cell-cost-per-unit text--number text--data-${transactionDto.costTotalColor}`}>
                                {transactionDto.costPerUnitAbs.toFixed(2)}
                            </td>
                            <td className={`transactions-table__cell-cost-total text--number text--data-${transactionDto.costTotalColor}`}>
                                {transactionDto.costTotalAbs.toFixed(2)}
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
            
            <JournalEntryCreateModal
                modalShow={showNewEntryModal} 
                toggleModal={toggleNewEntryModal} 
                entryDto={entryDto} 
                setEntryDto={setEntryDto}
                insertEntry={insertEntry}
                clearSelectedTransactionsFromTable={clearSelected}
            />

            <JournalEntryListModal
                modalShow={showEntryListModal}
                toggleModal={toggleEntryListModal}
                toggleEntryEditModal={toggleEntryEditModal}
                entriesWithTransactions={entriesWithTransactions}
            ></JournalEntryListModal>
        </>
    );
}