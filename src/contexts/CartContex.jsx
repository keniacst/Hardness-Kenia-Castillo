import React, { useState } from "react";

const CartContext = React.createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const emptyCart = () => {
    setCart([]);
  };

  const addItem = (item, quantity) => {
    for (const pair of cart) {
        if (JSON.stringify(item) === JSON.stringify(pair[0])) {
            console.log("Item ya esta en carrito")
            return
        }
    }
    setCart([...cart, [item, quantity]])
  };

  const removeItem = (itemId) => {
    let index = 0
    for (const pair of cart) {
        if ((pair[0].id) === itemId) {
            cart.splice(index, 1)
            return
        }
        else {
            index += 1
        }
    }
  };

  const isInCart = (itemId) => {
    for (const pair of cart) {
        if ((pair[0].id) === itemId) {
            return true
        }
    }
    return false
  };

  return (
    <CartContext.Provider value={{cart, emptyCart, addItem, removeItem, isInCart}}>
      {children}
    </CartContext.Provider>
  );
};

export { CartProvider, CartContext };
