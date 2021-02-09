import React from 'react';
import { Card } from 'react-bootstrap';
import ItemCountComponent from './ItemCount/ItemCount'

const ItemComponent = ({props}) => {
    return(
        <>
        <Card>
            <Card.Img />
            <Card.Body>
                <Card.Title>{props.title}</Card.Title>
                <Card.Text>{props.price}</Card.Text>
                <ItemCountComponent stock={props.stock}/>
            </Card.Body>
        </Card>
        </>
    )
}

export default ItemComponent;