
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBarComponent from './components/NavBar';
import HeaderComponent from './components/header';
import ItemListComponent from './components/ItemList/itemList';
import ItemDetailContainerComponent from './components/ItemDetail/itemDetailContainer';


function App() {
  return (
    <> 
      <HeaderComponent />
      <NavBarComponent />
      {/* <ItemListComponent /> */}
      <ItemDetailContainerComponent />
    </>
  );
}

export default App;
