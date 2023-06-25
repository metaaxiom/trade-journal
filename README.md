# Trade Journal

A web app designed to help organize stock market trades. It works by retrieving transactions from the API of a trading platform - in this case, TD Ameritrade - and allows the user to group them into journal entries. Once related transactions are collected within an entry, they can be assigned a description to explain their strategy. The overarching goal is to provide the stock trader with a bird-eye-view of their investments.

***Note**: The version of the app provided here is currently retrieving trading data from a JSON file to avoid revealing a private TD Ameritrade API key, but the code is well-prepared for fetching from the actual API - this just requires updating the `all-transactions` request in `server/server.js`.*

## Tech Stack

The app fetches purchase and sale transactions from TD Ameritrade using their API (though, any trading platorm with a compatible API could be used instead). This data is then displayed in a Transactions Table. When any of these transactions are selected and grouped together by the user, the app records information about this entry in a local PostgreSQL database. It is there that the journal entry's description is stored, for instance. The backend logic accomplishing this is written in Node.js + Express, and the frontend is built using React.js.