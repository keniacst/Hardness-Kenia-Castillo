import { useContext } from "react";
import { ReactComponent as Logo } from "../assets/cart.svg";
import { CartContext } from "../contexts/CartContex";

const CartWidget = () => {
  const { totalItems } = useContext(CartContext);

  return (
    <div className="cart-widget">
      <Logo fill=" #efd8ff " />
      <p> {totalItems()}</p>
    </div>
  );
};

export default CartWidget;
