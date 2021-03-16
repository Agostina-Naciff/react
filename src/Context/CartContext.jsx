import React, { createContext, useState } from 'react';

export const cartContext = createContext();

const CartContext = ({children}) => {

    const [product, setProduct] = useState([]);

    const addItem = (item) => {
        const index = isInCart(item.id);
        if (index === -1) {
            setProduct([...product, item]);
        } else {
            const item = [...product];
            item[index].count = item.count;
            setProduct(item);
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

    const finishShop = () => {
        return product.reduce( (acc, el) => {
            return acc.concat({
                id: el.id,
                title: el.data.title,
                price: el.data.price * el.count
            })
        }, [])
    }

    const total = () => {
        return product.reduce((acc, el) => acc + (el.price * el.count), 0)
    }

    return ( 
        <cartContext.Provider value={{
            clear,
            deleteItem,
            isInCart,
            addItem,
            getCart,
            finishShop,
            total
        }}>
            {children}
        </cartContext.Provider>
    )
}

export default CartContext;