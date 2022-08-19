import './App.css';
import ItemListContainer from './components/ItemListContainer/itemlistcontainer';
import Navbarlogo from './components/Navbarlogo/Navbarlogo';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
      <Navbarlogo />
      </header>
      <ItemListContainer greeting="Hola! Este es mi Item List Container" />
    </div>
  );
}

export default App;
