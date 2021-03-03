import { Link } from 'react-router-dom';
import React, { useState } from "react";
import { Col, Image, Row, Button } from "react-bootstrap";
import ItemCountComponent from '../../ItemList/Item/ItemCount/ItemCount';


const ItemDetail = ({ props }) => {

    let [count, setCount] = useState(0);

    const adding = (count) => {
        setCount(count)
    }

    return (
        <>
            <Row>
                <Col>
                    <Image src={props.pictureUrl} />
                </Col>
                <Col>
                    <Row>{props.price}</Row>
                    <Row>Metodo de pago</Row>
                    <Row>Envio</Row>
                    {count === 0 ? 
                    <ItemCountComponent stock={props.stock} onAdd={adding} />
                    :
                    <Link to={'/cart'}>
                        <Button>Termina tu compra</Button>
                    </Link>
                    }
                    
                </Col>
            </Row>
            <Row>{props.description}</Row>
            <Row>
                <Col>detalle 1</Col>
                <Col>detalle 2</Col>
            </Row>
        </>
    )
}

export default ItemDetail;