import React, { Component } from "react";
import pic from "../image/profile.jpg";
import Addpet from "./Addpet";
import two from "../image/cat.jpg";
import dumy from "../image/dummy.jpg";

// --------------------------Edit Profile ------------------------------------
import {
  Button,
  Card,
  Col,
  Row,
  Container,
  Image,
  ListGroup
} from "react-bootstrap";
import { BrowserRouter as Router, Link } from "react-router-dom";
import "../Application.css";
import DataProfile from "./DataProfile";

class Edit extends Component {
  render() {
    return (
      <Container fluid>
        <Row className="container-1">
          <Col sm={4} className="body-kiri">
            <Row className="profile">
              <Link to="/Profile">
                <Image src={pic} roundedCircle className="pp" />
              </Link>
              &nbsp; &nbsp;<h3>Owl-chan</h3>
            </Row>

            <Row className="card-list">
              <Container>
                <DataProfile />
              </Container>
            </Row>
          </Col>

          <div>
            <Col sm={5} className="body-kanan">
              <div className="swipe">
                <Card
                  className="card-profile"
                  style={{
                    "max-height": "calc(100vh - 100px)",
                    "overflow-y": "auto",
                    "overflow-x": "hidden"
                  }}
                >
                  <Row className="Edit-dummy">
                    <Col sm={4}>
                      <img variant="top" src={two} />
                    </Col>

                    <Col sm={4}>
                      <img variant="top" src={dumy} />
                    </Col>

                    <Col sm={4}>
                      <img variant="top" src={dumy} />
                    </Col>
                  </Row>

                  <Row className="Edit-dummy">
                    <Col sm={4}>
                      <img variant="top" src={dumy} />
                    </Col>

                    <Col sm={4}>
                      <img variant="top" src={dumy} />
                    </Col>

                    <Col sm={4}>
                      <img variant="top" src={dumy} />
                    </Col>
                  </Row>

                  <Row className="Edit-dummy">
                    <Col sm={4}>
                      <img variant="top" src={dumy} />
                    </Col>

                    <Col sm={4}>
                      <img variant="top" src={dumy} />
                    </Col>

                    <Col sm={4}>
                      <img variant="top" src={dumy} />
                    </Col>
                  </Row>

                  <ListGroup className="List-gu">
                    <ListGroup.Item variant="dark">
                      <h5>Nama pet</h5>
                    </ListGroup.Item>
                    <ListGroup.Item variant=""> Gerry </ListGroup.Item>
                    <ListGroup.Item variant="dark">
                      <h5>Breeder</h5>
                    </ListGroup.Item>
                    <ListGroup.Item variant="">Zamhadi</ListGroup.Item>
                    <ListGroup.Item variant="dark">
                      <h5>Gender</h5>
                    </ListGroup.Item>
                    <ListGroup.Item variant="">Male</ListGroup.Item>
                    <ListGroup.Item variant="dark">
                      <h5>Age</h5>
                    </ListGroup.Item>
                    <ListGroup.Item variant="">Adult</ListGroup.Item>
                    <ListGroup.Item variant="dark">
                      <h5> About Pet</h5>
                    </ListGroup.Item>
                  </ListGroup>

                  <Card.Footer>
                    <Link to="/Profile">
                      <Button variant="success" block>
                        Save
                      </Button>
                    </Link>
                  </Card.Footer>
                </Card>
                <Col xs={{ order: 12 }} sm={2} className="bodybiasa">
                  <Addpet />
                </Col>
              </div>
            </Col>
          </div>
        </Row>
      </Container>
    );
  }
}

export default Edit;
