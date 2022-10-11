import { useContext } from "react";
import { ReactComponent as Logo } from "../assets/cart.svg";
import { CartContext } from "../contexts/CartContex";

const CartWidget = () => {
	const { totalItems } = useContext(CartContext);
	return (
		<>
			{totalItems() > 0 ? (
				<div className="cart-widget">
					<div style={{ marginRight: "0.5rem" }}> {totalItems()}</div>
					<Logo fill=" #efd8ff " />
				</div>
			) : (
				<div> </div>
			)}
		</>
	);
};

export default CartWidget;
