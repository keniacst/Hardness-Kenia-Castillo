import Card from 'react-bootstrap/Card';

const Item = (props) => {
  return (
      <Card className="Card" bg="dark" key="dark"  >
        <Card.Img variant="top" src={props.image} style={{width: "200px"}} />
        <Card.Body>
          <Card.Title>  {props.title} </Card.Title>
          <p> ID: {props.id}  </p>           
          {/* <Card.Text component={'span'} >
            
          </Card.Text> */}
          {props.description} {' '}
          <h5>${props.price} </h5>
          {props.children}
          
        </Card.Body>
        <Card.Footer>
        
        
          {/* <small className="text-muted">Last updated some mins ago</small>  */}

        </Card.Footer>
        </Card>
  )
}


export default Item;