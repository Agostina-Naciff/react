
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBarComponent from './components/NavBar';
import HeaderComponent from './components/header';
import ItemListComponent from './components/ItemList/itemList';


function App() {
  return (
    <> 
      <HeaderComponent />
      <NavBarComponent />
      <ItemListComponent />
    </>
  );
}

export default App;
