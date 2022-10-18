import { Button } from "react-bootstrap";
import { useState } from "react";
import { Link } from "react-router-dom";
import Counter from "../Counter/Counter";
import { FaCheck, FaTrash } from "react-icons/fa";
const ItemCount = ({
	stock,
	initial,
	onAdd,
	quantityItemCheck,
	removeItemClickHandler,
}) => {
	const [count, setCount] = useState(initial);

	const minusClickHandler = () => {
		setCount(count === 1 ? count : count - 1);
	};

	const plusClickHandler = () => {
		setCount(count < stock ? count + 1 : count);
	};

	return (
		<div className="purchase">
			<Counter
				minusClickHandler={minusClickHandler}
				plusClickHandler={plusClickHandler}
				count={count}
			/>
			{count === quantityItemCheck() ? (
				<>
					<Button as={Link} to={`/cart`} className="btn-checkout">
						<FaCheck className="new-icon" /> Finalizar compra
					</Button>
					<Button
						onClick={() => {
							removeItemClickHandler();
						}}
						className="btn-deletefromcart"
					>
						<FaTrash className="new-icon" /> Eliminar del carrito
					</Button>
				</>
			) : (
				<Button
					className="btn-purple"
					onClick={() => {
						onAdd(count);
					}}
				>
					Agregar al carrito
				</Button>
			)}
		</div>
	);
};

export default ItemCount;
