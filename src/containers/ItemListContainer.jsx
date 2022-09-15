import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "../components/ItemList";

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const { idCategory } = useParams();

  const searchProducts = async () => {
    try {
      const response = await fetch(
        "https://api.mercadolibre.com/sites/MLC/search?q=tecnologia$"
      );
      let data = await response.json();
      // setProducts(data.results.slice(0, 15))
      setProducts(data.results);
      setLoaded(true);
    } catch (e) {
      console.log(e);
    }
  };

  const searchProductsByCategory = async () => {
    let category = idCategory;
    try {
      const response = await fetch(
        `https://api.mercadolibre.com/sites/MLC/search?category=${idCategory}`
      );
      let data = await response.json();
      setProducts(data.results);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    if (typeof idCategory == "undefined") {
      searchProducts();
    } else {
      searchProductsByCategory();
    }
  });

  if (!loaded) {
    return <h1> Loading... </h1>;
  } else {
    return (
      <div className="ItemListContainer">
        <ItemList products={products} />
      </div>
    );
  }
};

export default ItemListContainer;
