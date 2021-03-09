import React, { useContext, useEffect } from 'react';
import './cart.css';
import { Link } from 'react-router-dom'
import { Table, Container, Row, Button } from 'react-bootstrap';
import { cartContext } from '../../Context/CartContext';
import { getFirestore } from '../../firebase/index';

const CartComponent = () => {

    useEffect(() => {
        
    })
    const comprar = () => {
        console.log(finishShop)
        const db = getFirestore();
        const itemCollection = db.collection('compras');
        itemCollection.add({
            buyer: {
                name: 'Agostina',
                phone: 123456789,
                email: 'agos@compras.com'
            },
            items: finishShop,
            date: '9999-12-31T23:59:59Z',
            total: total
        })
        .then(docRef => {
            console.log(docRef)
        })
    }

    const { getCart, finishShop, total } = useContext(cartContext);
    // console.log(getCart())
    // if (getCart().length === 0) {
    //     return (
    //         <Container>
    //             <Row>
    //                 <p>No tienes articulos en el carrito</p>
    //             </Row>
    //             <Row>
    //                 <Link to="/list">
    //                     <Button>Ir a Comprar</Button>
    //                 </Link>
    //             </Row>
    //         </Container>
    //     )
    // } else {
        console.log(getCart)
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
                        {/* {getCart.map(x => (
                            <tr>
                                <td>{x.title}</td>
                                <td>{x.price}</td>
                                <td>{x.count}</td>
                                <td>{x.count * x.price}</td>
                                <td><a href="">Eliminar</a></td>
                            </tr>
                        ))} */}
                    </tbody>
                </Table>
                <Button onClick={comprar}>Comprar</Button>
            </Container>
        )
    // }



}
export default CartComponent;