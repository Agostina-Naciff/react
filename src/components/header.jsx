import './header.css'

const HeaderComponent = () => {
    return (
        <>
        <header>
            <img src="assets/logo.png" alt="" height={110 + 'px'} className="logo"/>
            <input type="button" value="Mi Carrito" className="btn btn-primary"/>
        </header>
        </>
    );
}

export default HeaderComponent;