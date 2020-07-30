import React from "react";
import "./App.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./components/Home";
import ApplicationForm from "./components/form-components/ApplicationForm";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/form">
          <ApplicationForm />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
