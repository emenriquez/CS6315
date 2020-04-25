import { List, Divider } from "antd";
import { MailFilled, ArrowLeftOutlined } from "@ant-design/icons";
import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../store/actions/auth";
import axios from "axios";
import NewMessage from "./NewMessage";

class ClientMessages extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ready: false,
      messages: [
        {
          clientID: "nobody",
          contractorID: 1,
          jobID: 0,
          messageText: "None",
        },
      ],
      messageList: ["No messages yet!"],
      sender: "Contractor: ",
    };
    this.props.getUserID();
  }

  componentDidUpdate() {
    if (!this.state.ready) {
      if (this.props.token) {
        const options = {
          headers: {
            Authorization: `Token ${this.props.token}`,
          },
        };
        const query = this.props.location.search;
        axios
          .get(`http://127.0.0.1:8000/clientmsg/${query}`, options)
          .then((res) => {
            console.log(res);
            if (res.data.length > 0) {
              this.setState({ messages: res.data });
            }
            this.setState({ ready: true });
            let messageList = this.state.messages.map((message) => {
              return message.messageText;
            });
            this.setState({ messageList: messageList });
            if (this.state.messages[0].clientID === this.props.username) {
              this.setState({ sender: "Client: " });
            }
          })
          .catch(console.log("Nope"));
      }
    }
  }

  render() {
    return (
      <div>
        <a href="javascript:history.back()">
          <ArrowLeftOutlined /> Go Back
        </a>
        <Divider orientation="left">Messages for Job</Divider>
        <List
          bordered
          header={
            <NewMessage
              jobID={this.state.messages[0].jobID}
              clientID={this.state.messages[0].clientID}
              contractorID={this.state.messages[0].contractorID}
              sender={this.state.sender}
            />
          }
          dataSource={this.state.messageList}
          renderItem={(item) => (
            <List.Item>
              <MailFilled /> {item}
            </List.Item>
          )}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    token: state.token,
    userID: state.userID,
    username: state.username,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getUserID: () => dispatch(actions.getUserID()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ClientMessages);
