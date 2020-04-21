import React, { Component } from "react";
import axios from "axios";
//import queryString from "query-string";

import Contractors from "../components/Contractors";

class ContractorList extends Component {
  state = {
    contractors: [],
  };

  componentDidMount() {
    const query = this.props.location.search;

    axios.get(`http://127.0.0.1:8000/contractors${query}`).then((res) => {
      this.setState({ contractors: res.data });
    });
  }
  render() {
    return <Contractors data={this.state.contractors} />;
  }
}

export default ContractorList;
