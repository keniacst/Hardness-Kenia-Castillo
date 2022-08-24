import TestGroupCards from "./TestGroupCards";

const ItemListContainer = (props) => {
  return (<div className="ItemListContainer"> {props.greeting} 
  <TestGroupCards/>
  </div>
  )
}

export default ItemListContainer;