import React, {useEffect} from 'react'
import { buildDateTimeStr, getTransactionsCostSum, getEntryStatus } from '../utils/utils';

export default function JournalEntryTransactionsList(props){
    const { entryDto, setEntryDto, showTransactionsControls = false, 
            showPostDates = false, additionalTableClasses = '' } = props;

    const toggleTransactionRemoval = (transactionId) => {
        setEntryDto(prevEntryDto => {
            let allTransactionsMarkedForRemovalNewVal = true; // assume true
            let updatedTransactionDtos = prevEntryDto.transactionDtos.map(prevTransactionDto => {
                if(prevTransactionDto.transactionId == transactionId){
                    let isMarkedForRemovalNewVal = !prevTransactionDto.isMarkedForRemoval;
                    // one unmarked transaction disproves assumption of all transactions being marked
                    if(!isMarkedForRemovalNewVal) allTransactionsMarkedForRemovalNewVal = false;
                    return {
                        ...prevTransactionDto,
                        isMarkedForRemoval: isMarkedForRemovalNewVal
                    };
                }
                return prevTransactionDto;
            })

            return {
                ...prevEntryDto,
                transactionsCostSum: getTransactionsCostSum(updatedTransactionDtos),
                isActive: getEntryStatus(updatedTransactionDtos),
                allTransactionsMarkedForRemoval: allTransactionsMarkedForRemovalNewVal,
                transactionDtos: updatedTransactionDtos
            };
        });
    }

    return (<>
        <table className={`table--vertical entry__transactions-table ${additionalTableClasses}`}>
            <thead>
                <tr>
                    <th className="entry__transactions-table__heading--ticker">
                        Ticker
                    </th>
                    <th className={`entry__transactions-table__heading--cost text--number text--data-${(entryDto.transactionsCostSum >= 0) ? 'green' : 'red' }`}>
                        {entryDto.transactionsCostSum ? Math.abs(entryDto.transactionsCostSum).toFixed(2) : ''}
                    </th>
                    <th className="entry__transactions-table__heading--instruction">
                        Side
                    </th>
                    <th className="entry__transactions-table__heading--asset-subtype">
                        Type
                    </th>
                    <th className="entry__transactions-table__heading--strike">
                        Strike
                    </th>
                    <th className="entry__transactions-table__heading--exp-date">
                        Expiry Date
                    </th>
                    <th className="entry__transactions-table__heading--transaction-date">
                        Transaction Date
                    </th>
                    <th className="entry__transactions-table__heading--post-date">
                        Post Date
                    </th>
                    {showTransactionsControls && 
                    <th className="entry__transactions-table__heading--controls"></th>}
                </tr>
            </thead>
            <tbody>{
                Array.isArray(entryDto.transactionDtos) && 
                (entryDto.transactionDtos.map((transactionDto, transactionDtoIdx) => (
                    <tr key={transactionDtoIdx} className={transactionDto.isMarkedForRemoval ? 'to-remove' : ''}>
                        <td className="entry__transactions-table__cell--ticker">
                            {transactionDto.ticker}
                        </td>
                        <td className="entry__transactions-table__cell--cost text--number">
                            <span className={`text--data-${transactionDto.costTotalColor}`}>
                                {transactionDto.costTotalAbs.toFixed(2)}
                            </span>
                            {' ('}
                            <span className={`text--data-${transactionDto.costTotalColor}`}>
                                {transactionDto.costPerUnitAbs.toFixed(2)}
                            </span>
                            {` x ${transactionDto.qty})`}
                        </td>
                        <td className={`entry__transactions-table__cell--instruction text--data-${transactionDto.instructionColor}`}>
                            {transactionDto.instruction}
                        </td>
                        <td className={`entry__transactions-table__cell--asset-subtype text--data-${transactionDto.assetSubTypeColor}`}>
                            {transactionDto.assetSubType}
                        </td>
                        <td className="entry__transactions-table__cell--strike text--number">
                            {transactionDto.strikePrice}
                        </td>
                        <td className="entry__transactions-table__cell--exp-date">
                            { buildDateTimeStr(transactionDto.expDate) }
                        </td>
                        <td className="entry__transactions-table__cell--transaction-date">
                            { buildDateTimeStr(transactionDto.transactionDate) }
                        </td>
                        <td className="entry__transactions-table__cell--post-date">
                            { showPostDates && buildDateTimeStr(transactionDto.postDate) }
                        </td>
                        
                        {showTransactionsControls && 
                            <td className="entry__transactions-table__cell--controls">
                                <button onClick={() => {toggleTransactionRemoval(transactionDto.transactionId)}}>
                                    {transactionDto.isMarkedForRemoval ? (
                                        <i 
                                            className="fa-solid fa-arrow-rotate-left text--accent-blue" 
                                            id={`restore-${transactionDto.transactionId}`}
                                        ></i>
                                    ) : (
                                        <i 
                                            className="fa-solid fa-xmark text--accent-red" 
                                            id={`remove-${transactionDto.transactionId}`}
                                        ></i>
                                    )}
                                </button>
                            </td>
                        }
                    </tr>
                )))}
            </tbody>
        </table>
    </>);
}