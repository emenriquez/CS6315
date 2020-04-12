import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "antd/dist/antd.css";
import BaseRouter from "./routes";
//import reactDOM from "react-dom";

import CustomLayout from "./containers/layout";

function App() {
  return (
    <div>
      <Router>
        <CustomLayout>
          <BaseRouter />
        </CustomLayout>
      </Router>
    </div>
  );
}

export default App;
