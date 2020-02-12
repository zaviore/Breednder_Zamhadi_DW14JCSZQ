import React, { Component } from "react";
import logo from "./images.jpg";
import "./App.css";

import { Button } from "react-bootstrap";
import Header from "./component/Header";
import Main from "./component/Main";
import Footer from "./component/Footer";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Main />
        <Footer />
      </div>
    );
  }
}

export default App;
