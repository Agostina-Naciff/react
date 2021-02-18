import React from 'react';
import { withRouter } from 'react-router';
import {Container, Col, Row} from 'react-bootstrap';
import ItemComponent from './Item/item';
import itemService from './itemListService';

class ItemListComponent extends React.Component {

    state = {
        products: []
    }

    async componentDidMount() {
        const id = this.props.match.params.id ? this.props.match.params.id : -1;
        console.log(id)
        itemService(id)
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

export default withRouter(ItemListComponent);