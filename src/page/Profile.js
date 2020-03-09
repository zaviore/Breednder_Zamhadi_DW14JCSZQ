import React, { Component } from "react";
import pic from "../image/profile.jpg";
import back from "../image/back.png";
import Addpet from "./Addpet";
import { MdLocationOn, MdPhoneAndroid } from "react-icons/md";
import { FaRegUser, FaTransgender } from "react-icons/fa";

import { Button, Card, Col, Row, Container, Image } from "react-bootstrap";
import { BrowserRouter as Router, Link } from "react-router-dom";
import "../Application.css";
import { connect } from "react-redux";
import { getUser } from "../_Actions/profile";

import DataProfile from "./DataProfile";
// -------------------------------------- profile utama ----------------------------------------
class Profile extends Component {
  componentDidMount() {
    this.props.getUser();
  }

  render() {
    const { data, loading, error } = this.props.profile;
    if (loading || !data) {
      return <h1>now loading</h1>;
    }
    return (
      <Container fluid>
        <Row className="container-1">
          <Col sm={4} className="body-kiri">
            <Row className="profile-geser">
              <Link to="/Home">
                <Image src={back}></Image>
              </Link>
              <Image src={pic} roundedCircle className="pp" />
              &nbsp; &nbsp;<h3>Data Profile</h3>
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
                    "overflow-y": "auto"
                  }}
                >
                  <div className="pp2">
                    <div className="pp-header">
                      <h2>Profile</h2>
                      <hr></hr>
                    </div>

                    <Card.Img variant="top" src={pic} />
                  </div>
                  <Card.Body>
                    <Card.Title className="titles">
                      <h3>Owl</h3>
                    </Card.Title>
                    <Card.Text>
                      <Container className="text">
                        <FaRegUser /> Breeder Profil : {data.breeder}
                      </Container>
                      <Container className="text">
                        <MdLocationOn /> 10 kilometer dari sini
                      </Container>

                      <Container className="text">
                        {" "}
                        <FaTransgender /> Male - Adult
                      </Container>

                      <Container className="text">
                        <MdPhoneAndroid /> Phone Breeder : {data.phone}
                      </Container>

                      <Card.Title className="titles">
                        <h3>About</h3>
                      </Card.Title>
                      <Container className="text">{data.about}</Container>
                    </Card.Text>
                    <hr></hr>
                    <Link to="/Edit">
                      <Button variant="success" block>
                        Edit
                      </Button>
                    </Link>
                    <hr></hr>
                  </Card.Body>
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

const mapStateToProps = state => {
  return {
    profile: state.profile
    // auth: state.auth
  };
};

const mapDispatchToProps = dispacth => {
  return {
    getUser: () => dispacth(getUser())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
