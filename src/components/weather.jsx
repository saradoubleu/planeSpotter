import React, { Component } from "react";

class Weather extends Component {
  constructor() {
    super();
    this.state = {
      city: [],
      windDirection: [],
      sunRise: [],
      sunSet: [],
      currentTime: []
    };
  }

  componentDidMount() {
    //query - weather in Toronto
    fetch("https://www.metaweather.com/api/location/4118/").then(results => {
      console.log("WEATHER DATA**", results.json());
    });
    // this.setState({city: })
  }
  render() {
    return <div> This is the Weather </div>;
  }
}

export default Weather;
