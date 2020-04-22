import React, { Component } from "react";
import axios from "axios";
import { connect } from "react-redux";

import Contractors from "../components/Contractors";

class ContractorList extends Component {
  state = {
    user: [],
    contractors: [],
  };

  componentDidMount() {
    const query = this.props.location.search;
    axios.get(`http://127.0.0.1:8000/contractors${query}`).then((res) => {
      this.setState({ contractors: res.data });
    });
  }

  componentDidUpdate() {
    if (!this.state.user.city) {
      if (this.props.token) {
        const options = {
          headers: {
            Authorization: `Token ${this.props.token}`,
          },
        };
        axios
          .get(`http://127.0.0.1:8000/rest-auth/user/`, options)
          .then((res) => {
            this.setState({ user: res.data });
            var city = this.state.user.city;
            const query = this.props.location.search + "&city=" + city;
            axios
              .get(`http://127.0.0.1:8000/contractors${query}`)
              .then((res) => {
                this.setState({ contractors: res.data });
              });
          });
      }
    }
  }

  render() {
    return <Contractors data={this.state.contractors} {...this.props} />;
  }
}

const mapStateToProps = (state) => {
  return {
    token: state.token,
    error: state.error,
  };
};

export default connect(mapStateToProps)(ContractorList);
