import React from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import Home from "./Home";
import NotFound from "./NotFound";
import addJobs from "./AddJob";
import Apply from "./Apply";

const Routem = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Home} exact={true} />
      <Route path="/create" component={addJobs} />
      <Route path="/edit" component={Apply} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
);

export default Routem;
