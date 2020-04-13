import React from "react";
import { Route } from "react-router-dom";

import ContractorList from "./containers/ContractorList";
import ContractorDetail from "./containers/ContractorDetail";

const BaseRouter = () => (
  <div>
    <Route exact path="/" component={ContractorList} />
    <Route exact path="/search" component={ContractorList} />
    <Route exact path="/search/:contractorID" component={ContractorDetail} />
  </div>
);

export default BaseRouter;
