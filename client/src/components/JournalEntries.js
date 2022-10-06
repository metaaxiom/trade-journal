import React from 'react'
import JournalEntryMeta from './JournalEntryMeta';
import JournalEntryStatus from './JournalEntryStatus';
import JournalEntryTransactionsList from './JournalEntryTransactionsList';

export default function JournalEntries(props){
    const { entriesWithTransactions, setEntryDto, 
            toggleEntryEditModal, toggleEntryDeleteModal } = props;

    const [sortField, setSortField] = React.useState('modified');
    const [sortOrder, setSortOrder] = React.useState(1);
    const [showActiveOnly, setShowActiveOnly] = React.useState(false);

    const handleSortFieldChange = event => {
        setSortField(event.target.value);
    }

    const handleSortOrderChange = () => {
        setSortOrder(sortOrder * -1);
    }

    const getSort = () => {
        return (prevEntryDto, currEntryDto) => (prevEntryDto[sortField] < currEntryDto[sortField]) ? sortOrder : (sortOrder * -1)
    }

    const handleActiveOnlyFilterChange = () => {
        setShowActiveOnly(!showActiveOnly);
    }

    const getActiveOnlyFilter = () => {
        if(showActiveOnly){
            return (entryDto) => entryDto.isActive;
        }
        return () => true
    }

    return (
        <>
            <div id="journal-sort">
                <div id="journal-sort__item--field" className="journal-sort__item">
                    <label>Sort Field</label>
                    <select className="select" onChange={handleSortFieldChange}>
                        <option value="modified">Date Modified</option>
                        <option value="created">Date Created</option>
                    </select>
                </div>
                <div id="journal-sort__item--order" className="journal-sort__item">
                    <label>Sort Order</label>
                    <button className="btn btn--blue" onClick={handleSortOrderChange}>
                        {(sortOrder === 1) ? 
                            <><span>Newest</span> <i className="fa-solid fa-arrow-up-long"></i></> : 
                            <><span>Oldest</span> <i className="fa-solid fa-arrow-down-long"></i></>}
                    </button>
                </div>
                <div id="journal-sort__item--active-filter" className="journal-sort__item">
                    <input type="checkbox" value={true} onChange={handleActiveOnlyFilterChange} />
                    <label>Only Active</label>
                </div>
            </div>

            <div id="journal">
                {Array.isArray(entriesWithTransactions) && 
                    entriesWithTransactions.filter(getActiveOnlyFilter()).sort(getSort()).map((entryDto, entryDtoIdx) => (
                        <div key={entryDtoIdx} className="entry entry--display">
                            <div className="entry__header">
                                
                                <JournalEntryMeta entryDto={entryDto}>
                                    <div className="entry__meta__item">
                                        <JournalEntryStatus isActive={entryDto.isActive} />
                                    </div>
                                </JournalEntryMeta>

                                <div className="entry--display__controls">
                                    <button 
                                        className="entry--display__controls__edit" 
                                        onClick={() => {toggleEntryEditModal({entryId: entryDto.entryId})}}
                                    >
                                        <i className="fa-solid fa-pen-to-square"></i>
                                    </button>

                                    <button 
                                        className="entry--display__controls__delete" 
                                        onClick={() => {toggleEntryDeleteModal({entryId: entryDto.entryId})}}
                                    >
                                        <i className="fa-solid fa-trash"></i>
                                    </button>
                                </div>
                            </div>

                            <div className="entry__description">
                                {entryDto.description}
                            </div>

                            <JournalEntryTransactionsList 
                                entryDto={entryDto}
                                setEntryDto={setEntryDto}
                                showPostDates={true} 
                            />
                        </div>
                    ))
                }
            </div>
        </>
    );
}