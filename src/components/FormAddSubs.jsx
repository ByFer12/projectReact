import { useState } from "react";

const FormAddSubs = ({setType,setPrice,type,price, setSubs, subs,editId,setEditId,spent,count}) => {
    const [error, setError]=useState(false);
    const [errorMoney, setErrorMoney]=useState(false);

    const handleSubs=e=>{
        e.preventDefault();
        if(price===""||Number(price)<=0||type===""){
            setError(true)
            return;
        }
        if(count-spent<Number(price)){
            setErrorMoney(true);
            return;

        }
        setError(false);
        setErrorMoney(false);
        if(editId!=""){
            setEditId("")
            const newSubs=subs.map(item=>{
                if(item.id===editId){
                    item.type=type;
                    item.price=price;

                }
                return item;
            })
            setSubs(newSubs);
        }else{
            const data={
                type,
                price,
                id: Date.now()
            }
            setSubs([...subs, data ])
        }


        setType("");
        setPrice("");
        console.log(subs)
        console.log(price)
        console.log(type)
        

    }
    return (  
        <div className="add-subscriptions">
            <h3>Agregar Subscripcion</h3>
            <form onSubmit={handleSubs}>
            <p>Servicios</p>
            <select onChange={e=>setType(e.target.value)} value={type}>
                <option value="">--Elegir--</option>
                <option value="netflix">Netflix</option>
                <option value="disney">Disney Plus</option>
                <option value="hbo">HBO MAX</option>
                <option value="star">Star Plus</option>
                <option value="prime">Prime Videos</option>
                <option value="spotify">Spotify</option>
                <option value="appletv">Apple tv</option>
            </select>
            <p>Cantidad</p>
            <input type="number" placeholder="Q20" onChange={e=>setPrice(e.target.value)} value={price}/>
            {editId!=""?  <input type="submit" value="Guardar" />: <input type="submit" value="Agregar" />}
            </form>
            {error? <p className="error">Campos invalidos</p>:null}
            {errorMoney? <p className="error">No tienes el presupuesto suficiente</p>:null}

        </div>
    );
}
 
export default FormAddSubs;





