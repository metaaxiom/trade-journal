import React from "react";
import { buildDateTimeStr } from "../utils/utils";
import "../styles/journal-entry-meta.scss";

export default function JournalEntryMeta(props) {
  const { children, entryDto = null } = props;

  return (
    <div className="entry__meta">
      {entryDto != null ? (
        <>
          {children}

          <div className="entry__meta__item">
            <label>Entry ID</label>
            <div className="text--small">{entryDto.entryId}</div>
          </div>
          <div className="entry__meta__item">
            <label>Modified</label>
            <div className="text--small">
              {buildDateTimeStr(entryDto.modified)}
            </div>
          </div>
          <div className="entry__meta__item">
            <label>Created</label>
            <div className="text--small">
              {buildDateTimeStr(entryDto.created)}
            </div>
          </div>
        </>
      ) : (
        children
      )}
    </div>
  );
}
