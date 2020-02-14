import React, { Component } from "react";
import pic from "../image/profile.jpg";
import back from "../image/back.png";
import Addpet from "./Addpet";
import { MdLocationOn } from "react-icons/md";
import { FaRegUser } from "react-icons/fa";
import { FaTransgender } from "react-icons/fa";
import { MdPhoneAndroid } from "react-icons/md";

import {
  Button,
  ListGroup,
  ListGroupItem,
  Card,
  Col,
  Row,
  Container,
  Image
} from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "../Application.css";
import Match from "./Match";
import DataProfile from "./DataProfile";

class Home extends Component {
  render() {
    return (
      <Container fluid>
        <Row className="container-1">
          <Col sm={4} className="body-kiri">
            <Row className="profile-geser">
              <Link to="/Home">
                <Image src={back}></Image>
              </Link>
              <Image src={pic} roundedCircle className="pp" />
              &nbsp; &nbsp;<h3>Owl-chan</h3>
            </Row>

            <Row className="card-list" >
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
                    "overflow-y": "auto"
                  }}
                >
                  <div className="pp2">
                    <Card.Img variant="top" src={pic} />
                  </div>
                  <Card.Body>
                    <Card.Title>
                      <h3>Owl</h3>
                    </Card.Title>
                    <Card.Text>
                      <Container className="text">
                        <FaRegUser /> Breeder Profil : zamhadi
                      </Container>

                      <Container className="text">
                        <MdLocationOn /> 10 kilometer dari sini
                      </Container>

                      <Container className="text">
                        {" "}
                        <FaTransgender /> Male - Adult
                      </Container>

                      <Container className="text">
                        <MdPhoneAndroid /> Phone Breeder : 08999823823332
                      </Container>

                      <Card.Title>
                        <h3>About</h3>
                      </Card.Title>
                      <Container className="text">
                        lorem isum sadas;jadasdasdsad aa dsaa sdadadsasd
                        asdasdasdasda sdadasdasd asdadsadsads adasdadadas adasd
                        asd sad asd asdad asd asd ad asd sad asd
                        alsndlhkjsakjkiasdjioadnkh n 'ankjfjoaw
                        askadkobf;jioadja a kpojhflk a kj;jlj;adadjl;adjlad[kfa
                      </Container>
                    </Card.Text>
                    <Link to="/Edit">
                    <Button variant="success" block>
                      Edit
                    </Button>
                    </Link>
                  </Card.Body>
                </Card>
                <Col xs={{ order: 12 }} sm={2} className="bodybiasa">
          <Addpet/>
          </Col>
              </div>

            </Col>
          </div>

          
        </Row>
      </Container>
    );
  }
}

export default Home;
