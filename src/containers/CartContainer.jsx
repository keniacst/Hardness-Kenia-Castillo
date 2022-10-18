import React, { useContext } from "react";
import Cart from "../components/Cart/Cart";
import { CartContext } from "../context/CartContex";

const CartContainer = () => {
	const { cart, emptyCart, totalCart, removeItem } = useContext(CartContext);

	const emptyCartClickHandler = () => {
		emptyCart();
	};

	const removeItemClickHandler = (itemId) => {
		removeItem(itemId);
	};

	return (
		<>
			<Cart
				products={cart}
				total={totalCart}
				emptyCartClickHandler={emptyCartClickHandler}
				removeItemClickHandler={removeItemClickHandler}
			/>
		</>
	);
};

export default CartContainer;
