import { Table, Tag } from "antd";
import React, { Component } from "react";

const columns = [
  {
    title: "Job ID",
    dataIndex: "id",
    key: "id",
  },
  {
    title: "Fixer",
    dataIndex: "contractorID",
    key: "contractorID",
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
      let color = tag.length > 5 ? "geekblue" : "green";
      if (tag === "loser") {
        color = "volcano";
      }
      return (
        <Tag color={color} key={tag}>
          Coming Soon!
        </Tag>
      );
    },
  },
];

class JobTable extends Component {
  render() {
    return <Table rowKey="id" columns={columns} dataSource={this.props.jobs} />;
  }
}

export default JobTable;
