import SingleItem from "./SingleItem";

const DisplayItems = ({subs, elimiarItem,editItem}) => {
    return (  
        <>
            <h2>Suscripciones</h2>
            {
                subs.map(item=>(
                    <SingleItem key={item.id} id={item.id} price={item.price} type={item.type} elimiarItem={elimiarItem}editItem={editItem}/>
                ))
            }
        </>
    );
}
 
export default DisplayItems;