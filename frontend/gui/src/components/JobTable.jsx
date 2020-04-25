import { Table, Tag, Button } from "antd";
import React, { Component } from "react";
import axios from "axios";

class JobTable extends Component {
  state = {
    columns: [
      {
        title: "Job ID",
        dataIndex: "id",
        key: "id",
      },
      {
        title: "Fixer",
        dataIndex: "contractorID",
        key: "contractorID",
        render: (dude) => {
          if (`contractor${dude}` in this.state) {
            return this.state["contractor" + dude];
          } else {
            axios
              .get(`http://127.0.0.1:8000/contractors/${dude}`)
              .then((res) => {
                this.setState({
                  ["contractor" + dude]:
                    res.data.company_name ||
                    `${res.data.first_name} ${res.data.last_name[0]}`,
                });
              });
          }
        },
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
                  {tag}
                </Tag>
              );
            case "accepted":
              color = "blue";
              return (
                <Tag color={color} key={tag}>
                  {tag}
                </Tag>
              );
            case "declined":
              color = "default";
              return (
                <Tag color={color} key={tag}>
                  {tag}
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
        title: "Messages",
        dataIndex: "id",
        key: "messages",
        render: (jobID) => {
          return (
            <Button
              type="primary"
              size="small"
              onClick={() =>
                (window.location.href = `/messages/?jobID=${jobID}`)
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

export default JobTable;
