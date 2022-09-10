
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "../components/ItemList";

const ItemListContainer = () => {
  const [products, setProducts] = useState([])
  const {idCategory} = useParams();

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
    let category = idCategory
    console.log(category)
    try {
      const response = await
        fetch(`https://api.mercadolibre.com/sites/MLC/search?category=${idCategory}`);
      let data = await response.json();
      setProducts(data.results)
      // console.log(data.results[0].category_id)
    } catch (e) {
      console.log(e);
    }
  }

  useEffect(() => {
    if (typeof(idCategory) == 'undefined'){
      searchProducts()
    }
    else {
      searchProductsByCategory()
    }
  })


  return (<div className="ItemListContainer"> 
  <ItemList products={products} />
  </div>
  )
}

export default ItemListContainer;