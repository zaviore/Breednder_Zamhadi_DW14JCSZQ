import React, { Component } from "react";

import { Button, Modal, Col, Row } from "react-bootstrap";
import ModalDialog from "react-bootstrap/ModalDialog";
import Form from "react-bootstrap/Form";
import "bootstrap/dist/css/bootstrap.min.css";
import Jumbotron from "react-bootstrap/Jumbotron";
import "../App.css";

class main extends Component {
  constructor() {
    super();
    this.state = {
      show: false
    };
  }

  handlemodal() {
    this.setState({ show: !this.state.show });
  }

  render() {
    return (
      <Jumbotron className="Jumbo bg-transparent">
        <h1 className="display-1">Swipe Right !!</h1>
        <h2 className="display-1">Make Your Pet Happy</h2>
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
              <Form className="form-container">
                <Form.Group controlId="formGridAddress1">
                  <Form.Label>Breeder</Form.Label>
                  <Form.Control placeholder="breeder" />
                </Form.Group>

                <Form.Row>
                  <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label>Profile</Form.Label>
                    <Form.Control type="Form data" placeholder="Enter email" />
                  </Form.Group>

                  <Form.Group as={Col} controlId="formPassword">
                    <Form.Label>password;</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                  </Form.Group>
                </Form.Row>

                <Form.Group controlId="formPhone">
                  <Form.Label>Phone </Form.Label>
                  <Form.Control placeholder="Phone number" />
                </Form.Group>

                <Form.Group controlId="formGridAddress">
                  <Form.Label>address </Form.Label>
                  <Form.Control placeholder=" address" />
                </Form.Group>

                <Form.Group controlId="formNamePet">
                  <Form.Label>Name Pet </Form.Label>
                  <Form.Control placeholder="Phone number" />
                </Form.Group>

                <Form.Row>
                  <Form.Group as={Col} controlId="formgender">
                    <Form.Label>Gender </Form.Label>
                    <Form.Control as="select" value="Choose...">
                      <option>Choose...</option>
                      <option>female</option>
                      <option>male</option>
                    </Form.Control>
                  </Form.Group>

                  <Form.Group as={Col} controlId="formGridState">
                    <Form.Label>Species </Form.Label>
                    <Form.Control as="select" value="Choose...">
                      <option>Choose...</option>
                      <option>Cat</option>
                      <option>Bird</option>
                      <option>Wolf</option>
                    </Form.Control>
                  </Form.Group>

                  <Form.Group as={Col} controlId="formAge">
                    <Form.Label>Age</Form.Label>
                    <Form.Control />
                  </Form.Group>
                </Form.Row>

                <Button variant="primary" type="submit" block>
                  Register
                </Button>
              </Form>
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
export default main;
