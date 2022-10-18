import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import numberWithDots from "../../utils/Utils";

const Item = (props) => {
	return (
		<Link to={`/item/${props.id}`} className="no-style">
			<Card className="Card" bg="light">
				<Card.Img variant="top" src={props.image} className="card-img" />
				<Card.Body>{props.title}</Card.Body>
				<Card.Footer>
					<h5>
						${numberWithDots(props.price)} {props.currency}{" "}
					</h5>
				</Card.Footer>
			</Card>
		</Link>
	);
};

export default Item;
