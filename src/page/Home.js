import React, { Component, Fragment } from "react";
import forground from "../image/forground.png";
import pic from "../image/profile.jpg";
import love from "../image/love.png";
import star from "../image/star.png";
import other from "../image/other.png";
import not from "../image/not.png";

import { Button, Nav, Col, Row, Container, Image } from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "../Application.css";
import Match from "./Match";
import Deck from "./Deck";

import Profile from "./Profile";

class Home extends Component {
  render() {
    return (
      <Container fluid>
        <Row className="container-1">
          <Col sm={4} className="body-kiri">
            <Row className="profile">
              <Link to="/Profile">
                <Image src={pic} roundedCircle className="pp" />
              </Link>
              &nbsp; &nbsp;<h3>Ricardo Milos</h3>
              <hr style={{" border-top": "5px solid red"}}/>
            </Row>
            <Row className="match-list">
              <Col>
                <h4>
                  Match
                  <hr />
                </h4>
              </Col>
            </Row>
            <Row className="card-list">
              <Container
                style={{
                  "max-height": "calc(90vh - 100px)",
                  "overflow-y": "auto"
                }}
              >
                <Match />
              </Container>
            </Row>
          </Col>
          <div>
            <Col sm={8} className="body-kanan" style={{
                    "max-height": "calc(220vh - 220px)",
                    "overflow-y": "auto",
                    "overflow":"hidden",
                  }}>
              <div id="swipe" >
                  
                <Deck />
             <div className="button-tinder" >
          
             <Image src={other}></Image>
               <Image src={not}></Image>
               <Image src={love}></Image>
               <Image src={star}></Image>
               
           
             </div>
             
              </div>
            </Col>
          </div>
        </Row>
      </Container>
    );
  }
}

export default Home;
