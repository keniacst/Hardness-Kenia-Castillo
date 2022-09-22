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
    setCart(cart.filter((item) => item.id !== itemId));
  };

  const isInCart = (itemId) => {
    return cart.some((item) => item.id === itemId);
  };

  const totalCart = () => {
    var prices = cart.map(item => item.price);
    return prices.reduce(
      (previousValue, currentValue) => previousValue + currentValue,
      0
    );
  };

  return (
    <CartContext.Provider
      value={{ cart, emptyCart, addItem, removeItem, isInCart,totalCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

export { CartProvider, CartContext };
