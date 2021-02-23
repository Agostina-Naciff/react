import React, { useState } from "react";
import { Button, FormControl, InputGroup } from "react-bootstrap"

const ItemCountComponent = ({stock, onAdd}) => {

    let [amount, setAmount] = useState(stock === 0 ? 0 : 1);
    const event = () => onAdd(amount);

    const setCount = (text) => {
        return(
            () => {
                if(text === '+') {
                    (amount < stock) ? setAmount(amount + 1) : setAmount(amount);
                }
                if(text === '-') {
                    (amount > 1) ? setAmount(amount - 1) : setAmount(amount);
                }
            }
        )
    }

    return (
        <>
        <InputGroup>
            <InputGroup.Prepend>
                <Button onClick={setCount('-')}>-</Button>
            </InputGroup.Prepend>
            <FormControl value={amount} readOnly={true}/>
            <InputGroup.Append>
                <Button onClick={setCount('+')}>+</Button>
            </InputGroup.Append>
        </InputGroup>
        <Button disabled={stock === 0} onClick={event}>Agregar a Carrito</Button>
        </>
    )
}

export default ItemCountComponent;