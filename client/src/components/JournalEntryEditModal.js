import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import Modal from "./Modal";
import JournalEntryDto from "../models/JournalEntryDto";
import JournalEntryForm from "./JournalEntryForm";
import JournalEntryTransactionsList from "./JournalEntryTransactionsList";
import JournalEntryStatus from "./JournalEntryStatus";
import JournalEntryMeta from "./JournalEntryMeta";
import "../styles/journal-entry-modal.scss";

export default function JournalEntryEditModal(props) {
  const {
    modalShow,
    toggleModal,
    toggleEntryDeleteModal,
    showGoBack,
    goBack,
    entryDto,
    setEntryDto,
    updateEntry,
    clearSelectedTransactionsFromTable,
  } = props;
  const [showSpinner, setShowSpinner] = React.useState(false);

  const handleUpdateEntry = async () => {
    setShowSpinner(true);
    let updateEntryResponse = await updateEntry();
    setShowSpinner(false);

    if (updateEntryResponse.status !== 201) {
      toast.error(updateEntryResponse.resultMsg);
      return;
    }

    // reset modal inputs
    setEntryDto(new JournalEntryDto({}));
    // clearSelectedTransactionsFromTable should only be provided as prop
    // when JournalEntryEditModal is included on TransactionsTable
    if (clearSelectedTransactionsFromTable != undefined)
      clearSelectedTransactionsFromTable();

    // close modal and display alert
    toggleModal();
    toast.success(updateEntryResponse.resultMsg);
  };

  // useEffect(() => {
  //   console.log("entryDto updated", entryDto);
  // }, [entryDto]);

  return (
    <Modal
      show={modalShow}
      toggle={toggleModal}
      title={"Edit Journal Entry"}
      goBack={showGoBack ? goBack : null}
      classes={"modal--entry modal--entry-edit"}
    >
      <JournalEntryMeta entryDto={entryDto}>
        <div className="entry__meta__item">
          <JournalEntryStatus isActive={entryDto.isActive} />
        </div>
      </JournalEntryMeta>

      <div className="entry">
        <JournalEntryForm
          entryDto={entryDto}
          setEntryDto={setEntryDto}
        ></JournalEntryForm>

        <JournalEntryTransactionsList
          entryDto={entryDto}
          setEntryDto={setEntryDto}
          showTransactionsControls={true}
          showPostDates={true}
          additionalTableClasses={"entry__transactions-table--modal"}
        />
      </div>

      <div className="modal__bottom-controls">
        <div className="modal__bottom-control-item">
          <button
            className="btn btn--green"
            disabled={
              entryDto.transactionDtos.length == 0 ||
              entryDto.allTransactionsMarkedForRemoval
            }
            onClick={handleUpdateEntry}
          >
            Update Entry
          </button>
        </div>
        <div className="modal__bottom-control-item">
          <button
            className="btn btn--red"
            onClick={() => {
              toggleEntryDeleteModal({
                entryId: entryDto.entryId,
                showGoBack: true,
              });
            }}
          >
            Delete Entry
          </button>
        </div>
        {showSpinner && (
          <div className="modal__bottom-control-item">
            <i className="fa-solid fa-spinner"></i>
          </div>
        )}
      </div>
    </Modal>
  );
}
