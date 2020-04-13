import React from "react";

import { Card, Avatar } from "antd";
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from "@ant-design/icons";

const { Meta } = Card;

const ContractorDetail = (props) => {
  return (
    <Card
      style={{ width: 300 }}
      cover={
        <img
          alt="example"
          src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
        />
      }
      actions={[
        <SettingOutlined key="setting" />,
        <EditOutlined key="edit" />,
        <EllipsisOutlined key="ellipsis" />,
      ]}
    >
      <Meta
        avatar={<Avatar src="https://picsum.photos/200" />}
        title={
          <a href="">{[props.data.firstName, " ", props.data.lastName]}</a>
        }
        description={[props.data.skill].map((data) => {
          return `\u00A0\u00A0\u00A0\u00A0 ${data} `;
        })}
      />
    </Card>
  );
};

export default ContractorDetail;
