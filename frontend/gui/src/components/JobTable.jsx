import { Table, Tag } from "antd";
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
          if (dude in this.state) {
            return this.state[dude];
          } else {
            axios
              .get(`http://127.0.0.1:8000/contractors/${dude}`)
              .then((res) => {
                this.setState({
                  [dude]:
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
        title: "Fixer Details",
        dataIndex: "contractorNotes",
        key: "contractorNotes",
      },
      {
        title: "Date Requested",
        dataIndex: "dateRequested",
        key: "dateRequested",
        render: (date) => {
          return Date(date);
        },
      },
      {
        title: "Active",
        dataIndex: "active",
        key: "active",
        render: (active) => {
          if (active) {
            return "Yes";
          } else {
            return "No";
          }
        },
      },
      {
        title: "Complete",
        dataIndex: "complete",
        key: "complete",
        render: (complete) => {
          if (complete) {
            return "Yes";
          } else {
            return "No";
          }
        },
      },
      {
        title: "Action",
        dataIndex: "complete",
        key: "action",
        render: (tag) => {
          let color = "green";
          let text = "Active";
          if (tag === false) {
            color = "volcano";
            text = "Not Active";
          }
          return (
            <Tag color={color} key={tag}>
              {text}
            </Tag>
          );
        },
      },
    ],
  };

  render() {
    return (
      console.log(this.state),
      (
        <Table
          rowKey="id"
          columns={this.state.columns}
          dataSource={this.props.jobs}
        />
      )
    );
  }
}

export default JobTable;
