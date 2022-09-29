import React from 'react'
import { buildDateTimeStr } from '../utils/utils';

export default function JournalEntryMeta(props){
    const { children, entryDto } = props;

    return (
        <div className="entry__meta">
            
            { children }

            <div className="entry__meta__item">
                <label>Entry ID</label>
                <div className="text--small">{entryDto.entryId}</div>
            </div>
            <div className="entry__meta__item">
                <label>Modified</label>
                <div className="text--small">{buildDateTimeStr(entryDto.modified)}</div>
            </div>
            <div className="entry__meta__item">
                <label>Created</label>
                <div className="text--small">{buildDateTimeStr(entryDto.created)}</div>
            </div>
        </div>
    );
}