import { Button, FormControl, InputGroup } from "react-bootstrap"

let initial = 1;
const ItemCountComponent = ({stock, onAdd}) => {

    return (
        <>
        <InputGroup>
            <InputGroup.Prepend>
                <Button>-</Button>
            </InputGroup.Prepend>
            <FormControl value={initial} disabled/>
            <InputGroup.Append>
                <Button onClick={() => {
                    if(initial < stock) {
                        initial++;
                    }
                }}>+</Button>
            </InputGroup.Append>
        </InputGroup>
        <Button disabled={stock === 0}>Agregar a Carrito</Button>
        </>
    )
}

export default ItemCountComponent;