import React, { Component } from "react";
import { ListGroup ,Container,Row,Col ,Form, Button} from "react-bootstrap";
import { Link } from "react-router-dom";
import "../Application.css";


class DataProfile extends Component {
 
    render() {
        function alertClicked() {
            alert('You clicked the third ListGroupItem');
          }
    return (
  <div id="utama-profil" >
      <Container >
<ListGroup className="List-g" >
<ListGroup.Item>
<h2>Account Settings</h2>
</ListGroup.Item>
  
  <ListGroup.Item>Email : Zamhadi21@gmail.com</ListGroup.Item>
  <ListGroup.Item>Phone : 081277060233</ListGroup.Item>
  <ListGroup.Item><h2>Discovery Settings</h2></ListGroup.Item>
  <ListGroup.Item>
<div className="Discovery">
  <Row>
    <Col><h5>Maxsimum distance</h5></Col>
    <Col><h5>10Km</h5></Col>
  </Row>
  <Row>
    <Col>
    <input type="range" className="custom-range" id="customrange1">

    </input>
    </Col>
  </Row>
  <Row>
    <Col><h5>Age</h5></Col>
  </Row>
  <Row>
    <Col>
    <Container className="option-control">
    <Form.Control as="select" value="Choose..." >
        <option>Adult</option>
        <option>Teenager</option>
        <option>Child</option>
      </Form.Control>
      </Container>
        
        </Col>
  </Row>

  <Row>
    <Col><h5>Species</h5></Col>
  </Row>
  <Row>
    <Col>
    <Container className="option-control">
    <Form.Control as="select" value="Owl" >
    <option>Owl regular</option>
        <option>Owl eostrix </option>
        <option>Ptilopsis leucotis</option>
        <option> Ptilopsis granti</option>
       
      </Form.Control>
      </Container>
        
        </Col>
  </Row>
  <Row>
    <Link to="/">
    <Button variant="outline-success" > 
      logout
    </Button>
    </Link>
   
  </Row>


  </div>

  </ListGroup.Item>
  
</ListGroup>

</Container>
</div>
);
}
}

export default DataProfile;
