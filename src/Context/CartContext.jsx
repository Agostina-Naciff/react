import React, { createContext, useState } from 'react';

export const cartContext = createContext();

const CartContext = ({children}) => {

    const [product, setProduct] = useState([]);

    const addItem = (item) => {
        if (isInCart(item.id) === -1) {
            setProduct([...product, item]);
        }
    }

    const clear = () => {
        setProduct([]);
    }

    const deleteItem = (id) => {
        product.splice(isInCart(id), 1);
    }

    const isInCart = (id) => {
        return product.findIndex(x => x.id === id)
    }

    const getCart = () => {
        return product;
    }

    return ( 
        <>
        <cartContext.Provider value={{
            clear,
            deleteItem,
            isInCart,
            addItem,
            getCart
        }}>
            {children}
        </cartContext.Provider>
        </>
    )
}

export default CartContext;