import './App.css';
import ItemListContainer from './containers/ItemListContainer';
import Navbarlogo from './components/NavbarLogo';
import Button from 'react-bootstrap/Button';
import { BrowserRouter, Route, Routes} from "react-router-dom";
import ItemDetailContainer from './containers/ItemDetailContainer';

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbarlogo />
        <Routes>
          <Route path='/'  element = {<ItemListContainer/>} />
          <Route path={process.env.PUBLIC_URL}  element = {<ItemListContainer/>} />
          <Route path='/item/:idProduct' element = {<ItemDetailContainer/>} />
          <Route path='/category/:idCategory' element = {<ItemListContainer/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
