import { useEffect, useState } from "react";
import { getDoc, getFirestore, doc } from "firebase/firestore";

const ItemById = () => {
	const [id, setId] = useState("");
	const [product, setProduct] = useState({});

	const inputChangeHandler = (ev) => {
		setId(ev.target.value);
	};

	useEffect(() => {
		if (id) {
			const db = getFirestore();
			const itemRef = doc(db, "items", id.trim());
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
	}, [id]);

	return (
		<div>
			<h1> Recuperador de item </h1>
			<input onChange={inputChangeHandler} value={id} />
			<p> Titulo {product?.title} </p>
		</div>
	);
};

export default ItemById;
