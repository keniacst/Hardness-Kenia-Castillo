import { useEffect, useState } from "react";
import Item from "./Item";
import CardGroup from 'react-bootstrap/CardGroup';

const ItemList = () => {
  const [products, setProducts] = useState([])

  const searchProducts = async () => {
    try {
      const response = await
        fetch('https://api.mercadolibre.com/sites/MLA/search?q=libros$');
      let data = await response.json();
      setProducts(data.results.slice(0, 12))
    } catch (e) {
      console.log(e);
    }
  }

  useEffect(() => {
    searchProducts()
  })


  return (
      <CardGroup className="card-group">
      {products.map((product, index) => {
        return (
          <div key={index} >         
            <Item id={product.id} text={product.description} image={product.thumbnail} title={product.title} price={product.price} />
          </div>
        )
      })}
      </CardGroup>
  )
}

export default ItemList;