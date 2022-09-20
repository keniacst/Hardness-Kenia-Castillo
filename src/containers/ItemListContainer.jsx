import { useCallback, useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "../components/ItemList";
import { CartContext } from "../contexts/CartContex";

const ItemListContainer = () => {
  const { cart } = useContext(CartContext)
  const [products, setProducts] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const { idCategory } = useParams();

  const searchProducts = async () => {
    try {
      const response = await fetch(
        "https://api.mercadolibre.com/sites/MLC/search?q=tecnologia$"
      );
      let data = await response.json();
      setProducts(data.results);
      setLoaded(true);
    } catch (e) {
      console.log(e);
    }
  };

  const byCategory = useCallback(async () => {
    try {
      const response = await fetch(
        `https://api.mercadolibre.com/sites/MLC/search?category=${idCategory}`
      );
      let data = await response.json();
      setProducts(data.results);
      setLoaded(true);
    } catch (e) {
      console.log(e);
    }
  }, [idCategory]);

  useEffect(() => {
    console.log(cart)
    setTimeout( () => {
      if (typeof idCategory == "undefined") {
        searchProducts();
      } else {
        byCategory();
      }
    }, 200);
    
  }, [cart, idCategory, byCategory]);

  return (
    <>
      {loaded? (
        <div className="ItemListContainer">
          <ItemList products={products} />
        </div>
      ) : (
        <h1> Loading... </h1>
      )}
    </>
  );
};

export default ItemListContainer;
