
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import NavBarComponent from './components/NavBar';
import HeaderComponent from './components/header';
import ItemListComponent from './components/ItemList/itemList';
import ItemDetailContainerComponent from './components/ItemDetail/itemDetailContainer';
import CartContext from './Context/CartContext';
import CartComponent from './components/Cart/cart';

function App() {
  return (
    <BrowserRouter>
      <HeaderComponent />
      <NavBarComponent />
      <CartContext>
      <Switch>
        <Route exact path="/">
          <Redirect to="/list" />
        </Route>
        <Route exact path="/list/:id?">
          <ItemListComponent />
        </Route>
        <Route exact path="/detail/:id">
          <ItemDetailContainerComponent />
        </Route>
        <Route exact path="/cart">
          <CartComponent />
        </Route>
      </Switch>
      </CartContext>
    </BrowserRouter>
  );
}

export default App;
