import { useEffect, useState } from "react";
import { moneyFormat } from "../helpers";
const Balance = ({count,subs,spent,setSpent}) => {

    const updateBalance=()=>{
        const spen=subs.reduce((total,item)=>Number(item.price)+total,0);
        setSpent(spen)
    }
useEffect(()=>{
    updateBalance()
},[subs])

    return ( 
        <div className="balance">
            <h3>Presupuesto: {moneyFormat(Number(count))}</h3>
            <h3>Disponible: {moneyFormat(count-spent)}</h3>
            <h3>Gastado: {moneyFormat(spent)}</h3>
        </div>
     );
}
 
export default Balance;