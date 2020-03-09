import React, { Component } from "react";
import { Button, Modal, Col, Container, Row } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Jumbotron from "react-bootstrap/Jumbotron";

import { connect } from "react-redux";
import ModalReg from "./modal_register";
import { register } from "../_Actions/auth";
import { getSpecies } from "../_Actions/species";

import "../App.css";

class main extends Component {
  componentDidMount() {
    this.props.getSpecies();
  }

  constructor(props) {
    super(props);
    this.state = {
      Spesies: "",
      breeder: "",
      email: "",
      password: "",
      phone: "",
      address: "",
      nama_pet: "",
      gender_pet: "",
      id_species: 0,
      age: "",
      show: false
    };
  }

  handleRegis = e => {
    e.preventDefault();
    const data = {};

    this.props.register(data);
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handlemodal() {
    this.setState({ show: !this.state.show });
  }

  render() {
    const { data, loading, error } = this.props.species;
    return (
      <Row>
        <Col sm={6}></Col>
        <Col sm={6}>
          <Jumbotron className="Jumbo bg-transparent">
            <h2 className="display-1">Swipe Right !!</h2>
            <h3 className="titlelanding2">Make Your Pet Happy</h3>
            <p style={{ color: "black" }}>
              by click enter, your agree to our term, lern we processs!{" "}
            </p>

            <ModalReg />
          </Jumbotron>
        </Col>
      </Row>
    );
  }
}
const mapStateToProps = state => {
  return {
    species: state.species,
    Regis: state.auth
    // auth: state.auth
  };
};

const mapDispatchToProps = dispacth => {
  return {
    getSpecies: () => dispacth(getSpecies()),
    register: data => dispacth(register(data))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(main);
