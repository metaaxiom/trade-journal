import { buildDateTimeStr } from "../utils/utils";

export default class TransactionDto {
    constructor(tdTransaction, dbTransactionInfo = null){
        this.transactionId = tdTransaction.transactionId;
        this.cusip = tdTransaction.transactionItem.instrument.cusip;
        this.transactionDate = tdTransaction.transactionDate;
        this.assetType = tdTransaction.transactionItem.instrument.assetType;
        this.assetSubType = (this.assetType === 'OPTION') ? tdTransaction.transactionItem.instrument.putCall : 'EQT';
        this.assetSubTypeColor = '';
        switch(this.assetSubType){
            case 'CALL':
                this.assetSubTypeColor = 'green';
                break;
            case 'PUT':
                this.assetSubTypeColor = 'red';
                break;
            default:
                this.assetSubTypeColor = 'blue';
                break;
        }
        this.ticker = (this.assetType === 'OPTION') ?
            tdTransaction.transactionItem.instrument.underlyingSymbol :
            tdTransaction.transactionItem.instrument.symbol;
        this.instruction = (tdTransaction.transactionSubType === 'BY') ? 'BUY' : 'SELL';
        this.instructionColor = (this.instruction == 'BUY') ? 'purple' : 'yellow';
        this.qty = tdTransaction.transactionItem.amount;
        this.costPerUnitAbs = tdTransaction.transactionItem.price;
        this.costPerUnit = (tdTransaction.netAmount < 0) ? 
            this.costPerUnitAbs - (this.costPerUnitAbs * 2) : 
            this.costPerUnitAbs;
        this.costTotalColor = (tdTransaction.netAmount > 0) ? 'green' : 'red';
        this.costTotal = tdTransaction.netAmount;
        this.costTotalAbs = Math.abs(tdTransaction.netAmount);
        this.tradeDescriptionArr = (tdTransaction.transactionItem.instrument.description) ? 
            tdTransaction.transactionItem.instrument.description.split(' ') :
            undefined;
        this.expDate = (this.assetType === 'OPTION') ? 
            new Date(`${this.tradeDescriptionArr[1]} ${this.tradeDescriptionArr[2]} ${this.tradeDescriptionArr[3]}`).toISOString() : '';
        this.strikePrice = (this.assetType === 'OPTION') ? this.tradeDescriptionArr[4] : '';
        this.positionEffect = (this.assetType === 'OPTION') ? tdTransaction.transactionItem.positionEffect : '';

        // info about transaction stored in local DB
        this.postDate = (dbTransactionInfo) ? dbTransactionInfo.postDate : null;

        // helper field
        this.isMarkedForRemoval = false;
    }
}