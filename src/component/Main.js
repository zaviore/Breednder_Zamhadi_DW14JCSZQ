import React, { Component } from "react";
import { Button, Modal, Col } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Jumbotron from "react-bootstrap/Jumbotron";

import { connect } from "react-redux";

import { getRegis } from "../_Actions/regis";
import { getSpecies } from "../_Actions/species";

import "../App.css";

class main extends Component {
  componentDidMount() {
    this.props.getSpecies();
  }

  constructor() {
    super();
    this.state = {
      breeder: "",
      email: "",
      password: "",
      phone: "",
      address: "",
      show: false
    };
  }

  handleRegis = e => {
    e.preventDefault();
    const breeder = this.state.breeder;
    const email = this.state.email;
    const password = this.state.password;
    const phone = this.state.phone;
    const address = this.state.address;
    const nama_pet = this.state.nama_pet;
    const gender_pet = this.state.gender_pet;
    const id_species = this.state.id_species;
    const age = this.state.age;

    const data = { breeder, email, password, phone, address };
    console.log("data login hndke", data);
    this.props.getRegis(data);
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handlemodal() {
    this.setState({ show: !this.state.show });
  }

  render() {
    const { data, loading, error } = this.props.species;
    return (
      <Jumbotron className="Jumbo bg-transparent">
        <h2 className="display-1">Swipe Right !!</h2>
        <h1 className="">Make Your Pet Happy</h1>
        <p>
          by click enter, your agree to our term, lern we processs! <br></br>
          <br></br>
          <Button
            id="rounded-button"
            variant="primary"
            onClick={() => {
              this.handlemodal();
            }}
          >
            <h3> Register </h3>
          </Button>
          <Modal
            show={this.state.show}
            className="warp-modalReg"
            arial-labelledby="contained-modal-title-vcenter"
            size="sm=30"
            centered
          >
            <Modal.Header>
              <div className="header-modal">
                <h1>REGISTER</h1>
              </div>

              <div className="modal-title">
                <button
                  type="button"
                  class="close"
                  data-dismiss="modal"
                  onClick={() => {
                    this.handlemodal();
                  }}
                >
                  ×
                </button>
              </div>
            </Modal.Header>

            {/* ================= body modal===================== */}
            <Modal.Body
              style={{
                "max-height": "calc(100vh - 210px)",
                "overflow-y": "auto"
              }}
            >
              {/*---------------------------------------form input------------------------------------------------*/}
              <Form className="form-container">
                <Form.Group controlId="formGridAddress1">
                  <Form.Label>Breeder</Form.Label>
                  <Form.Control
                    placeholder="breeder"
                    name="breeder"
                    onChange={this.state.breeder}
                    data-error="request breeder name"
                    required
                  />
                </Form.Group>

                <Form.Row>
                  <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      type="Form data"
                      placeholder="Enter email"
                      name="email"
                      onChange={this.state.email}
                      data-error="email address is invalid"
                      required
                    />
                  </Form.Group>

                  <Form.Group as={Col} controlId="formPassword">
                    <Form.Label>password;</Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="Password"
                      name="password"
                      onChange={this.state.password}
                    />
                  </Form.Group>
                </Form.Row>

                <Form.Group controlId="formPhone">
                  <Form.Label>Phone </Form.Label>
                  <Form.Control
                    placeholder="Phone number"
                    name="phone"
                    onChange={this.state.phone}
                  />
                </Form.Group>

                <Form.Group controlId="formGridAddress">
                  <Form.Label>Address</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows="3"
                    name="address"
                    onChange={this.state.address}
                  />
                </Form.Group>

                <Form.Group controlId="formNamePet">
                  <Form.Label>Name Pet </Form.Label>
                  <Form.Control
                    placeholder="Name pet"
                    name="nama_pet"
                    onChange={this.state.nama_pet}
                  />
                </Form.Group>

                <Form.Row>
                  <Form.Group as={Col} controlId="formgender">
                    <Form.Label>Gender </Form.Label>
                    <Form.Control
                      as="select"
                      name="gender"
                      onChange={this.state.gender}
                    >
                      <option> - </option>
                      <option value="female">female</option>
                      <option value="male">male</option>
                    </Form.Control>
                  </Form.Group>

                  <Form.Group as={Col} controlId="formGridState">
                    <Form.Label>Species </Form.Label>
                    <Form.Control
                      as="select"
                      name="id_species"
                      onChange={this.state.id_species}
                    >
                      <option>-</option>
                      {data.map((item, index) => (
                        <option value={item.nama_species} key={index}>
                          {item.nama_species}
                        </option>
                      ))}
                    </Form.Control>
                  </Form.Group>

                  <Form.Group as={Col} controlId="formAge">
                    <Form.Label>Age </Form.Label>
                    <Form.Control
                      as="select"
                      name="age"
                      onChange={this.state.ages}
                    >
                      <option> - </option>
                      <option>Adult</option>
                      <option>Teenager</option>
                      <option>Child</option>
                    </Form.Control>
                  </Form.Group>
                </Form.Row>

                <Button variant="primary" type="submit" block>
                  Register
                </Button>
              </Form>
              {/*---------------------------------------form input------------------------------------------------*/}
            </Modal.Body>
            {/* ================body modal====================== */}
            <Modal.Footer>
              <Form.Label>&copy; zaooo</Form.Label>
            </Modal.Footer>
          </Modal>
        </p>
      </Jumbotron>
    );
  }
}
const mapStateToProps = state => {
  return {
    species: state.species,
    Regis: state.Regis
    // auth: state.auth
  };
};

const mapDispatchToProps = dispacth => {
  return {
    getSpecies: () => dispacth(getSpecies()),
    getRegis: () => dispacth(getRegis())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(main);
