import React from 'react';
import { withRouter } from 'react-router';
import {Container, Col, Row} from 'react-bootstrap';
import ItemComponent from './Item/item';
import { getFirestore } from '../../firebase/index';

class ItemListComponent extends React.Component {

    state = {
        products: []
    }

    async componentDidMount() {
        const db = getFirestore();
        const itemCollection = db.collection('itemCollection');
        itemCollection.get()
        .then((snapShot) => {
            if (snapShot.size === 0) {
                console.log('no results')
            }
            this.setState({ products: snapShot.docs.map(doc => {
                return {
                    id: doc.id,
                    data: doc.data()
                }
            })});
        })
        .catch(e => {
            console.log('error')
        })
        .finally(() => {
            console.log('terminado')
        })
    }

    render() {
        return (
            <Container>
                <Row>
                    {this.state.products.map(x => (<Col><ItemComponent props={x} /></Col>))}
                </Row>
            </Container>
        )
    }
}

export default withRouter(ItemListComponent);