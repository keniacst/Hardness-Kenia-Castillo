import { collection, getDocs, getFirestore } from "firebase/firestore";
import { useEffect } from "react";
import { useState } from "react";

const ItemListFirebase = () => {
	const [products, setProducts] = useState([]);

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
		<div>
			<h2> Todos los items </h2>
			{products.length === 0 ? (
				<div> Cargando... </div>
			) : (
				<div>
					<ul>
						{products.map((product) => (
							<li key={product.id}>
								{product.title} {product.image}
							</li>
						))}
					</ul>
				</div>
			)}
		</div>
	);
};

export default ItemListFirebase;
