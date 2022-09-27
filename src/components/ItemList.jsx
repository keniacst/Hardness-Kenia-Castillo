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
                image={product.image}
                title={product.title}
                price={product.price}
                categoryId={product.categoryId}
                category={product.category}
                stock={product.stock}
              />
            </div>
          );
        })}
      </CardGroup>
    </>
  );
};

export default ItemList;
