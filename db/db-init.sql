CREATE TABLE journal_entry (
    journal_entry_id SERIAL PRIMARY KEY,
    description TEXT,
    ts_modified TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT (CURRENT_TIMESTAMP),
    ts_created TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT (CURRENT_TIMESTAMP)
);

CREATE TABLE journal_entry_transaction (
    journal_entry_id INTEGER NOT NULL,
    transaction_id BIGINT NOT NULL,
    ts_created TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT (CURRENT_TIMESTAMP),
    PRIMARY KEY (journal_entry_id, transaction_id),
    FOREIGN KEY (journal_entry_id) REFERENCES journal_entry(journal_entry_id) ON DELETE CASCADE
);

CREATE TABLE account (
    account_id SERIAL PRIMARY KEY,
    password TEXT
);