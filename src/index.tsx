import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
import List from "./List";
import Exercice1 from "./Exercice1";
import Exercice2 from "./Exercice2";
import Exercice3 from "./Exercice3";
import Exercice4 from "./Exercice4";
import "./index.css";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route exact path="/" render={List} />
        <Route exact path="/exercice1" render={Exercice1} />
        <Route exact path="/exercice2" render={Exercice2} />
        <Route exact path="/exercice3" render={Exercice3} />
        <Route exact path="/exercice4" render={Exercice4} />
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
