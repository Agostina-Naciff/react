import './item.css';
import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ItemCountComponent from './ItemCount/ItemCount'

const ItemComponent = ({ props }) => {

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
                <ItemCountComponent stock={props.stock} />
            </Card.Body>
        </Card>
        </>
    )
}

export default ItemComponent;