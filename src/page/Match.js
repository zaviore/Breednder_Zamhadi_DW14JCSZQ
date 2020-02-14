import React, { Component } from "react";
import { Button, Nav, Col, Row, Container, Image } from "react-bootstrap";

import "../Application.css";
import one from "../image/milos.jpg";
import two from "../image/cat.jpg";
import three from "../image/ugu.jpg";

class Match extends Component {
  render() {
    return (
      <Container>
        <Row className="match-dummy">
          <Col sm={4}>
            <img variant="top" src={two} />
          </Col>

          <Col sm={4}>
            <img variant="top" src={two} />
          </Col>

          <Col sm={4}>
            <img variant="top" src={two} />
          </Col>
        </Row>

        <Row className="match-dummy">
          <Col sm={4}>
            <img variant="top" src={two} />
          </Col>

          <Col sm={4}>
            <img variant="top" src={two} />
          </Col>

          <Col sm={4}>
            <img variant="top" src={two} />
          </Col>
        </Row>

        <Row className="match-dummy">
          <Col sm={4}>
            <img variant="top" src={two} />
          </Col>

          <Col sm={4}>
            <img variant="top" src={two} />
          </Col>

          <Col sm={4}>
            <img variant="top" src={two} />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Match;
