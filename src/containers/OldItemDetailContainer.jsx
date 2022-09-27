import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../components/ItemDetail";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState([]);
  const { idProduct } = useParams();

  const getItem = async () => {
    try {
      const response = await fetch(
        `https://api.mercadolibre.com/items/${idProduct}`
      );
      let data = await response.json();
      setProduct(data);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getItem();
  });

  return (
    <>
      <ItemDetail
        img={product.image}
        id={product.id}
        price={product.price}
        title={product.title}
      />
    </>
  );
};

export default ItemDetailContainer;
