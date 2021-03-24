import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import { Navbar, InputGroup, FormControl } from 'react-bootstrap';
import ItemComponent from './Item/item';
import { getFirestore } from '../../firebase/index';

const ItemListComponent = () => {

    const history = useHistory();
    let [state, setState] = useState({ products: [], filtered: [] });
    let id;

    const filter = (text) => {
        setState({
            products: state.products,
            filtered: state.products.filter(x => x.data.title.toLowerCase().includes(text.target.value))
        })
    }

    useEffect(() => {
        history.listen((location) => {
            id = location.pathname.split('/')[2];
            const db = getFirestore();
            let itemCollection = db.collection('itemCollection');
            if (id) {
                itemCollection = itemCollection
                    .where("categoryId", "==", parseInt(id));
            }
            itemCollection.get()
                .then((snapShot) => {
                    if (snapShot.size === 0) {
                        console.log('no results')
                    }
                    setState({
                        products: snapShot.docs.map(doc => {
                            return {
                                id: doc.id,
                                data: doc.data()
                            }
                        }),
                        filtered: snapShot.docs.map(doc => {
                            return {
                                id: doc.id,
                                data: doc.data()
                            }
                        })
                    });
                })
                .catch(e => {
                    console.log('error')
                })
                .finally(() => {
                    console.log('terminado')
                })
        })
        id = history.location.pathname.split('/')[2];
        const db = getFirestore();
        let itemCollection = db.collection('itemCollection');
        if (id) {
            itemCollection = itemCollection
                .where("categoryId", "==", parseInt(id));
        }
        itemCollection.get()
            .then((snapShot) => {
                if (snapShot.size === 0) {
                    console.log('no results')
                }
                setState({
                    products: snapShot.docs.map(doc => {
                        return {
                            id: doc.id,
                            data: doc.data()
                        }
                    }),
                    filtered: snapShot.docs.map(doc => {
                        return {
                            id: doc.id,
                            data: doc.data()
                        }
                    })
                });
            })
            .catch(e => {
                console.log('error')
            })
            .finally(() => {
                console.log('terminado')
            })
    }, [history])

    return (
        <>
            <Navbar bg="primary" variant="dark" className="d-flex justify-content-center align-items-center">
                <h4>Todos los items verdes tienen 30% de descuento</h4>
            </Navbar>
            <div className="container">
                <div className="row">
                    <div className="col-3">
                        <InputGroup className="mb-3">
                            <FormControl
                                placeholder="Filter Products"
                                aria-label="Username"
                                aria-describedby="basic-addon1"
                                onChange={(event) => filter(event)}
                            />
                        </InputGroup>
                    </div>
                    <div className="col-9">
                        <div className="row">
                            {state.filtered.map(x => (<div className="col-4"><ItemComponent props={x} /></div>))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ItemListComponent;