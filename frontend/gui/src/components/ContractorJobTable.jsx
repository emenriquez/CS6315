import { Table, Tag, Modal, Button } from "antd";
import { ExclamationCircleOutlined } from "@ant-design/icons";
import React, { Component } from "react";
import axios from "axios";

const { confirm } = Modal;

function showRequest(jobID) {
  confirm({
    title: "Would you like to accept this Fixer request?",
    icon: <ExclamationCircleOutlined />,
    content:
      "Confirming will change the status of this request to 'Accepted' and the user will be notified.",
    okText: "Accept",
    cancelText: "Decline",
    onOk() {
      axios
        .patch(`http://127.0.0.1:8000/jobs/${jobID}/`, {
          status: "accepted",
        })
        .then(() => {
          window.location.reload();
        });
    },
    onCancel() {
      axios
        .patch(`http://127.0.0.1:8000/jobs/${jobID}/`, {
          status: "declined",
        })
        .then(() => {
          window.location.reload();
        });
    },
  });
}

function showDecline(jobID) {
  confirm({
    title: "Would you like to change your response to Accept this request?",
    icon: <ExclamationCircleOutlined />,
    content:
      "Confirming will change the status of this request to 'Accepted' and the user will be notified.",
    okText: "Accept",
    cancelText: "Cancel",
    onOk() {
      axios
        .patch(`http://127.0.0.1:8000/jobs/${jobID}/`, {
          status: "accepted",
        })
        .then(() => {
          window.location.reload();
        });
    },
    onCancel() {
      console.log(`Cancel: ${jobID}`);
    },
  });
}

function showAccept(jobID) {
  confirm({
    title: "Mark this request as Completed?",
    icon: <ExclamationCircleOutlined />,
    content:
      "Confirming will change the status of this request to 'Completed' and the user will be notified.",
    okText: "Complete!",
    cancelText: "Cancel",
    onOk() {
      axios
        .patch(`http://127.0.0.1:8000/jobs/${jobID}/`, {
          status: "completed",
        })
        .then(() => {
          window.location.reload();
        });
    },
    onCancel() {
      console.log(`Cancel: ${jobID}`);
    },
  });
}

class ContractorJobTable extends Component {
  state = {
    columns: [
      {
        title: "Job ID",
        dataIndex: "id",
        key: "id",
      },
      {
        title: "Client",
        dataIndex: "clientID",
        key: "clientID",
      },
      {
        title: "Client Details",
        dataIndex: "clientNotes",
        key: "clientNotes",
      },
      {
        title: "Date Requested",
        dataIndex: "dateRequested",
        key: "dateRequested",
        render: (date) => {
          let formatDate = new Intl.DateTimeFormat("en-US").format(
            new Date(date)
          );
          return formatDate;
        },
      },
      {
        title: "Status",
        dataIndex: "status",
        key: "status",
        // filters: [
        //   { text: 'Requested', value: 'requested' },
        //   { text: 'Accepted', value: 'accepted' },
        //   { text: 'Declined', value: 'declined' },
        //   { text: 'Requested', value: 'requested' },
        // ],
        render: (tag, record) => {
          let color = "green";
          switch (tag) {
            case "requested":
              color = "magenta";
              return (
                <Tag color={color} key={tag}>
                  <a href="#!" onClick={() => showRequest(record.id)}>
                    {tag}
                  </a>
                </Tag>
              );
            case "accepted":
              color = "blue";
              return (
                <Tag color={color} key={tag}>
                  <a href="#!" onClick={() => showAccept(record.id)}>
                    {tag}
                  </a>
                </Tag>
              );
            case "declined":
              color = "default";
              return (
                <Tag color={color} key={tag}>
                  <a href="#!" onClick={() => showDecline(record.id)}>
                    {tag}
                  </a>
                </Tag>
              );
            case "completed":
              color = "green";
              return (
                <Tag color={color} key={tag}>
                  {tag}
                </Tag>
              );
            default:
              return (
                <Tag color="default" key={tag}>
                  {tag}
                </Tag>
              );
          }
        },
      },
      {
        title: "Message",
        dataIndex: "id",
        key: "message",
        render: (jobID) => {
          return (
            <Button
              type="primary"
              size="small"
              onClick={() =>
                (window.location.href = `/fixermessages/?jobID=${jobID}`)
              }
            >
              Messages
            </Button>
          );
        },
      },
    ],
  };
  render() {
    return (
      <Table
        rowKey="id"
        columns={this.state.columns}
        dataSource={this.props.jobs}
      />
    );
  }
}

export default ContractorJobTable;
