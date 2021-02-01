import './header.css'
import CartWidget from './CartWidget'

const HeaderComponent = () => {
    return (
        <>
        <header>
            <img src="assets/logo.png" alt="" height={110 + 'px'} className="logo"/>
            <CartWidget/>
        </header>
        </>
    );
}

export default HeaderComponent;