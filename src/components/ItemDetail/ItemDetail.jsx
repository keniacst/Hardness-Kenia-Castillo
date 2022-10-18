import { Image } from "react-bootstrap";
import ItemCount from "../ItemCount/ItemCount";
import numberWithDots from "../../utils/Utils";
import { useContext } from "react";
import { CartContext } from "../../context/CartContex";

const ItemDetail = ({
	image,
	title,
	price,
	id,
	category,
	stock,
	description,
}) => {
	const { addItem, removeItem, isInCart, quantityItem, replaceItem } =
		useContext(CartContext);

	const onAdd = (quantityToAdd) => {
		if (isInCart(id)) {
			replaceItem(id, quantityToAdd);
		} else {
			addItem(
				{ id: id, title: title, price: price, img: image },
				quantityToAdd
			);
		}
	};

	const removeItemClickHandler = () => {
		removeItem(id);
	};

	const isInCartClickHandler = () => {
		return isInCart(id);
	};
	const initialCount = () => {
		return isInCart(id) ? quantityItem(id) : 1;
	};

	const quantityItemCheck = () => {
		return quantityItem(id);
	};

	return (
		<>
			<div className="ItemDetail">
				<Image src={image} style={{ width: "550px" }} alt="product" />
				<div className="wrapper">
					<div className="ItemDetailText">
						<div style={{ marginBottom: "14px" }}> {category}</div>
						<h1> {title} </h1>
						<hr />
						<h4 style={{ marginBottom: "18px" }}>
							$ {numberWithDots(price)} CLP
						</h4>
						<div style={{ fontSize: "17px" }}> {description}</div>
						<hr />
					</div>
					<ItemCount
						onAdd={onAdd}
						initial={initialCount}
						stock={stock}
						removeItemClickHandler={removeItemClickHandler}
						isInCartClickHandler={isInCartClickHandler}
						quantityItemCheck={quantityItemCheck}
					/>
					<div style={{ fontSize: "14px", marginLeft: "5px" }}>
						Stock {stock} unidades.
					</div>
				</div>
			</div>
		</>
	);
};

export default ItemDetail;
