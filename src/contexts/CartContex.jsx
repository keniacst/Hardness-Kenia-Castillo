import React, { useState } from "react";

const CartContext = React.createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const emptyCart = () => {
    setCart([]);
  };

  const addItem = (item, quantity) => {
    isInCart(item.id)
      ? console.log("Item ya esta en carrito")
      : setCart([...cart, { ...item, quantity }]);
  };

  const removeItem = (itemId) => {
    setCart(cart.filter((itm) => itm.id !== itemId));
  };

  const isInCart = (itemId) => {
    return cart.some((itm) => itm.id === itemId);
  };

  return (
    <CartContext.Provider
      value={{ cart, emptyCart, addItem, removeItem, isInCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

export { CartProvider, CartContext };
