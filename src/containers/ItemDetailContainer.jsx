import { useEffect, useState } from "react";
import ItemDetail from "../components/ItemDetail";


const ItemDetailContainer = () => {
  const [product, setProduct] = useState([])

  const getItem = async () => {
    try {
      const response = await fetch('https://api.mercadolibre.com/sites/MLA/search?q=libros$');
      let data = await response.json();
      setProduct(data.results[0])
    } catch (e) {
      console.log(e);
    }
  }

  useEffect(() => {
    getItem()
  })

  return (
    <>
    <ItemDetail img = {product.thumbnail} price={product.price}  title={product.title} 
    currency= {product.currency_id}  description= {product.description} condition={product.condition} />
    </>

  )
}

export default ItemDetailContainer;