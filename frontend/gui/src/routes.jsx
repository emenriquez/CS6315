import React from "react";
import { Route } from "react-router-dom";

import ContractorList from "./containers/ContractorList";
import ContractorDetail from "./containers/ContractorDetail";
import Homepage from "./containers/Homepage";

const BaseRouter = () => (
  <div>
    <Route exact path="/" component={Homepage} />
    <Route exact path="/search" component={ContractorList} />
    <Route
      exact
      path="/contractors/:contractorID"
      component={ContractorDetail}
    />
  </div>
);

export default BaseRouter;
