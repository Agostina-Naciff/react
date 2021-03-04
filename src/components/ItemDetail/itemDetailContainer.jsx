import React from 'react';
import { withRouter } from 'react-router';
import { Container } from 'react-bootstrap';
import ItemDetail from './itemDetail/itemDetail';
import { getFirestore } from '../../firebase/index';

class ItemDetailContainerComponent extends React.Component {

    state = {
        item: {}
    };
    
    async componentDidMount() {
        const id = this.props.match.params.id;
        const db = getFirestore();
        const itemCollection = db.collection('itemCollection');
        itemCollection.doc(id).get()
        .then((snapShot) => {
            if (snapShot.size === 0) {
                console.log('no results')
            }
            this.setState({ item: snapShot.data()});
        })
        .catch(e => {
            console.log(e)
        })
        .finally(() => {
            console.log('terminado')
        })
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