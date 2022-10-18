import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../components/ItemDetail/ItemDetail";
import { getDoc, getFirestore, doc } from "firebase/firestore";

const ItemDetailContainer = () => {
	const [product, setProduct] = useState([]);
	const { idProduct } = useParams();

	useEffect(() => {
		if (idProduct) {
			const db = getFirestore();
			const itemRef = doc(db, "items", idProduct);
			getDoc(itemRef).then((snapshot) => {
				if (snapshot.exists()) {
					const newProduct = {
						id: snapshot.id,
						...snapshot.data(),
					};
					setProduct(newProduct);
				}
			});
		}
	}, [idProduct]);

	return (
		<>
			{product.image ? (
				<ItemDetail
					id={product.id}
					image={product.image}
					title={product.title}
					price={product.price}
					categoryId={product.categoryId}
					category={product.category}
					stock={product.stock}
					description={product.description}
				/>
			) : (
				<div>
					<h1 className="loading"> Loading ...</h1>
				</div>
			)}
		</>
	);
};

export default ItemDetailContainer;
