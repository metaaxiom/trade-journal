export default class JournalEntryDto {
    constructor(
        {entryId = -1, description = '', modified = '', created = '',        
        transactionDtos = [], transactionsCostSum = null, isActive = null, 
        allTransactionsMarkedForRemoval = false} = {}
    ){
        this.entryId = entryId;
        this.description = description;
        this.modified = modified;
        this.created = created;
        this.transactionDtos = transactionDtos;
        // computed
        this.transactionsCostSum = transactionsCostSum;
        this.isActive = isActive;
        this.allTransactionsMarkedForRemoval = allTransactionsMarkedForRemoval;
    }
}