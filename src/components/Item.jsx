import Card from 'react-bootstrap/Card';
import ItemCount from './ItemCounter';

const Item = (props) => {
  return (
      <Card className="Card" bg="dark" key="dark"  >
        <Card.Img variant="top" src={props.image} style={{width: "200px"}} />
        <Card.Body>
          <Card.Title>  {props.title} </Card.Title>
          <Card.Text>
            ID: {props.id} 
            {props.description} {' '}
            ${props.price}
          </Card.Text>
          {props.children}
          <ItemCount />
        </Card.Body>
        <Card.Footer>
          {/* <small className="text-muted">Last updated some mins ago</small>  */}

        </Card.Footer>
        </Card>
  )
}


export default Item;