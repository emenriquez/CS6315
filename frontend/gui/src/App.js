import React from "react";
import "antd/dist/antd.css";
import ContractorList from "./containers/ContractorList";
//import reactDOM from "react-dom";

import CustomLayout from "./containers/layout";

function App() {
  return (
    <div>
      <CustomLayout>
        <ContractorList />
      </CustomLayout>
    </div>
  );
}

export default App;
