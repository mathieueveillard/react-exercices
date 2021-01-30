import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
import List from "./list";
import Exercice1 from "./Exercice1";
import "./index.css";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route exact path="/" render={List} />
        <Route exact path="/exercice1" render={Exercice1} />
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
