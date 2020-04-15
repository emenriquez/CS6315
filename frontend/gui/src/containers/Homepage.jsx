import React, { Component } from "react";
import axios from "axios";

import Homesearch from "../components/Homesearch";

class HomeOptions extends Component {
  state = {
    skills: [],
    cities: [],
  };

  componentDidMount() {
    axios.get("http://127.0.0.1:8000/skills").then((res) => {
      this.setState({ skills: res.data });
    });
    axios.get("http://127.0.0.1:8000/cities").then((res) => {
      this.setState({ cities: res.data });
    });
  }
  render() {
    return <Homesearch data={this.state} />;
  }
}

export default HomeOptions;
