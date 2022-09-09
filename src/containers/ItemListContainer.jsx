
import { useParams } from "react-router-dom";
import ItemList from "../components/ItemList";

const ItemListContainer = () => {
  const {idCategory} = useParams();

  return (<div className="ItemListContainer"> 
  <ItemList category={idCategory} />
  </div>
  )
}

export default ItemListContainer;