import React from 'react';
import { Col, Image, Row } from "react-bootstrap";
import ItemCountComponent from '../../ItemList/Item/ItemCount/ItemCount';


const ItemDetail = ({ props }) => {
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
                    <ItemCountComponent stock={props.stock} />
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