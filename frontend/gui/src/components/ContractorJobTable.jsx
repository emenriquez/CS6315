import { Table, Tag } from "antd";
import React, { Component } from "react";
//import axios from "axios";

const columns = [
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
      if (tag === false) {
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

class ContractorJobTable extends Component {
  //   formatData(row) {
  //     axios
  //       .get(`http://127.0.0.1:8000/contractors/${row.clientID}/RUD`)
  //       .then((res) => {
  //         row.clientID = res.data.first_name;
  //       })
  //       .catch((err) => {
  //         console.log("NOPE", err);
  //       });
  //     return row;
  //   }

  //   data(entry) {
  //     return entry.map((row) => {
  //       return this.formatData(row);
  //     });
  //   }

  render() {
    return <Table rowKey="id" columns={columns} dataSource={this.props.jobs} />;
  }
}

export default ContractorJobTable;
