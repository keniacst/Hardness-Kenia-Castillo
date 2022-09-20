import React, { useContext } from "react";
import { Button } from "react-bootstrap";
import { CartContext } from "../contexts/CartContex";

const CartContainer = () => {
  const { cart, emptyCart } = useContext(CartContext);

  const emptyCartClickHandler = () => {
    emptyCart();
  };

  return (
    <>
      {/* <div>
        El cart es{" "}
        {cart.map((item, index) => {
          return (
          <div key={index}>
            <h1> {item.name} </h1>
          </div>)
        })}
      </div> */}
      <Button onClick={emptyCartClickHandler}> EmptyCart </Button>

      {/* </div>
      {true ? <> El usuario es: a </> : <> No hay usuario </>}
      <Button onClick={emptyCartClickHandler}> EmptyCart </Button> */}
    </>
  );
};

export default CartContainer;
