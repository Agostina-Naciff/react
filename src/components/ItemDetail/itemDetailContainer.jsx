import React from 'react';
import { Container } from 'react-bootstrap';
import itemDetailService from './itemDetailService';
import ItemDetail from './itemDetail/itemDetail';

class ItemDetailContainerComponent extends React.Component {

    state = {
        item: {}
    };

    async componentDidMount() {
        itemDetailService(1)
        .then(res => this.setState({item: res}))
    }

    render() {
        return (
            <>
            <Container>
                <ItemDetail props={this.state.item} />
            </Container>
            </>
        )
    }

}

export default ItemDetailContainerComponent;