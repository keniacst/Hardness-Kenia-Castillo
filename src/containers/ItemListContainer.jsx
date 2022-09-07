
import ItemList from "../components/ItemList";

const ItemListContainer = (props) => {
  return (<div className="ItemListContainer"> {props.greeting} 
  
  <ItemList/>
  </div>
  )
}

export default ItemListContainer;