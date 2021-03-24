import './header.css'
import {useHistory} from "react-router-dom";
import CartWidget from './CartWidget'
import { useEffect } from 'react';

const HeaderComponent = () => {

    return (
        <>
        <header className="d-flex align-items-center justify-content-between">
            <img src="../assets/logo.png" alt="" height={110 + 'px'} className="logo"/>
            <CartWidget />
        </header>
        </>
    );
}

export default HeaderComponent  ;