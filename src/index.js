import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import Context from "./Context";

import App from "./App";

import "./scss/Variables.scss";

ReactDOM.render(
  <Context.Provider>
    <React.StrictMode>
      <Router basename="/frontend">
        <App />
      </Router>
    </React.StrictMode>
  </Context.Provider>,
  document.getElementById("root")
);
