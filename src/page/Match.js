import React, { Component } from "react";
import { Button, Nav, Col, Row, Container, Image } from "react-bootstrap";
import data from "./data.json";
import "../Application.css";

class Match extends Component {
  render() {
    return (
      <Container>
        <Row className="match-dummy">
          {data.map((pic, index) => (
            <Col sm={4}>
              <img
                variant="top"
                src={require(`../image/${pic.pics}`)}
                key={index}
                alt="profilePicture"
              />
              <div class="card-img-overlay">
                <h5 class="card-title2">{pic.name}</h5>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    );
  }
}

export default Match;
