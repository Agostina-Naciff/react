import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import './CartWidget.css'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { Fab, Popover, Table, TableBody, TableCell, TableContainer, TableRow, Typography } from '@material-ui/core';
import { cartContext } from '../Context/CartContext';

const useStyles = makeStyles((theme) => ({
    typography: {
        padding: theme.spacing(2),
    },
    table: {
        minWidth: 650,
    }
}));

const CartWidget = () => {

    const {getCart} = useContext(cartContext) | '';

    const classes = useStyles();

    const [anchorEl, setAnchorEl] = React.useState(null);

    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <>
            <Fab color="primary" aria-label="add" aria-describedby={'as'} variant="contained" color="primary" onClick={handleClick}>
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
                    <TableContainer>
                        <Table>
                            <TableBody>
                                    <TableRow>
                                        <TableCell component="th" scope="row">
                                            asd
                                        </TableCell>
                                        <TableCell align="right">asd</TableCell>
                                        <TableCell align="right">asd</TableCell>
                                        <TableCell align="right">asd</TableCell>
                                        <TableCell align="right">asd</TableCell>
                                    </TableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Typography>
            </Popover>
        </>
    )
}

export default CartWidget;