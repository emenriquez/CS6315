import React, { Component } from "react";
import axios from "axios";

import ContractorCard from "../components/ContractorCard";

class ContractorDetail extends Component {
  state = {
    contractor: [],
  };

  componentDidMount() {
    const contractorID = this.props.match.params.contractorID;
    axios
      .get(`http://127.0.0.1:8000/contractors/${contractorID}`)
      .then((res) => {
        this.setState({ contractor: res.data });
      });
  }

  render() {
    return <ContractorCard data={this.state.contractor} />;
  }
}

export default ContractorDetail;
