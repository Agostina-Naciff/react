import React, { useContext } from 'react';
import './cart.css';
import { Link } from 'react-router-dom'
import { Table, Container, Row, Button } from 'react-bootstrap';
import { cartContext } from '../../Context/CartContext';

const CartComponent = () => {

    const { getCart } = useContext(cartContext);
    console.log(getCart())
    if (getCart().length === 0) {
        return (
            <Container>
                <Row>
                    <p>No tienes articulos en el carrito</p>
                </Row>
                <Row>
                    <Link to="/list">
                        <Button>Ir a Comprar</Button>
                    </Link>
                </Row>
            </Container>
        )
    } else {
        return (
            <Container>
                <Table>
                    <thead>
                        <tr>
                            <th>Item</th>
                            <th>Precio</th>
                            <th>Cantidad</th>
                            <th>Total</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.getCart.map(x => (
                            <tr>
                                <td>{x.title}</td>
                                <td>{x.price}</td>
                                <td>{x.count}</td>
                                <td>{x.count * x.price}</td>
                                <td><a href="">Eliminar</a></td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </Container>
        )
    }



}
export default CartComponent;