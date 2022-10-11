import { addDoc, collection, getFirestore } from "firebase/firestore";
import { useContext, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { FaAngellist, FaCheck } from "react-icons/fa";
import { RiEmotionHappyLine } from "react-icons/ri";
import { CartContext } from "../contexts/CartContex";

const ContactForm = () => {
	const { cart, totalCart } = useContext(CartContext);
	const [id, setId] = useState();
	const [form, setForm] = useState({
		name: "",
		email: "",
		phone: "",
	});

	const changeHandler = (event) => {
		const newForm = { ...form, [event.target.name]: event.target.value };
		setForm(newForm);
	};

	const submitHandler = (event) => {
		event.preventDefault();
		const db = getFirestore();
		const contactFormCollection = collection(db, "orders");
		const items = cart.map((product) => ({
			id: product.id,
			title: product.title,
			price: product.price,
		}));
		let currentDate = new Date().toJSON().slice(0, 10);

		addDoc(contactFormCollection, {
			date: currentDate,
			total: totalCart(),
			buyer: { ...form },
			items: { ...items },
		}).then((snapshot) => setId(snapshot.id));
	};

	return (
		<div className="paddng">
			{typeof id !== "undefined" ? (
				<>
					<h3>
						<RiEmotionHappyLine size={36} className="icon" />
						Pedido realizado!
					</h3>
					<div className="empty-cart">
						<p>El número de identificación de tu orden es {id}.</p>
					</div>
				</>
			) : (
				<>
					<h1> Datos de compra </h1>
					<Form onSubmit={submitHandler}>
						<Form.Group role="form" className="mb-3">
							<Form.Label htmlFor="name"> Nombre </Form.Label>
							<Form.Control
								placeholder="Ingrese su nombre"
								name="name"
								id="name"
								onChange={changeHandler}
							/>
						</Form.Group>

						<Form.Group className="mb-3">
							<Form.Label htmlFor="email"> Email </Form.Label>
							<Form.Control
								placeholder="Ingrese su email"
								type="email"
								name="email"
								id="email"
								onChange={changeHandler}
								value={form.email}
							/>
						</Form.Group>
						<Form.Group className="mb-3">
							<Form.Label htmlFor="phone"> Teléfono </Form.Label>
							<Form.Control
								placeholder="Ingrese su teléfono"
								name="phone"
								id="phone"
								onChange={changeHandler}
								value={form.phone}
							/>
						</Form.Group>
						<Button type="submit" className="btn-enviar">
							Enviar
						</Button>
					</Form>
				</>
			)}
		</div>
	);
};

export default ContactForm;
