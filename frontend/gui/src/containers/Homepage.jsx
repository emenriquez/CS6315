import React, { Component } from "react";
import axios from "axios";

import Contractors from "../components/Contractors";

class ContractorList extends Component {
  state = {
    contractors: [],
  };

  componentDidMount() {
    axios.get("http://127.0.0.1:8000/contractors").then((res) => {
      this.setState({ contractors: res.data });
    });
  }
  render() {
    return <Contractors data={this.state.contractors} />;
  }
}

export default ContractorList;
