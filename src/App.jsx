import './App.css';
import ItemListContainer from './containers/ItemListContainer';
import Navbarlogo from './components/NavbarLogo';
import Button from 'react-bootstrap/Button';
import ItemCount from './components/ItemCounter';
import { BrowserRouter, Route, Routes} from "react-router-dom";
import ItemDetailContainer from './containers/ItemDetailContainer';

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbarlogo />
        <Routes>
          <Route path={process.env.PUBLIC_URL}  element = {<ItemDetailContainer/>} />
          <Route path='/itemlistcontainer'  element = {<ItemListContainer greeting="Hola! Este es mi Item List Container"/>} /> 
          <Route path='/producto/:idProducto' element = {<ItemCount/>} />
          <Route path='/categoria/:idCategoria' element = {<ItemCount/>} />
          <Route path='/detalle/:idProducto' element = {<ItemCount/>} />
        </Routes>
        <Button className='custom-class'> Boton de Practica (custom boostrap) </Button>
      </BrowserRouter>
    </div>
  );
}

export default App;
