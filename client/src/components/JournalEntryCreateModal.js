import React, { useState } from 'react'
import Modal from './Modal'
import JournalEntryDto from '../models/JournalEntryDto'
import JournalEntryMeta from './JournalEntryMeta';
import JournalEntryForm from './JournalEntryForm';
import JournalEntryTransactionsList from './JournalEntryTransactionsList';
import { toast } from 'react-toastify';
import JournalEntryStatus from './JournalEntryStatus';

export default function JournalEntryCreateModal(props){
    const { modalShow, toggleModal, entryDto, setEntryDto, 
            insertEntry, clearSelectedTransactionsFromTable } = props;

    const [showSpinner, setShowSpinner] = React.useState(false);

    const handleInsertEntry = async () => {
        setShowSpinner(true);
        let insertEntryResponse = await insertEntry();
        setShowSpinner(false);

        if(insertEntryResponse.status !== 201){
            toast.error(insertEntryResponse.resultMsg);
            return;
        }

        // clear table
        if(clearSelectedTransactionsFromTable != undefined) clearSelectedTransactionsFromTable();

        setEntryDto(new JournalEntryDto({})); // reset modal inputs
        toggleModal(); // close modal
        toast.success(insertEntryResponse.resultMsg);
    }

    return (
        <Modal show={modalShow} toggle={toggleModal} title={'Add Journal Entry'} classes={'modal--entry modal--entry-create'}>
            <div className="entry__meta">
                <div className="entry__meta__item">
                    <JournalEntryStatus isActive={entryDto.isActive} />
                </div>
            </div>

            <div className="entry">
                <JournalEntryForm
                    entryDto={entryDto}
                    setEntryDto={setEntryDto}
                ></JournalEntryForm>

                <JournalEntryTransactionsList 
                    entryDto={entryDto}
                    setEntryDto={setEntryDto}
                    showTransactionsControls={true}
                    additionalTableClasses={'entry__transactions-table--modal'}
                />
            </div>
            
            <div className="modal__bottom-controls">
                <div className="modal__bottom-control-item">
                    <button 
                        className="btn btn--green" 
                        onClick={handleInsertEntry} 
                        disabled={entryDto.transactionDtos.length == 0 || entryDto.allTransactionsMarkedForRemoval}>
                            Add Entry
                    </button>
                </div>
                
                {showSpinner && 
                    <div className="modal__bottom-control-item">
                        <i className="fa-solid fa-spinner"></i>
                    </div>
                }
            </div>
        </Modal>
    );
}