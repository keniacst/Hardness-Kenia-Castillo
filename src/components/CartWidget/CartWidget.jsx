import { useContext } from "react";
import { ReactComponent as Cart } from "../../assets/cart.svg";
import { CartContext } from "../../context/CartContex";

const CartWidget = () => {
	const { totalItems } = useContext(CartContext);
	return (
		<>
			{totalItems() > 0 ? (
				<div className="cart-widget">
					<div style={{ marginRight: "0.5rem" }}> {totalItems()}</div>
					<Cart fill=" #efd8ff " />
				</div>
			) : (
				<div> </div>
			)}
		</>
	);
};

export default CartWidget;
