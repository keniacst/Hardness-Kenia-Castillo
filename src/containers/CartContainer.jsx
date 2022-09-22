import React, { useContext } from "react";
import Cart from "../components/Cart";
import { CartContext } from "../contexts/CartContex";

const CartContainer = () => {
  const { cart, emptyCart, totalCart, removeItem } = useContext(CartContext);

  const emptyCartClickHandler = () => {
    emptyCart();
  };

  return (
    <>
      <Cart
        products={cart}
        total={totalCart}
        emptyCartClickHandler={emptyCartClickHandler}
      />
    </>
  );
};

export default CartContainer;
