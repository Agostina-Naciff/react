
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBarComponent from './components/NavBar';
import HeaderComponent from './components/header';
import ItemListContainerComponent from './components/ItemListContainer';


function App() {
  return (
    <> 
      <HeaderComponent />
      <NavBarComponent />
      <ItemListContainerComponent name="Mariano Leonel Acosta" />
    </>
  );
}

export default App;
