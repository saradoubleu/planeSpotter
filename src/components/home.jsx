import React, { Component } from "react";
import Navigation from "./nav-bar";
import News from "./news";

class Home extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>Welcome to YYZ Plane Spotters</h1>
        <Navigation />
        <News />
      </div>
    );
  }
}

export default Home;
