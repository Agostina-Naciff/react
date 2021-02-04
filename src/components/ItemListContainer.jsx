import ItemCountComponent from "./ItemCount"


const ItemListContainerComponent = ({name}) => {
    return (
        <>
        <p>Hola {name}</p>
        <ItemCountComponent stock="0"/>
        </>
    )
}

export default ItemListContainerComponent;