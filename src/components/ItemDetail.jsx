import { Image } from "react-bootstrap";
import ItemCount from "./ItemCounter";

const ItemDetail = (props) => {
  return (
    <div className="ItemDetail">
      <Image src={props.img} style={{ width: "400px" }} alt="product" />
      <div className="wrapper">
        <div className="ItemDetailText">
          <h3> {props.title} </h3>
          <hr />

          <p> Condición: {props.condition} </p>

          <h4> ${props.price} {props.currency}</h4>

          {/* La api no tiene descripción de productos */}
          <p> {props.description} </p>
          Aquí pondría mi descripción, si tuviera unaa
        </div>
        <hr/>
        <ItemCount />
      </div>
    </ div>
  )
};

export default ItemDetail;