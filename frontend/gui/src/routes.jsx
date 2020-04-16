import React from "react";
import { Route } from "react-router-dom";

import ContractorList from "./containers/ContractorList";
import ContractorDetail from "./containers/ContractorDetail";
import Homepage from "./containers/Homepage";
import Login from "./containers/Login";
import Register from "./containers/Register";

const BaseRouter = () => (
  <div>
    <Route exact path="/" component={Homepage} />
    <Route exact path="/search" component={ContractorList} />
    <Route
      exact
      path="/contractors/:contractorID"
      component={ContractorDetail}
    />
    <Route exact path="/login/" component={Login} />
    <Route exact path="/register/" component={Register} />
  </div>
);

export default BaseRouter;
