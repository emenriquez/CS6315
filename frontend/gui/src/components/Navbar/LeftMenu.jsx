import React, { Component } from "react";
import { Menu } from "antd";

class LeftMenu extends Component {
  render() {
    return (
      <Menu mode={this.props.mode}>
        <Menu.Item key="contact">
          <a href="/">Contact Us</a>
        </Menu.Item>
        <Menu.Item key="contractor">
          <a href="/">Become a Fixer!</a>
        </Menu.Item>
      </Menu>
    );
  }
}

export default LeftMenu;
