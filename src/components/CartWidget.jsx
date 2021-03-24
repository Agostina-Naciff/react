import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import './CartWidget.css';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { Fab, Popover, Table, TableBody, TableCell, TableContainer, TableRow, Typography } from '@material-ui/core';
import { cartContext } from '../Context/CartContext';
import { Button } from 'bootstrap';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    typography: {
        padding: theme.spacing(2),
    },
    table: {
        minWidth: 650,
    }
}));

const CartWidget = () => {

    const classes = useStyles();

    const [anchorEl, setAnchorEl] = React.useState(null);

    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const { getCart } = useContext(cartContext);

    if (getCart().length > 0) {
        return (
            <>
                <Fab color="primary" aria-label="add" aria-describedby={'as'} className="mr-4"
                    variant="contained" color="primary" onClick={handleClick}>
                    <ShoppingCartIcon />
                </Fab>
                <Popover
                    id={'as'}
                    open={open}
                    anchorEl={anchorEl}
                    onClose={handleClose}
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'center',
                    }}
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'center',
                    }}
                >
                    <Typography className={classes.typography} component={'span'}>
                        <table className="table">
                            <tbody>
                                {getCart().map(x => (
                                    <tr>
                                        <th className="widget">{x.data.title}</th>
                                        <td className="widget">{x.data.price}</td>
                                        <td className="widget">{x.count}</td>
                                        <td className="widget">{x.count * x.data.price}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        <div className="d-flex flex-grow-1 justify-content-end">
                            <Link to={'/cart'}>
                                <input type="button" value="Ir al Carrito" className="btn btn-primary m-1" onClick={handleClose}/>
                            </Link>
                        </div>
                    </Typography>
                </Popover>
            </>
        )
    } else {
        return (
            <Fab color="primary" aria-label="add" aria-describedby={'as'} className="mr-4"
                variant="contained" color="primary">
                <ShoppingCartIcon />
            </Fab>
        )
    }
}

export default CartWidget;