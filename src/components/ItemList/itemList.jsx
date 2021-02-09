import React from 'react';
import {Container, Col, Row} from 'react-bootstrap';
import ItemComponent from './Item/item';
import itemService from './itemListService';

class ItemListComponent extends React.Component {

    state = {
        products: []
    }

    async componentDidMount() {
        itemService()
        .then(res => this.setState({products: res}))
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

export default ItemListComponent;