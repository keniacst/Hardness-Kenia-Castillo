import React, { useState } from "react";

const CartContext = React.createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const emptyCart = () => {
    setCart([]);
  };

  const addItem = (item, quantity) => {
    setCart([...cart, { ...item, quantity }]);
  };

  const removeItem = (itemId) => {
    setCart(cart.filter((item) => item.id !== itemId));
  };

  const isInCart = (itemId) => {
    return cart.some((item) => item.id === itemId);
  };

  const totalCart = () => {
    var prices = cart.map((item) => item.price*item.quantity);
    return prices.reduce(
      (previousValue, currentValue) => previousValue + currentValue,
      0
    );
  };

  const totalItems = () => {
    let quantity = cart.map((item) => item.quantity);
    return quantity.reduce(
      (previousValue, currentValue) => previousValue + currentValue,
      0
    );
  }

  const quantityItem = (itemId) => {
    return isInCart(itemId)? cart.filter((it) => it.id === itemId)[0].quantity : 0
  }

  const replaceItem = (itemId, newQuantity) => {
    setCart( 
      cart.map(item => 
        item.id === itemId ?
        {...item, quantity: newQuantity}
        : item)
    );
  }

  return (
    <CartContext.Provider
      value={{ cart, emptyCart, addItem, removeItem, isInCart, totalCart, totalItems, quantityItem, replaceItem}}
    >
      {children}
    </CartContext.Provider>
  );
};

export { CartProvider, CartContext };
