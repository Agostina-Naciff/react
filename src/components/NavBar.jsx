import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import './NavBar.css';

const NavBarComponent = () => {
    return (
        <>
            <Navbar bg="light" expand="lg">
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="#home">Inicio</Nav.Link>
                        <NavDropdown title="Categorias" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Componentes</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Periférico</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">PC armadas</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="#link">Reparaciones</Nav.Link>
                        <Nav.Link href="#link">Ofertas</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </>
    );
}

export default NavBarComponent;