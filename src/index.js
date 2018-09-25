import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
// import App from "./App";
import Home from "./components/home";

// import Navigation from "./components/nav-bar";

import registerServiceWorker from "./registerServiceWorker";

ReactDOM.render(<Home />, document.getElementById("root"));
// ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
