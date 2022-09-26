import { Image } from "react-bootstrap";
import ItemCount from "./ItemCount";
import numberWithDots from "../Utils";
import { useContext } from "react";
import { CartContext } from "../contexts/CartContex";

const ItemDetail = ({ img, title, price, id, currency }) => {
  const { addItem, removeItem, isInCart, quantityItem, replaceItem} = useContext(CartContext);

  const onAdd = (quantityToAdd) => {
    if (isInCart(id)) {
      console.log("isInCart + replaceitem")
      replaceItem(id, quantityToAdd)}
    else {
      addItem({ id: id, name: title, price: price, img: img }, quantityToAdd);
    }
  };

  const removeItemClickHandler = () => {
    removeItem(id);
  };

  const isInCartClickHandler = () => {
    return isInCart(id);
  }
  const initialCount = () => {
    return isInCart(id)? quantityItem(id) : 1
  }

  const quantityItemCheck = () => {
    return quantityItem(id)
  }

  return (
    
    <>
      {img ? (
        <div className="ItemDetail">
          <Image src={img} style={{ width: "400px" }} alt="product" />
          <div className="wrapper">
            <div className="ItemDetailText">
              <h3> {title} </h3>
              <hr />
              <p> Id: {id} </p>
              <h4>
                $ {numberWithDots(price)} {currency}
              </h4>
              Aquí pondría mi descripción, si tuviera unaa
              <hr />
            </div>
            <ItemCount
              onAdd={onAdd}
              initial={initialCount}
              stock={200}
              removeItemClickHandler={removeItemClickHandler}
              isInCartClickHandler={isInCartClickHandler}
              quantityItemCheck={quantityItemCheck}
            />
          </div>
        </div>
      ) : (
        <h1> Loading ...</h1>
      )}
    </>
  );
};

export default ItemDetail;
