import React, { Component } from "react";
import { Menu } from "antd";

class RightMenu extends Component {
  render() {
    return (
      <Menu mode={this.props.mode}>
        <Menu.Item key="mail">
          <a href="#">Sign in</a>
        </Menu.Item>
        <Menu.Item key="app">
          <a href="#">Register</a>
        </Menu.Item>
      </Menu>
    );
  }
}

export default RightMenu;
