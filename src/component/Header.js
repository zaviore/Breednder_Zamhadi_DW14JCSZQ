import React, { Component } from "react";
import { Button, Modal, Navbar, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import logo from "../image/owl-icon.png"
import "../App.css";

class Header extends Component {
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
      <Navbar>
        <Navbar.Brand href="/" >
          <h4 className="home"><img src={logo}></img> Owlinder</h4>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            <Button
              variant="success"
              onClick={() => {
                this.handlemodal();
              }}
            >
              LOGIN
            </Button>{" "}
            <Modal show={this.state.show} className="warp-modal " >
              <Modal.Header ><h1  className="header-modal">LOGIN</h1></Modal.Header>

              {/* ================= body modal===================== */}
              <Modal.Body>
                <Form>
                  <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" column sm="2"/>
                    <Form.Text className="text-muted">
                   
                    </Form.Text>
                  </Form.Group>

                  <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                  </Form.Group>
                  <Form.Group controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                  </Form.Group>

                <Link to="/Home">
                  <Button variant="success" type="submit" block>
                    LOGIN
                  </Button>
                </Link>
                
                </Form>
              </Modal.Body>
              {/* ================body modal====================== */}
              <Modal.Footer>
                <Button variant="outline-success"  block 
                  onClick={() => {
                    this.handlemodal();
                  }}
                >
                  CLOSE
                </Button>
              </Modal.Footer>
            </Modal>
          </Navbar.Text>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default Header;