import React, { Component } from "react";

import "./App.css";


import Header from "./component/Header";
import Main from "./component/Main";
import Footer from "./component/Footer";
import {
  BrowserRouter as Router,
  Switch,
  Route,
 
} from "react-router-dom";
import Edit from "./page/Edit"
import Home from "./page/Home";
import Profile from "./page/Profile";
 

class App extends Component {
  render() {
    return (


<Router>
      <Switch>
      <Route exact path="/Home">
        <Home />
      </Route>

      <Route exact path="/Edit">
        <Edit />
      </Route>

      <Route exact path="/Profile">
        <Profile />
      </Route>
      

      <Route  path="/">
      <div className="imglanding">
        <Header />
        <Main />
        <Footer />
      </div>
      </Route>
      
    </Switch>
 
</Router>

      
    );
  }
}

export default App;