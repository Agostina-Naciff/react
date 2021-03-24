import { Link } from 'react-router-dom';
import React, { useContext } from "react";
import { Col, Image, Row, Button } from "react-bootstrap";
import ItemCountComponent from '../../ItemList/Item/ItemCount/ItemCount';
import { cartContext } from '../../../Context/CartContext';


const ItemDetail = ({ props }) => {

    const { addItem,isInCart } = useContext(cartContext);

    const add = (count) => addItem({data:props.item, count, id: props.id})

    return (
        <>
            <Row>
                <Col>
                    <Image src={`../${props.item.image}`} />
                </Col>
                <Col>
                    <Row><h2>{props.item.title}</h2></Row>
                    <hr/>
                    <Row>${props.item.price} / 12x ${(props.item.price/12).toFixed(2)}</Row>
                    <hr/>
                    <Row>Metodos de pago disponibles: <br/>Maestro, Visa, Mastercard, American Express</Row>
                    <hr/>
                    <Row>Recibilo Mañana con tu compra dentro de los proximos 30 minutos!</Row>
                    <hr/>
                    {isInCart(props.id) === -1 ? 
                    <ItemCountComponent stock={props.item.stock} onAdd={add} />
                    :
                    <Link to={'/cart'}>
                        <Button className="w-100">Termina tu compra</Button>
                    </Link>
                    }
                    
                </Col>
            </Row>
            <Row className="mt-3">{props.item.description}</Row>
        </>
    )
}

export default ItemDetail;