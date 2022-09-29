import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import JournalEntries from './components/JournalEntries'
import TransactionsTable from './components/TransactionsTable'
import TransactionDto from './models/TransactionDto';
import JournalEntryDto from './models/JournalEntryDto';
import { getTransactionsCostSum, getEntryStatus, toIntermediateDtoSyntax } from './utils/utils';
import JournalEntryEditModal from './components/JournalEntryEditModal';
import JournalEntryDeleteModal from './components/JournalEntryDeleteModal';

function App(){
  const [allTransactionDtos, setAllTransactionDtos] = React.useState([]);
  const [entriesWithTransactions, setEntriesWithTransactions] = React.useState([{}]);
  const [entryDto, setEntryDto] = React.useState(new JournalEntryDto({}));

  /* INITIALIZE DATA */
  useEffect(() => {
    fetch('/all-transactions').then(
      res => res.json()
    ).then(data => {
      console.log('sdfffffffffffffffffffffffffffffffffffff');
      setAllTransactionDtos(
        data.transactions.map(transaction => new TransactionDto(transaction))
      );
    })
  }, [])

  useEffect(() => {
    fetch('/journal-entries').then(
      res => res.json()
    ).then(data => {
      // populate journal entries with relevant TD Ameritrade data
      let entriesWithTransactions = data.dbEntriesWithTransactions.map(dbEntryWithTransactions => {
        let intermEntryWithTransactions = toIntermediateDtoSyntax(dbEntryWithTransactions);
        let transactionsCostSum = 0;
        let transactionDtos = intermEntryWithTransactions.transactions.reduce(
          (prevIntermTransaction, currIntermTransaction) => {
            console.log('currIntermTransaction', currIntermTransaction);
            let matchedTransactionDto = allTransactionDtos.find(
              transactionDto => transactionDto.transactionId == currIntermTransaction.transactionId
            );

            console.log('matchedTransactionDto', matchedTransactionDto);
            
            // if no match in TD data, skip the transaction
            if(matchedTransactionDto !== undefined){
              let newTransactionDto = {...matchedTransactionDto, ...currIntermTransaction};
              prevIntermTransaction.push(newTransactionDto);
              transactionsCostSum += newTransactionDto.costTotal;
            }
            return prevIntermTransaction;
          }
        , []);

        console.log('transactionDtos', transactionDtos);

        return new JournalEntryDto({
          ...intermEntryWithTransactions.entry,
          transactionDtos: transactionDtos,
          transactionsCostSum: transactionsCostSum,
          isActive: getEntryStatus(transactionDtos)
        });
      });

      setEntriesWithTransactions(entriesWithTransactions);
    })
  }, [allTransactionDtos]);

  useEffect(() => {console.log(entriesWithTransactions);}, [entriesWithTransactions]);
  
  /* EDIT MODAL */
  const [showEntryEditModal, setShowEntryEditModal] = React.useState(false);
  const [entryEditModalShowGoBack, setEntryEditModalShowGoBack] = React.useState(false);

  const populateEntryModal = (entryId, transactionIdsToLoad = []) => {
    let entryToLoad = (entryId == -1) ? 
      new JournalEntryDto() : entriesWithTransactions.find(entry => entry.entryId == entryId);
    
    // 1. entry transactions already in entry
    // 2. entry transactions to be added from paremeter
    let entryTransactionDtosToLoad = [
      ...entryToLoad.transactionDtos,
      ...allTransactionDtos.filter(transactionDtoInAll => 
        transactionIdsToLoad.includes(transactionDtoInAll.transactionId) &&
        entryToLoad.transactionDtos.find(transactionDtoInEntry => 
          transactionDtoInEntry.transactionId == transactionDtoInAll.transactionId
        ) == undefined
      )
    ];

    console.log('transactionIdsToLoad', transactionIdsToLoad);
    console.log('entryTransactionDtosToLoad', entryTransactionDtosToLoad);

    setEntryDto({
      ...entryToLoad,
      transactionsCostSum: getTransactionsCostSum(entryTransactionDtosToLoad),
      isActive: getEntryStatus(entryTransactionDtosToLoad),
      transactionDtos: entryTransactionDtosToLoad
    });
  }

  const toggleEntryEditModal = ({entryId = -1, showGoBack = false} = {}) => { 
    if(!showEntryEditModal){
      // when opening edit modal, first populate it
      populateEntryModal(entryId);
    }
    if(showGoBack !== entryEditModalShowGoBack) setEntryEditModalShowGoBack(showGoBack);
    setShowEntryEditModal(!showEntryEditModal);
  }

  const entryEditModalGoBack = () => {
    toggleEntryEditModal(); // close edit modal
    toggleEntryListModal(); // open entry list modal
  }

  const updateEntry = async () => {
    let rawResponse = await fetch('/update-entry', {
        method: 'PUT',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({entryDto: entryDto})
    })
    let response = await rawResponse.json();
    
    if(rawResponse.status === 201){

      console.log('response', response);
      let intermEntryWithTransactions = toIntermediateDtoSyntax(response.dbEntryWithTransactions);

      setEntriesWithTransactions(prevEntriesWithTransactions => (prevEntriesWithTransactions.map(prevEntryDto => {
        if(prevEntryDto.entryId == intermEntryWithTransactions.entry.entryId){
          let updatedTransactionDtos = allTransactionDtos.filter(transactionDto => 
            intermEntryWithTransactions.transactions.findIndex(intermTransaction => 
              intermTransaction.transactionId == transactionDto.transactionId
            ) != -1
          )
          return new JournalEntryDto({
            ...intermEntryWithTransactions.entry,
            transactionDtos: updatedTransactionDtos,
            transactionsCostSum: getTransactionsCostSum(updatedTransactionDtos),
            isActive: getEntryStatus(updatedTransactionDtos)
          });
        }
        return prevEntryDto;
      })));
    }

    return { resultMsg: response.resultMsg, status: rawResponse.status };
  }

  /* ENTRY LIST MODAL */
  const [showEntryListModal, setShowEntryListModal] = React.useState(false);
  const toggleEntryListModal = () => {
      setShowEntryListModal(!showEntryListModal);
  }

  /* DELETE MODAL */
  const [showEntryDeleteModal, setShowEntryDeleteModal] = React.useState(false);
  const [entryToDeleteId, setEntryToDeleteId] = React.useState(-1);
  const [entryDeleteModalShowGoBack, setEntryDeleteModalShowGoBack] = React.useState(false);

  const toggleEntryDeleteModal = ({entryId = -1, showGoBack = false} = {}) => {
    if(showEntryEditModal) toggleEntryEditModal()
    if(!showEntryDeleteModal){
      // only set entryToDeleteId when opening modal
      setEntryToDeleteId(entryId);
    }
    if(showGoBack !== entryDeleteModalShowGoBack) setEntryDeleteModalShowGoBack(showGoBack);
    setShowEntryDeleteModal(!showEntryDeleteModal);
  }

  const entryDeleteModalGoBack = () => {
    toggleEntryDeleteModal(); // close delete modal
    toggleEntryEditModal({entryId: entryToDeleteId});
  }

  const deleteEntry = async (entryId) => {
    let rawResponse = await fetch('/delete-entry', {
        method: 'DELETE',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({entryId: entryId})
    })
    let response = await rawResponse.json();

    if(rawResponse.status === 201){
      setEntriesWithTransactions(prevValue => 
        [...prevValue.filter(entryWithTransactions => entryWithTransactions.entryId != entryId)]
      );
    }

    return { resultMsg: response.resultMsg, status: rawResponse.status };
  }

  return (
    <>
      <ToastContainer theme="dark" autoClose={6000} pauseOnHover />
      <Router>
          <header>
              <nav className="content-container">
                  <ol>
                      <li>
                          <NavLink to="/" className={({isActive}) => isActive ? 'nav-link--active' : ''}>
                            <i className="fa-solid fa-book-open"></i>
                            <span>Journal</span>
                          </NavLink>
                      </li>
                      <li>
                          <NavLink to="/transactions" className={({isActive}) => isActive ? 'nav-link--active' : ''}>
                            <i className="fa-solid fa-table-list"></i>
                            <span>Transactions</span>
                          </NavLink>
                      </li>
                  </ol>
              </nav>
          </header>

          <main className="content-container">
            <Routes>
                <Route path="/" element={
                  <JournalEntries 
                    entriesWithTransactions={entriesWithTransactions}
                    setEntryDto={setEntryDto}
                    toggleEntryEditModal={toggleEntryEditModal}
                    toggleEntryDeleteModal={toggleEntryDeleteModal}
                  />
                } />


                <Route path="/transactions" element={
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
                } />
            </Routes>
          </main>
      </Router>

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
  )
}

export default App