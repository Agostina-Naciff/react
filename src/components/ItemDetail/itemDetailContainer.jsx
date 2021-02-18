import React from 'react';
import { withRouter } from 'react-router';
import { Container } from 'react-bootstrap';
import itemDetailService from './itemDetailService';
import ItemDetail from './itemDetail/itemDetail';

class ItemDetailContainerComponent extends React.Component {

    state = {
        item: {}
    };

    async componentDidMount() {
        const id = this.props.match.params.id;
        itemDetailService(id)
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

export default withRouter(ItemDetailContainerComponent);