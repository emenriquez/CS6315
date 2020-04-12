import React from "react";
import { Route } from "react-router-dom";

import ContractorList from "./containers/ContractorList";

const BaseRouter = () => (
  <div>
    <Route exact path="/" component={ContractorList} />
    <Route exact path="/:contractorID" component={ContractorList} />
  </div>
);

export default BaseRouter;
