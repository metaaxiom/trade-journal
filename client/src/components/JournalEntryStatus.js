import React from "react";
import "../styles/journal-entry-status.scss";

export default function JournalEntryStatus(props) {
  const { isActive } = props;

  return (
    <>
      {isActive ? (
        <div className="badge badge--green badge--entry-is-active">Active</div>
      ) : (
        <div className="badge badge--entry-is-active">Complete</div>
      )}
    </>
  );
}
