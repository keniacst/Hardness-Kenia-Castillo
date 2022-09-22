import { Button, Image } from "react-bootstrap";
import ItemCount from "./ItemCount";
import numberWithDots from "../Utils";
import { useState } from "react";
import { useContext } from "react";
import { CartContext } from "../contexts/CartContex";

const ItemDetail = ({ img, title, price, id, currency }) => {
  const [purchase, setPurchase] = useState(false);
  const { addItem, removeItem, isInCart } = useContext(CartContext);

  const onAdd = (quantityToAdd) => {
    setPurchase(true);
    addItem({ id: id, name: title, price: price, img: img }, quantityToAdd);
  };

  const removeItemClickHandler = () => {
    removeItem(id);
    setPurchase(false);
  };

  const isInCartClickHandler = () => {
    console.log(isInCart(id));
  };

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
              initial={1}
              stock={200}
              purchase={purchase}
              removeItemClickHandler={removeItemClickHandler}
            />
            <Button onClick={isInCartClickHandler}> Is in cart? </Button>
          </div>
        </div>
      ) : (
        <h1> Loading ...</h1>
      )}
    </>
  );
};

export default ItemDetail;
