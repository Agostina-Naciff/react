import './item.css';
import React, { useContext } from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ItemCountComponent from './ItemCount/ItemCount';
import { cartContext } from '../../../Context/CartContext';

const ItemComponent = ({ props }) => {

    const { addItem,isInCart } = useContext(cartContext);

    const add = (count) => addItem({...props, count})

    return (
        <>
        <Card>
            <Link to={`/detail/${props.id}`}>
                <Card.Img />
            </Link>
            <Card.Body>
            <Link to={`/detail/${props.id}`}>
                    <Card.Title>{props.title}</Card.Title>
                    <Card.Text>{props.price}</Card.Text>
            </Link>
            {isInCart(props.id) ? 
                <ItemCountComponent stock={props.stock} onAdd={add} />
                :
                <Link to={'/cart'}>
                    <Button>Termina tu compra</Button>
                </Link>
            }
            </Card.Body>
        </Card>
        </>
    )
}

export default ItemComponent;