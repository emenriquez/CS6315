import React from "react";
import { Layout, Divider } from "antd";
import Navbar from "../components/Navbar";

const { Content, Footer } = Layout;

const CustomLayout = (props) => {
  return (
    <Layout className="layout" style={{ background: "#fff" }}>
      <Navbar />
      <Content style={{ padding: 50, minHeight: 280 }}>
        {props.children}
      </Content>
      <Divider />
      <Footer style={{ textAlign: "center" }}>
        CS6315 - Spring 2020 Project
      </Footer>
    </Layout>
  );
};

export default CustomLayout;
