import Item from "./Item";
import CardGroup from "react-bootstrap/CardGroup";

const ItemList = (props) => {
  let products = props.products;

  return (
    <> 
    <CardGroup className="card-group">
      {products.map((product, index) => {
        return (
          <div className="Card-Item" key={index}>
            <Item
              id={product.id}
              currency={product.currency_id}
              image={product.thumbnail}
              title={product.title}
              price={product.price}
            />
          </div>
        );
      })}
    </CardGroup>
    </>
  );
};

export default ItemList;
