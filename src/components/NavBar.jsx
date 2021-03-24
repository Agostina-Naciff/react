import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Redirect, useHistory } from 'react-router';
import './NavBar.css';

const NavBarComponent = () => {
    
  let history = useHistory();

  const redirect = (item) => {
    history.push(item === 0 ? '../list' : `/list/${item}`)
  }

    return (
        <>
            <Navbar bg="light" expand="lg">
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="/">Inicio</Nav.Link>
                        <NavDropdown title="Categorias" id="basic-nav-dropdown">
                            <NavDropdown.Item onClick={() => redirect(0)}>Ver Todos</NavDropdown.Item>
                            <NavDropdown.Item onClick={() => redirect(1)}>Componentes</NavDropdown.Item>
                            <NavDropdown.Item onClick={() => redirect(2)}>Periférico</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="#link">Reparaciones</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </>
    );
}

export default NavBarComponent;