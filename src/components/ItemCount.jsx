import { Button } from "react-bootstrap";
import { useState } from "react";
import TestEvent from "./TestEvent";

const ItemCount = ({ stock = 200, initial = 0, onAdd }) => {
  const [count, setCount] = useState(initial);

  return (
    <>
      <div className="ItemCounter">
        <button
          className="minusplus"
          onClick={() => {
            setCount(count === 0 ? count : count - 1);
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
      <Button className="custom-class"> Agregar al carrito </Button>
    </>
  );
};

export default ItemCount;
