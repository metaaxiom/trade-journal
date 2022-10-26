export const toIntermediateDtoSyntax = (dbEntryWithTransactions) => {
  console.log(
    "dbEntryWithTransactions from toIntermediateDtoSyntax",
    dbEntryWithTransactions
  );
  return {
    entry: {
      entryId: dbEntryWithTransactions.journal_entry_id,
      description: dbEntryWithTransactions.description,
      created: dbEntryWithTransactions.ts_created_entry,
      modified: dbEntryWithTransactions.ts_modified_entry,
    },
    transactions: dbEntryWithTransactions.transactions.map((dbTransaction) => ({
      transactionId: dbTransaction.transaction_id,
      postDate: dbTransaction.ts_created_transaction,
    })),
  };
};

export const buildDateTimeStr = (dateStamp, includeTime = true) => {
  if (!dateStamp) return "";

  let dateObj = new Date(dateStamp);
  let dateTimeStr = dateObj.toLocaleDateString();

  if (includeTime) {
    dateTimeStr +=
      " " +
      dateObj.toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      });
  }

  return dateTimeStr;
};

export const getTransactionsCostSum = (transactionDtos) => {
  return transactionDtos
    .filter((transactionDto) => !transactionDto.isMarkedForRemoval)
    .reduce(
      (prevTransactionDto, currTransactionDto) => {
        return {
          costTotal:
            prevTransactionDto.costTotal + currTransactionDto.costTotal,
        };
      },
      { costTotal: 0 }
    ).costTotal;
};

export const getEntryStatus = (transactionDtos) => {
  let isEntryActive = false; // assume false
  Array.isArray(transactionDtos) &&
    transactionDtos.forEach((entryTransactionA) => {
      // check option transactions first
      if (entryTransactionA.assetType == "OPTION") {
        // if option is expired, skip iteration
        if (
          new Date(entryTransactionA.expDate).toISOString() >
          new Date().toISOString()
        ) {
          return;
        }

        // only runs for non-expired options
        let optionQtyBought = 0;
        let optionQtySold = 0;
        transactionDtos.forEach((entryTransactionB) => {
          if (entryTransactionB.cusip == entryTransactionA.cusip) {
            if (entryTransactionB.positionEffect == "OPENING") {
              optionQtyBought += entryTransactionB.qty;
            } else {
              optionQtySold += entryTransactionB.qty;
            }
          }
        });
        if (optionQtyBought > optionQtySold) {
          isEntryActive = true;
        }
        return;
      }

      // check equity
      let equityQtyBought = 0;
      let equityQtySold = 0;
      transactionDtos.forEach((entryTransactionB) => {
        if (entryTransactionB.cusip == entryTransactionA.cusip) {
          if (entryTransactionB.instruction == "BUY") {
            equityQtyBought += entryTransactionB.qty;
          } else {
            equityQtySold += entryTransactionB.qty;
          }
        }
      });
      if (equityQtyBought > equityQtySold) {
        isEntryActive = true;
      }
    });
  return isEntryActive;
};
