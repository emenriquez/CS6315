import React, { Component } from "react";
import { Drawer, Form, Button, Input } from "antd";

import { PlusOutlined } from "@ant-design/icons";
import axios from "axios";
import { connect } from "react-redux";
import * as actions from "../store/actions/auth";

class RequestJob extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
    };
    this.props.authCheckState();
    this.props.getUserID();
  }

  showDrawer = () => {
    this.setState({
      visible: true,
    });
  };

  onFinish = (values) => {
    axios
      .post(`http://127.0.0.1:8000/jobs/`, {
        status: "requested",
        clientID: this.props.username,
        contractorID: this.props.contractor,
        clientNotes: values.description,
      })
      .then(() => {
        console.log("Yeah!!");
      });
    this.setState({
      visible: false,
    });
  };

  onClose = () => {
    this.setState({
      visible: false,
    });
  };

  render() {
    return (
      <div>
        <Button
          type="primary"
          onClick={() => {
            this.props.username
              ? this.showDrawer()
              : (window.location.href = "/login");
          }}
        >
          <PlusOutlined /> Hire Me Now!
        </Button>
        <Drawer
          title="Request this fixer"
          width={350}
          onClose={this.onClose}
          visible={this.state.visible}
          bodyStyle={{ paddingBottom: 80 }}
          footer={
            <div
              style={{
                textAlign: "right",
              }}
            ></div>
          }
        >
          <Form onFinish={this.onFinish} layout="vertical" hideRequiredMark>
            <Form.Item
              name="description"
              label="Description"
              rules={[
                {
                  required: true,
                  message: "please enter a brief description of your request",
                },
                {
                  max: 1000,
                  message: "please shorten your description",
                },
              ]}
            >
              <Input.TextArea
                autoSize={{ minRows: 6, maxRows: 10 }}
                placeholder="please enter a brief description of your request (max 1,000 characters)"
              />
            </Form.Item>
            <Button onClick={this.onClose} style={{ marginRight: 8 }}>
              Cancel
            </Button>
            <Button htmlType="submit" type="primary">
              Submit
            </Button>
          </Form>
        </Drawer>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    username: state.username,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    authCheckState: () => dispatch(actions.authCheckState()),
    getUserID: () => dispatch(actions.getUserID()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(RequestJob);
