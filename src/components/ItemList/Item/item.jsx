import './item.css';
import React, { useState } from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ItemCountComponent from './ItemCount/ItemCount'

const ItemComponent = ({ props }) => {

    let [count, setCount] = useState(0);

    const add = (count) => setCount(count)

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
            {count === 0 ? 
                <ItemCountComponent stock={props.stock} onAdd={add} />
                :
                <Button>Termina tu compra</Button>
            }
            </Card.Body>
        </Card>
        </>
    )
}

export default ItemComponent;