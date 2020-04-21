import React, { Component } from "react";
import LeftMenu from "./LeftMenu";
import RightMenu from "./RightMenu";
import { Drawer, Button } from "antd";
import "./Navbar.css";
import { connect } from "react-redux";
import * as actions from "../../store/actions/auth";

import { MedicineBoxTwoTone } from "@ant-design/icons";

class Navbar extends Component {
  state = {
    visible: false,
    isAuthenticated: this.props.isAuthenticated,
  };

  showDrawer = () => {
    this.setState({
      visible: true,
    });
  };

  onClose = () => {
    this.setState({
      visible: false,
    });
  };

  render() {
    return (
      <nav className="menu">
        <div className="menu__logo">
          <MedicineBoxTwoTone
            twoToneColor="#eb2f96"
            style={{ fontSize: "28px" }}
          />
          <a href="/" style={{ fontWeight: "bold" }}>
            Fixers
          </a>
        </div>
        <div className="menu__container">
          <div className="menu_left">
            <LeftMenu mode="horizontal" />
          </div>
          <div className="menu_rigth">
            <RightMenu mode="horizontal" />
          </div>
          <Button
            className="menu__mobile-button"
            type="primary"
            onClick={this.showDrawer}
          ></Button>
          <Drawer
            title="Basic Drawer"
            placement="right"
            className="menu_drawer"
            closable={false}
            onClose={this.onClose}
            visible={this.state.visible}
          >
            <LeftMenu mode="inline" {...this.props} />
            <RightMenu mode="inline" {...this.props} />
          </Drawer>
        </div>
      </nav>
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

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
