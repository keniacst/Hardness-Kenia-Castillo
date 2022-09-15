import { Image } from "react-bootstrap";
import ItemCount from "./ItemCount";
import numberWithDots from "../Utils";
import { useState } from "react";

const ItemDetail = (props) => {
  const [purchase, setPurchase] = useState(false);
  const onAdd = (quantityToAdd) => {
    setPurchase(true);
    console.log("quantityToAdd en onAdd " + quantityToAdd);
  };

  return (
    <div className="ItemDetail">
      <Image src={props.img} style={{ width: "400px" }} alt="product" />
      <div className="wrapper">
        <div className="ItemDetailText">
          <h3> {props.title} </h3>
          <hr />
          <p> Condición: {props.condition} </p>
          <h4>
            $ {numberWithDots(props.price)} {props.currency}
          </h4>
          <p> {props.description} </p>
          Aquí pondría mi descripción, si tuviera unaa
          <hr />
        </div>
        <ItemCount onAdd={onAdd} initial={1} stock={200} purchase={purchase} />
      </div>
    </div>
  );
};

export default ItemDetail;
