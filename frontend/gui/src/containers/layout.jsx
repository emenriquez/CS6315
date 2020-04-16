import React, { Component } from "react";
import { Layout, Divider } from "antd";
import Navbar from "../components/Navbar";
import { connect } from "react-redux";
import * as actions from "../store/actions/auth";

const { Content, Footer } = Layout;

class CustomLayout extends Component {
  render() {
    return (
      <Layout className="layout" style={{ background: "#fff" }}>
        <Navbar {...this.props} />
        <Content style={{ padding: 50, minHeight: 280 }}>
          {this.props.children}
        </Content>
        <Divider />
        {this.props.isAuthenticated ? (
          <Footer style={{ textAlign: "center" }}>
            CS6315 - Spring 2020 Project (Logged in)
          </Footer>
        ) : (
          <Footer style={{ textAlign: "center" }}>
            CS6315 - Spring 2020 Project
          </Footer>
        )}
      </Layout>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    loading: state.loading,
    error: state.error,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(actions.logout()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CustomLayout);
