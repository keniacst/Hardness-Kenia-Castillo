import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "../components/ItemList/ItemList";
import { collection, getDocs, getFirestore } from "firebase/firestore";

const ItemListContainer = () => {
	const [products, setProducts] = useState([]);
	const { idCategory } = useParams();

	useEffect(() => {
		const db = getFirestore();
		const items = collection(db, "items");
		getDocs(items).then((snapshot) => {
			const docs = snapshot.docs.map((doc) => ({
				id: doc.id,
				...doc.data(),
			}));
			setProducts(docs);
		});
	}, []);

	return (
		<>
			{products.length === 0 ? (
				<h1 className="loading"> Loading... </h1>
			) : (
				<>
					<div className="ItemListContainer">
						{typeof idCategory != "undefined" ? (
							<>
								<h1> {idCategory} </h1>
								<ItemList
									products={products.filter(
										(product) => product.category === idCategory
									)}
								/>
							</>
						) : (
							<>
								<h1> Productos </h1>
								<ItemList products={products} />
							</>
						)}
					</div>
				</>
			)}
		</>
	);
};

export default ItemListContainer;
