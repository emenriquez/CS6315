import React, { Component } from "react";
import { Drawer, Form, Button, Input } from "antd";

import { PlusOutlined } from "@ant-design/icons";
import axios from "axios";

class NewMessage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
    };
  }

  showDrawer = () => {
    this.setState({
      visible: true,
    });
  };

  onFinish = (values) => {
    const prefix = this.props.sender;
    axios
      .post(`http://127.0.0.1:8000/clientmsg/`, {
        jobID: this.props.jobID,
        clientID: this.props.clientID,
        contractorID: this.props.contractorID,
        messageText: prefix + values.description,
      })
      .then(() => {
        console.log("Yeah!!");
        window.location.reload();
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
            this.showDrawer();
          }}
        >
          <PlusOutlined /> New Message
        </Button>
        <Drawer
          title="New Message"
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
              label="Message"
              rules={[
                {
                  required: true,
                  message: "please enter a message",
                },
                {
                  max: 1000,
                  message: "please shorten your message",
                },
              ]}
            >
              <Input.TextArea
                autoSize={{ minRows: 6, maxRows: 10 }}
                placeholder="please enter a brief message (max 1,000 characters)"
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

export default NewMessage;
