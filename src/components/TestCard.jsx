import Card from 'react-bootstrap/Card';

const TestCard = (props) => {
  return (
      <Card className="Card" bg="dark" key="dark"  >
        <Card.Img variant="top" src={props.image} style={{width: "200px"}} />
        <Card.Body>
          <Card.Title> {props.title} </Card.Title>
          <Card.Text>
            {props.text} {' '}
          </Card.Text>
          {props.children}
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated some mins ago</small>
        </Card.Footer>
        </Card>
  )
}


export default TestCard;