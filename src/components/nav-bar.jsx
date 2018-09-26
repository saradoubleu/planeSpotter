import React, { Component } from "react";
import { Router, Link } from "@reach/router";

let Home = () => (
  <div>
    <nav>
      <Link to="/"> Home </Link> | <Link to="airplanes"> Airplanes </Link> |{" "}
      <Link to="airports"> Airports </Link>|{" "}
      <Link to="contactUs"> Contact Us </Link>
    </nav>
  </div>
);

class Navigation extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Router>
          <Home path="/" />
        </Router>
      </div>
    );
  }
}

export default Navigation;
