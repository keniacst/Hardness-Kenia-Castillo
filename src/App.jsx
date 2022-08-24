import './App.css';
import ItemListContainer from './components/ItemListContainer';
import Navbarlogo from './components/NavbarLogo';
import Button from 'react-bootstrap/Button';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
      <Navbarlogo />
      </header>
      <ItemListContainer greeting="Hola! Este es mi Item List Container" />

    <footer> 
      <Button className='custom-class'> Boton de Practica (custom boostrap) </Button>
      </footer>
    </div>
  );
}

export default App;
