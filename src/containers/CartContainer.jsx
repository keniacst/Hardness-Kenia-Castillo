import React, { useContext } from "react";
import { Button } from "react-bootstrap";
import Cart from "../components/Cart";
import { CartContext } from "../contexts/CartContex";

const CartContainer = () => {
  const { cart, emptyCart, totalCart } = useContext(CartContext);

  const emptyCartClickHandler = () => {
    emptyCart();
  };

  return (
    <>
      <Cart products={cart} total={totalCart}/>
      <Button onClick={emptyCartClickHandler}> EmptyCart </Button>
    </>
  );
};

export default CartContainer;
