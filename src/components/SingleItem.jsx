import { moneyFormat } from "../helpers";

const SingleItem = ({price, type,id,elimiarItem,editItem}) => {


    const urlImage=`/src/images/${type}.png`

    const HandleDelete=(e)=>{
        e.preventDefault()
        const answer=window.confirm(`Borrar subscripcion a ${type}`)
        if(answer){
            elimiarItem (id)

        }
    }
    const HandleEdit=e=>{
        e.preventDefault()
        editItem(id)
    }
    return ( 
        <div className="single-item">
            <img src={urlImage} alt="Services" />
            <h3>Precio {moneyFormat(Number(price))}</h3>
            <a href="#" className="Edit" onClick={HandleEdit}>Editar</a>
            <a href="#" className="Delete"  onClick={HandleDelete}>Borrar</a>
        </div>
     );
}
 
export default SingleItem;