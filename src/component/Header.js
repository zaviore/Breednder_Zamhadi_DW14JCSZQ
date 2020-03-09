import React, { Component } from "react";
import { Button, Modal, Navbar, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Route, Redirect } from "react-router-dom";
import logo from "../image/owl-icon.png";

import { connect } from "react-redux";
import { getLogin } from "../_Actions/auth";

import "../App.css";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = { email: "", password: "", show: false };
  }

  handleLogin = e => {
    e.preventDefault();
    const email = this.state.email;
    const password = this.state.password;
    const data = { email, password };
    console.log("data login hndke", data);
    this.props.getLogin(data);
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
    const { isLogin, loading } = this.props.login;

    return isLogin ? (
      // <Route>
      <Redirect to={{ pathname: "/Home" }} />
    ) : (
      // </Route>
      <Navbar style={{ height: "50px" }}>
        <Navbar.Brand href="/">
          <h4 className="home">Doglinder</h4>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            <Button
              variant=""
              onClick={() => {
                this.handlemodal();
              }}
            >
              <b>LOGIN</b>
            </Button>
            <Modal show={this.state.show} className="warp-modal ">
              <Modal.Header>
                <h1 className="header-modal">LOGIN</h1>
              </Modal.Header>

              {/* ================= body modal===================== */}
              <Modal.Body>
                <Form>
                  <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="Email"
                      name="email"
                      //    ref={input => (this.getEmail = input)}
                      column
                      sm="2"
                      onChange={this.handleChange}
                    />
                    <Form.Text className="text-muted"></Form.Text>
                  </Form.Group>

                  <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="Password"
                      name="password"
                      onChange={this.handleChange}
                      //   ref={input => (this.getPassword = input)}
                    />
                  </Form.Group>
                  <Form.Group controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                  </Form.Group>

                  <Button
                    variant="success"
                    type="submit"
                    block
                    onClick={this.handleLogin}
                  >
                    LOGIN
                  </Button>
                </Form>
              </Modal.Body>
              {/* ================body modal====================== */}
              <Modal.Footer>
                <Button
                  variant="outline-success"
                  block
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
const mapStateToProps = state => {
  return {
    login: state.auth
    // auth: state.auth
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getLogin: data => dispatch(getLogin(data))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
