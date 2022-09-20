import "./App.css";
import ItemListContainer from "./containers/ItemListContainer";
import Navbarlogo from "./components/NavbarLogo";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ItemDetailContainer from "./containers/ItemDetailContainer";
import CartContainer from "./containers/CartContainer";
import { CartProvider } from "./contexts/CartContex";

const App = () => {
  return (
    <div className="App">
      <CartProvider>
        <BrowserRouter>
          <Navbarlogo />
          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route
              path={process.env.PUBLIC_URL}
              element={<ItemListContainer />}
            />
            <Route path="/item/:idProduct" element={<ItemDetailContainer />} />
            <Route
              path="/category/:idCategory"
              element={<ItemListContainer />}
            />
            <Route path="/cart" element={<CartContainer />} />
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </div>
  );
};

export default App;
