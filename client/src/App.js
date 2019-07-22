import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import AppNavbar from "./components/AppNavbar";
import Landing from "./components/Landing";

const App = () => (
  <Router>
    <Fragment>
      <AppNavbar />
      <Route exact path="/" component={Landing} />
    </Fragment>
  </Router>
);

export default App;
