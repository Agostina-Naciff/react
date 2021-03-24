import './item.css';
import React, { useContext } from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
import ItemCountComponent from './ItemCount/ItemCount';
import DeleteIcon from '@material-ui/icons/Delete';
import { cartContext } from '../../../Context/CartContext';

const ItemComponent = ({ props }) => {
    const id = useHistory().location.pathname.split('/')[2];
    const { addItem,isInCart, deleteItem } = useContext(cartContext);

    const add = (count) => addItem({...props, count})

    return (
        <>
        <Card>
            <Link to={`/detail/${props.id}`}>
                <img src={id ? `../${props.data.image}` : props.data.image}/>
            </Link>
            <Card.Body className="col">
            <Link to={`/detail/${props.id}`} className="align-self-end">
                    <Card.Title>{props.data.title}</Card.Title>
                    <Card.Text>{props.data.price}</Card.Text>
            </Link>
            {isInCart(props.id) === -1 ? 
                <ItemCountComponent stock={props.data.stock} onAdd={add} />
                :
                <>
                <Button className="w-25 btn-danger" onClick={() => { deleteItem(props.id) }}><DeleteIcon /></Button>
                <Link to={'/cart'}>
                    <Button className="w-75">Termina tu compra</Button>
                </Link>
                </>
            }
            </Card.Body>
        </Card>
        </>
    )
}

export default ItemComponent;