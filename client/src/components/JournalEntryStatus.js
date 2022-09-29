import React, {useEffect} from "react";

export default function JournalEntryStatus(props){
    const {isActive} = props;
    //const {transactionDtos} = props;

    //const [isEntryActive, setIsEntryActive] = React.useState(false);

    // useEffect(() => {
    //     let newIsEntryActiveVal = false; // assume false
    //     Array.isArray(transactionDtos) && transactionDtos.forEach(entryTransactionA => {
    //         // check option transactions first
    //         if(entryTransactionA.assetType == 'OPTION'){
    //             // if option is expired, skip iteration
    //             if(new Date(entryTransactionA.expDate).toISOString() > new Date().toISOString()){
    //                 return;
    //             }
                
    //             // only runs for non-expired options
    //             let optionQtyBought = 0;
    //             let optionQtySold = 0;
    //             transactionDtos.forEach(entryTransactionB => {
    //                 if(entryTransactionB.cusip == entryTransactionA.cusip){
    //                     if(entryTransactionB.positionEffect == 'OPENING'){
    //                         optionQtyBought += entryTransactionB.qty;
    //                     }else{
    //                         optionQtySold += entryTransactionB.qty;
    //                     }
    //                 }
    //             });
    //             if(optionQtyBought > optionQtySold){
    //                 newIsEntryActiveVal = true;
    //             }
    //             return;
    //         }

    //         // check equity
    //         let equityQtyBought = 0;
    //         let equityQtySold = 0;
    //         transactionDtos.forEach(entryTransactionB => {
    //             if(entryTransactionB.cusip == entryTransactionA.cusip){
    //                 if(entryTransactionB.instruction == 'BUY'){
    //                     equityQtyBought += entryTransactionB.qty;
    //                 }else{
    //                     equityQtySold += entryTransactionB.qty;
    //                 }
    //             }
    //         });
    //         if(equityQtyBought > equityQtySold){
    //             newIsEntryActiveVal = true;
    //         }
    //     });
    //     if(isEntryActive !== newIsEntryActiveVal) setIsEntryActive(newIsEntryActiveVal);
    // }, [transactionDtos]);

    return (<>
        {isActive ?
            <div className="badge badge--green badge--entry-is-active">Active</div> :
            <div className="badge badge--entry-is-active">Complete</div>
        }
    </>);
}