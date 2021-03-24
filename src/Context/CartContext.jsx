import React, { createContext, useState } from 'react';

export const cartContext = createContext();

const CartContext = ({children}) => {

    const [product, setProduct] = useState(localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : []);

    const addItem = (item) => {
        localStorage.setItem('cart', JSON.stringify([...product, item]));
        const index = isInCart(item.id);
        if (index === -1) {
            setProduct([...product, item]);
        } else {
            const item = [...product];
            item[index].count = item.count;
            setProduct(item);
        }
        console.log(product)
    }

    const clear = () => {
        setProduct([]);
    }

    const deleteItem = (id) => {
        let newProducts = [...product];
        newProducts = newProducts.filter(val=>val.id !== id);
        setProduct(newProducts);
    }

    const isInCart = (id) => {
        return product.findIndex(x => x.id === id);
    }

    const getCart = () => {
        return product;
    }

    const finishShop = () => {
        localStorage.removeItem('cart');
        return product.reduce( (acc, el) => {
            return acc.concat({
                id: el.id,
                title: el.data.title,
                price: el.data.price * el.count
            })
        }, [])
    }

    const total = () => {
        return product.reduce((acc, el) => acc + (el.data.price * el.count), 0)
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