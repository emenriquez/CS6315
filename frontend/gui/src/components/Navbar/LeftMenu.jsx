import React, { Component } from "react";
import { Menu } from "antd";
import { connect } from "react-redux";

class LeftMenu extends Component {
  render() {
    return (
      <div>
        {this.props.isAuthenticated ? (
          <Menu mode={this.props.mode}>
            <Menu.Item key="docs">
              <a
                href="/"
                onClick={() =>
                  window.open("https://github.com/emenriquez/CS6315", "_blank")
                }
              >
                Documentation
              </a>
            </Menu.Item>
            <Menu.Item key="contractor">
              <a href="/fixer">My Fixer Profile</a>
            </Menu.Item>
          </Menu>
        ) : (
          <Menu mode={this.props.mode}>
            <Menu.Item key="docs">
              <a
                href="/"
                onClick={() =>
                  window.open("https://github.com/emenriquez/CS6315", "_blank")
                }
              >
                Documentation
              </a>
            </Menu.Item>
            <Menu.Item key="contractor">
              <a href="/login">My Fixer Profile</a>
            </Menu.Item>
          </Menu>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.token !== null,
  };
};

export default connect(mapStateToProps)(LeftMenu);
