import { useEffect, useState } from "react";
import Item from "./Card";
import CardGroup from 'react-bootstrap/CardGroup';

const ItemList = (props) => {
  const [products, setProducts] = useState([])

  const searchProducts = async () => {
    // console.log(props.category)
    try {
      const response = await
        fetch('https://api.mercadolibre.com/sites/MLC/search?q=tecnologia$');
      let data = await response.json();
      // setProducts(data.results.slice(0, 15))
      setProducts(data.results)
      // console.log(data.results[0].category_id)
    } catch (e) {
      console.log(e);
    }
  }

  const searchProductsByCategory = async () => {
    let category = props.category
    console.log(category)
    try {
      const response = await
        fetch(`https://api.mercadolibre.com/sites/MLC/search?category=${props.category}`);
      let data = await response.json();
      setProducts(data.results)
      // console.log(data.results[0].category_id)
    } catch (e) {
      console.log(e);
    }
  }

  useEffect(() => {
    if (typeof(props.category) == 'undefined'){
      searchProducts()
    }
    else {
      searchProductsByCategory()
    }
  })

  return (
    <CardGroup className="card-group">
      {products.map((product, index) => {
        return (
          <div className="Card-Item" key={index} >
            <Item id={product.id} currency={product.currency_id} image={product.thumbnail} title={product.title} price={product.price} />
          </div>
        )
      })}
    </CardGroup>
  )
}

export default ItemList;