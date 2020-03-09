import React, { Component } from "react";
import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";

class Footer extends Component {
  render() {
    return (
      <Navbar className="footer" style={{ backgroundColor: "#6E4F33" }}>
        <Navbar.Brand href="#home"></Navbar.Brand>
      </Navbar>
    );
  }
}
export default Footer;
