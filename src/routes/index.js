import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "../screens/Home";
import Quiz from "../screens/Quiz";
import Results from "../screens/Results";

const routes = (
  <Router>
    <Switch>

      <Route exact path="/" component={Home} />
      <Route exact path="/questions" component={Quiz} />
      <Route exact path="/results" component={Results} />
    </Switch>
  </Router>
);

export default routes;