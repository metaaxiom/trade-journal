import React, { useState } from 'react'
import { toast } from 'react-toastify';
import Modal from './Modal'

export default function JournalEntryDeleteModal(props){
    const { modalShow, toggleModal, showGoBack, goBack, 
            entryToDeleteId, setEntryToDeleteId, deleteEntry } = props;
    const [showSpinner, setShowSpinner] = React.useState(false);

    const handleDeleteEntry = async () => {
        setShowSpinner(true);
        let deleteEntryResult = await deleteEntry(entryToDeleteId);
        setShowSpinner(false);
        if(deleteEntryResult.status !== 201){
            toast.error(deleteEntryResult.resultMsg);
            return;
        }
        // clear table
        //if(clearSelectedTransactionsFromTable != undefined) clearSelectedTransactionsFromTable();

        //setEntryDto(new JournalEntryDto({})); // reset modal inputs
        setEntryToDeleteId(-1); // reset
        toggleModal(); // close modal
        toast.success(deleteEntryResult.resultMsg);
    }

    return (
        <Modal 
            show={modalShow}
            toggle={toggleModal} 
            title={'Delete Journal Entry'} 
            goBack={(showGoBack) ? goBack : null} 
            classes={'modal--entry-delete'}
        >
            <div className="modal__text">Are you sure that you want to delete this journal entry?</div>

            <div className="modal__bottom-controls">
                <div className="modal__bottom-control-item">
                    <button 
                        className="btn btn--red" 
                        onClick={handleDeleteEntry}>
                            Yes, Delete
                    </button>
                </div>
                <div className="modal__bottom-control-item">
                    <button
                        className="btn"
                        onClick={toggleModal}
                    >
                        No, Cancel
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