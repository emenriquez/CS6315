import React, { Component } from "react";
import { Menu } from "antd";
import { connect } from "react-redux";
import * as actions from "../../store/actions/auth";

class RightMenu extends Component {
  render() {
    return (
      // <Menu mode={this.props.mode}>
      <div>
        {this.props.isAuthenticated ? (
          <Menu mode={this.props.mode}>
            <Menu.Item key="My account">
              <a href="/">My Account</a>
            </Menu.Item>
            <Menu.Item key="logout">
              <a onClick={this.props.logout}>Logout</a>
            </Menu.Item>
          </Menu>
        ) : (
          <Menu mode={this.props.mode}>
            <Menu.Item key="login">
              <a href="/login">Sign in</a>
            </Menu.Item>
            <Menu.Item key="app">
              <a href="/register">Register</a>
            </Menu.Item>
          </Menu>
        )}
      </div>
      // </Menu>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.token !== null,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(actions.logout()),
    onTryAutoSignup: () => dispatch(actions.authCheckState()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(RightMenu);
