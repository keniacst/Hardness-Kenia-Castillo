import { Button } from "react-bootstrap";
import { useState } from "react";
import { Link } from "react-router-dom";

const ItemCount = ({
  stock,
  initial,
  onAdd,
  purchase,
  removeItemClickHandler,
}) => {
  const [count, setCount] = useState(initial);

  return (
    <div className="purchase">
      <div className="item-counter">
        <button
          className="minusplus"
          onClick={() => {
            setCount(count === 1 ? count : count - 1);
          }}
        >
          -
        </button>
        <div className="num"> {count} </div>
        <button
          className="minusplus"
          onClick={() => {
            setCount(count < stock ? count + 1 : count);
          }}
        >
          +
        </button>
      </div>
      {purchase ? (
        <>
          <Button as={Link} to={`/cart`} className="btn-checkout">
            Finalizar compra
          </Button>

          <Button onClick={() => {
            removeItemClickHandler()
          }} variant="danger">
            Eliminar del carrito
          </Button>
        </>
      ) : (
        <Button
          className="btn-addtocart"
          onClick={() => {
            onAdd(count);
          }}
        >
          Agregar al carrito
        </Button>
      )}
    </div>
  );
};

export default ItemCount;
