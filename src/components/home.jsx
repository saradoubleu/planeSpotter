import React, { Component } from "react";
import Navigation from "./nav-bar";

class Home extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>Welcome to Plane Spotters Home</h1>
        <Navigation />
      </div>
    );
  }
}

export default Home;
