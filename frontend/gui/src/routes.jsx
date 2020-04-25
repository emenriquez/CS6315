import React from "react";
import { Route } from "react-router-dom";

import ContractorList from "./containers/ContractorList";
import ContractorDetail from "./containers/ContractorDetail";
import Homepage from "./containers/Homepage";
import Login from "./containers/Login";
import Register from "./containers/Register";
import MyAccount from "./containers/MyAccount";
import ContractorRegistration from "./components/ContractorRegistration";
import ClientMessages from "./components/ClientMessages";
import ContractorMessages from "./components/ContractorMessages";

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
    <Route exact path="/account" component={MyAccount} />
    <Route exact path="/fixer" component={ContractorRegistration} />
    <Route exact path="/messages" component={ClientMessages} />
    <Route exact path="/fixermessages" component={ContractorMessages} />
  </div>
);

export default BaseRouter;
