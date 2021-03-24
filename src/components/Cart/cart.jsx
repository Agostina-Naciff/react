import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import './cart.css';
import { Link } from 'react-router-dom'
import { Table, Container, Row, Button, Modal } from 'react-bootstrap';
import { cartContext } from '../../Context/CartContext';
import { getFirestore } from '../../firebase/index';

const CartComponent = () => {
    const history = useHistory();

    const [showModal, setShowModal] = useState({show: false, id: ''});

    const handleClose = () => {
        clear();
        setShowModal({show: false, id: ''});
        history.push('/list');
    };
    const handleShow = (id) => setShowModal({show: true, id: id});

    const validar = () => {
        return new Promise((res, rej) => {
            const db = getFirestore();
            const itemCollection = db.collection('itemCollection');
            getCart().map(x => {
                itemCollection.doc(x.id).get()
                .then(y => {
                    const data = y.data()
                    if (data.stock < x.count) {
                        rej(false);
                    }
                    console.log('hola')
                })
            })
            res(true);

        })
    }

    const comprar = async () => {
        const valid = await validar();
        if (valid) {
            const db = getFirestore();
            const itemCollection = db.collection('compras');
            itemCollection.add({
                buyer: {
                    name: 'Agostina',
                    phone: 123456789,
                    email: 'agos@compras.com'
                },
                items: finishShop(),
                date: new Date().toISOString(),
                total: total()
            })
                .then(docRef => {
                    handleShow(docRef.id);
                })
        }
    }

    const { getCart, finishShop, total, deleteItem, clear } = useContext(cartContext);

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
            <>
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
                            {getCart().map(x => {
                                return (
                                    <tr>
                                        <td>{x.data.title}</td>
                                        <td>{x.data.price}</td>
                                        <td>{x.count}</td>
                                        <td>{x.count * x.data.price}</td>
                                        <td><Button onClick={() => { deleteItem(x.id) }}>Eliminar</Button></td>
                                    </tr>
                                )
                            })}
                            <tr>
                                <td></td>
                                <td></td>
                                <td><h5>Total</h5></td>
                                <td>{total()}</td>
                                <td></td>
                            </tr>
                        </tbody>
                    </Table>
                    <Button onClick={comprar} className="align-self-end">Comprar</Button>
                </Container>
                <Modal show={showModal.show} onHide={handleClose}>
                    <Modal.Dialog>
                        <Modal.Header closeButton>Compra Finalizada!</Modal.Header>
                        <Modal.Body>
                            Tu codigo de seguimiento es el siguiente: {showModal.id}
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="primary" onClick={handleClose}>Close</Button>
                        </Modal.Footer>
                    </Modal.Dialog>
                    </Modal>
            </>
        )
    }



}
export default CartComponent;