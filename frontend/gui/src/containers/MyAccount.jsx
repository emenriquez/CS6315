import React, { Component } from "react";
import { Descriptions, Badge } from "antd";
import { connect } from "react-redux";
import axios from "axios";

class MyAccount extends Component {
  state = {
    user: [],
  };

  componentDidUpdate() {
    if (!this.state.user.username) {
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
          });
      } else {
        console.log("user not loaded");
      }
    }
  }

  render() {
    return (
      <Descriptions
        title={`Hello, ${this.state.user.first_name}!`}
        layout="vertical"
        bordered
      >
        <Descriptions.Item label="First Name">
          {this.state.user.first_name}
        </Descriptions.Item>
        <Descriptions.Item label="Last Name">
          {this.state.user.last_name}
        </Descriptions.Item>
        <Descriptions.Item label="Username">
          {this.state.user.username}
        </Descriptions.Item>
        <Descriptions.Item label="Email Address">
          {this.state.user.email}
        </Descriptions.Item>
        <Descriptions.Item label="City">
          {this.state.user.city}
        </Descriptions.Item>
        <Descriptions.Item label="Status">
          <Badge status="processing" text="Awesome" />
        </Descriptions.Item>
      </Descriptions>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    token: state.token,
    error: state.error,
  };
};

export default connect(mapStateToProps, null)(MyAccount);
