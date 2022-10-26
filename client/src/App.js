import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Login from "./components/Login";
import JournalEntries from "./components/JournalEntries";
import TransactionsTable from "./components/TransactionsTable";
import TransactionDto from "./models/TransactionDto";
import JournalEntryDto from "./models/JournalEntryDto";
import {
  getTransactionsCostSum,
  getEntryStatus,
  toIntermediateDtoSyntax,
} from "./utils/utils";
import JournalEntryEditModal from "./components/JournalEntryEditModal";
import JournalEntryDeleteModal from "./components/JournalEntryDeleteModal";
import Footer from "./components/Footer";

function App() {
  const [allTransactionDtos, setAllTransactionDtos] = React.useState([]);
  const [entriesWithTransactions, setEntriesWithTransactions] = React.useState([
    {},
  ]);
  const [entryDto, setEntryDto] = React.useState(new JournalEntryDto({}));

  /* INITIALIZE DATA */
  useEffect(() => {
    axios.get("/all-transactions").then((res) => {
      console.log(res.data.transactions);

      setAllTransactionDtos(
        res.data.transactions.map(
          (transaction) => new TransactionDto(transaction)
        )
      );
    });
  }, []);

  useEffect(() => {
    axios.get("/journal-entries").then((res) => {
      // populate journal entries with relevant TD Ameritrade data
      let entriesWithTransactions = res.data.dbEntriesWithTransactions.map(
        (dbEntryWithTransactions) => {
          let intermEntryWithTransactions = toIntermediateDtoSyntax(
            dbEntryWithTransactions
          );
          let transactionsCostSum = 0;
          let transactionDtos = intermEntryWithTransactions.transactions.reduce(
            (prevIntermTransaction, currIntermTransaction) => {
              console.log("currIntermTransaction", currIntermTransaction);
              let matchedTransactionDto = allTransactionDtos.find(
                (transactionDto) =>
                  transactionDto.transactionId ==
                  currIntermTransaction.transactionId
              );

              console.log("matchedTransactionDto", matchedTransactionDto);

              // if no match in TD data, skip the transaction
              if (matchedTransactionDto !== undefined) {
                let newTransactionDto = {
                  ...matchedTransactionDto,
                  ...currIntermTransaction,
                };
                prevIntermTransaction.push(newTransactionDto);
                transactionsCostSum += newTransactionDto.costTotal;
              }
              return prevIntermTransaction;
            },
            []
          );

          console.log("transactionDtos", transactionDtos);

          return new JournalEntryDto({
            ...intermEntryWithTransactions.entry,
            transactionDtos: transactionDtos,
            transactionsCostSum: transactionsCostSum,
            isActive: getEntryStatus(transactionDtos),
          });
        }
      );

      setEntriesWithTransactions(entriesWithTransactions);
    });
  }, [allTransactionDtos]);

  useEffect(() => {
    console.log(entriesWithTransactions);
  }, [entriesWithTransactions]);

  /* EDIT MODAL */
  const [showEntryEditModal, setShowEntryEditModal] = React.useState(false);
  const [entryEditModalShowGoBack, setEntryEditModalShowGoBack] =
    React.useState(false);

  const populateEntryModal = (entryId, transactionIdsToLoad = []) => {
    let entryToLoad =
      entryId == -1
        ? new JournalEntryDto()
        : entriesWithTransactions.find((entry) => entry.entryId == entryId);

    // 1. entry transactions already in entry
    // 2. entry transactions to be added from paremeter
    let entryTransactionDtosToLoad = [
      ...entryToLoad.transactionDtos,
      ...allTransactionDtos.filter(
        (transactionDtoInAll) =>
          transactionIdsToLoad.includes(transactionDtoInAll.transactionId) &&
          entryToLoad.transactionDtos.find(
            (transactionDtoInEntry) =>
              transactionDtoInEntry.transactionId ==
              transactionDtoInAll.transactionId
          ) == undefined
      ),
    ];

    setEntryDto({
      ...entryToLoad,
      transactionsCostSum: getTransactionsCostSum(entryTransactionDtosToLoad),
      isActive: getEntryStatus(entryTransactionDtosToLoad),
      transactionDtos: entryTransactionDtosToLoad,
    });
  };

  const toggleEntryEditModal = (
    { entryId = -1, showGoBack = false } = {},
    transactionIdsToLoad = []
  ) => {
    if (!showEntryEditModal) {
      // when opening edit modal, first populate it
      populateEntryModal(entryId, transactionIdsToLoad);
    }
    if (showGoBack !== entryEditModalShowGoBack)
      setEntryEditModalShowGoBack(showGoBack);
    setShowEntryEditModal(!showEntryEditModal);
  };

  const entryEditModalGoBack = () => {
    toggleEntryEditModal(); // close edit modal
    toggleEntryListModal(); // open entry list modal
  };

  const updateEntry = async () => {
    let response = await axios.put("/update-entry", { entryDto: entryDto });

    if (response.status === 201) {
      // convert DB's column names to DTO camel-case syntax
      let intermEntryWithTransactions = toIntermediateDtoSyntax(
        response.data.dbEntryWithTransactions
      );

      // update record of updated entry within entriesWithTransactions
      setEntriesWithTransactions((prevEntriesWithTransactions) =>
        prevEntriesWithTransactions.map((prevEntryDto) => {
          // find entry that was updated
          if (
            prevEntryDto.entryId == intermEntryWithTransactions.entry.entryId
          ) {
            // add basic transaction info from allTransactionDtos
            // to DB info from intermEntryWithTransactions
            // for each updated transaction
            let updatedTransactionDtos =
              intermEntryWithTransactions.transactions.map(
                (intermTransaction) => ({
                  ...allTransactionDtos.find(
                    (transactionDto) =>
                      transactionDto.transactionId ==
                      intermTransaction.transactionId
                  ),
                  ...intermTransaction,
                })
              );

            // recreate entry DTO with updated info
            console.log(
              "intermEntryWithTransactions.entry",
              intermEntryWithTransactions.entry
            );
            let toRet = new JournalEntryDto({
              ...intermEntryWithTransactions.entry,
              transactionDtos: updatedTransactionDtos,
              transactionsCostSum: getTransactionsCostSum(
                updatedTransactionDtos
              ),
              isActive: getEntryStatus(updatedTransactionDtos),
            });
            console.log(toRet);
            return toRet;
          }
          return prevEntryDto;
        })
      );
    }

    return { resultMsg: response.data.resultMsg, status: response.status };
  };

  /* ENTRY LIST MODAL */
  const [showEntryListModal, setShowEntryListModal] = React.useState(false);
  const toggleEntryListModal = () => {
    setShowEntryListModal(!showEntryListModal);
  };

  /* DELETE MODAL */
  const [showEntryDeleteModal, setShowEntryDeleteModal] = React.useState(false);
  const [entryToDeleteId, setEntryToDeleteId] = React.useState(-1);
  const [entryDeleteModalShowGoBack, setEntryDeleteModalShowGoBack] =
    React.useState(false);

  const toggleEntryDeleteModal = ({
    entryId = -1,
    showGoBack = false,
  } = {}) => {
    if (showEntryEditModal) toggleEntryEditModal();
    if (!showEntryDeleteModal) {
      // only set entryToDeleteId when opening modal
      setEntryToDeleteId(entryId);
    }
    if (showGoBack !== entryDeleteModalShowGoBack)
      setEntryDeleteModalShowGoBack(showGoBack);
    setShowEntryDeleteModal(!showEntryDeleteModal);
  };

  const entryDeleteModalGoBack = () => {
    toggleEntryDeleteModal(); // close delete modal
    toggleEntryEditModal({ entryId: entryToDeleteId });
  };

  const deleteEntry = async (entryId) => {
    let response = await axios.delete("/delete-entry", {
      data: { entryId: entryId },
    });

    if (response.status === 201) {
      setEntriesWithTransactions((prevValue) => [
        ...prevValue.filter(
          (entryWithTransactions) => entryWithTransactions.entryId != entryId
        ),
      ]);
    }

    return { resultMsg: response.data.resultMsg, status: response.status };
  };

  /* LOGIN */
  const getLoginToken = () => {
    const loginTokenStr = sessionStorage.getItem("tjLoginToken");
    const loginToken = JSON.parse(loginTokenStr);
    return loginToken;
  };

  const [loginToken, setLoginToken] = React.useState(getLoginToken());

  const saveLoginToken = (newLoginToken) => {
    sessionStorage.setItem("tjLoginToken", JSON.stringify(newLoginToken));
    setLoginToken(newLoginToken);
  };

  const removeLoginToken = () => {
    sessionStorage.removeItem("tjLoginToken");
    setLoginToken(undefined);
  };

  if (!loginToken) {
    return <Login saveLoginToken={saveLoginToken} />;
  }

  return (
    <>
      <ToastContainer theme="dark" autoClose={6000} pauseOnHover />
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <header>
          <div className="content-container">
            <div id="header__logo">trade_journal</div>
            <nav>
              <ol>
                <li>
                  <NavLink
                    className={({ isActive }) =>
                      isActive ? "nav-link--active" : ""
                    }
                    to="/"
                    end
                  >
                    <i className="fa-solid fa-book-open"></i>
                    <span>Journal</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className={({ isActive }) =>
                      isActive ? "nav-link--active" : ""
                    }
                    to="/transactions"
                    end
                  >
                    <i className="fa-solid fa-table-list"></i>
                    <span>Transactions</span>
                  </NavLink>
                </li>
              </ol>
            </nav>
          </div>
        </header>

        <main className="content-container">
          <Routes>
            <Route
              path="/"
              element={
                <JournalEntries
                  entriesWithTransactions={entriesWithTransactions}
                  setEntryDto={setEntryDto}
                  toggleEntryEditModal={toggleEntryEditModal}
                  toggleEntryDeleteModal={toggleEntryDeleteModal}
                />
              }
            />

            <Route
              path="/transactions"
              element={
                <TransactionsTable
                  allTransactionDtos={allTransactionDtos}
                  entriesWithTransactions={entriesWithTransactions}
                  populateEntryModal={populateEntryModal}
                  entryDto={entryDto}
                  setEntryDto={setEntryDto}
                  toggleEntryEditModal={toggleEntryEditModal}
                  toggleEntryListModal={toggleEntryListModal}
                  showEntryListModal={showEntryListModal}
                  setEntriesWithTransactions={setEntriesWithTransactions}
                />
              }
            />
          </Routes>
        </main>

        <Footer removeLoginToken={removeLoginToken} />
      </BrowserRouter>

      <JournalEntryEditModal
        modalShow={showEntryEditModal}
        toggleModal={toggleEntryEditModal}
        goBack={entryEditModalGoBack}
        showGoBack={entryEditModalShowGoBack}
        toggleEntryDeleteModal={toggleEntryDeleteModal}
        entryDto={entryDto}
        setEntryDto={setEntryDto}
        updateEntry={updateEntry}
      ></JournalEntryEditModal>

      <JournalEntryDeleteModal
        modalShow={showEntryDeleteModal}
        toggleModal={toggleEntryDeleteModal}
        entryToDeleteId={entryToDeleteId}
        setEntryToDeleteId={setEntryToDeleteId}
        deleteEntry={deleteEntry}
        showGoBack={entryDeleteModalShowGoBack}
        goBack={entryDeleteModalGoBack}
      ></JournalEntryDeleteModal>
    </>
  );
}

export default App;
