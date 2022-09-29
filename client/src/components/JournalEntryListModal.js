import React from 'react'
import Modal from './Modal'
import JournalEntryStatus from './JournalEntryStatus';
import { buildDateTimeStr } from '../utils/utils';

export default function JournalEntriesListModal(props){
    const {modalShow, toggleModal, toggleEntryEditModal, entriesWithTransactions} = props;

    const toggleFromListToEdit = (entryId) => {
        toggleModal(); // close list modal
        toggleEntryEditModal({entryId: entryId, showGoBack: true}); // open entry edit modal
    }

    return (
        <Modal show={modalShow} toggle={toggleModal} title={'Journal Entries'} classes={'modal--entry-list'}>

            <p className="entry-list__text">Select an existing journal entry to add the selected transactions.</p>

            <div className="entry-list__table-wrapper">
                <table className="table--vertical entry-list__table">
                    <thead>
                        <tr>
                            <th></th>
                            <th>ID</th>
                            <th>Tickers</th>
                            <th>Total</th>
                            <th>Description</th>
                            <th>Modified</th>
                            <th>Created</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Array.isArray(entriesWithTransactions) && entriesWithTransactions.map((entryDto, entryDtoIdx) => (
                            <tr 
                                key={entryDtoIdx} 
                                onClick={() => {toggleFromListToEdit(entryDto.entryId)}}
                            >
                                <td className="entry-list__table__cell--status">
                                    <JournalEntryStatus isActive={entryDto.isActive} />
                                </td>
                                <td className="entry-list__table__cell--id">
                                    {entryDto.entryId}
                                </td>
                                <td className="entry-list__table__cell--tickers">
                                    {Array.isArray(entryDto.transactionDtos) && 
                                    entryDto.transactionDtos.reduce((transactionDtoPrev, transactionDtoCurr) => {
                                        if(!transactionDtoPrev.ticker.includes(transactionDtoCurr.ticker)){
                                            return {ticker: transactionDtoPrev.ticker + ' ' + transactionDtoCurr.ticker};
                                        }
                                        return transactionDtoPrev;
                                    }, {ticker: ''}).ticker}
                                </td>
                                <td className={`entry-list__table__cell--total text--number text--${(entryDto.transactionsCostSum >= 0) ? 
                                        'green' : 'red' }`}
                                >
                                    {entryDto.transactionsCostSum ? Math.abs(entryDto.transactionsCostSum).toFixed(2) : ''}
                                </td>
                                <td className="entry-list__table__cell--description">
                                    {(entryDto.description != null && entryDto.description.length > 15) ? 
                                        (entryDto.description.substring(0, 18).trim() + '...') : entryDto.description}
                                </td>
                                <td className="entry-list__table__cell--modified">
                                    {buildDateTimeStr(entryDto.modified)}
                                </td>
                                <td className="entry-list__table__cell--created">
                                    {buildDateTimeStr(entryDto.created)}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </Modal>
    );
}