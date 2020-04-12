import React from "react";

import { List, Avatar } from "antd";
import { StarOutlined } from "@ant-design/icons";

const IconText = ({ icon, text }) => (
  <span>
    {React.createElement(icon, { style: { marginRight: 8 } })}
    {text}
  </span>
);

const Contractors = (props) => {
  return (
    <List
      itemLayout="vertical"
      size="large"
      pagination={{
        onChange: (page) => {
          console.log(page);
        },
        pageSize: 3,
      }}
      dataSource={props.data}
      renderItem={(item) => (
        <List.Item
          key={(item.firstName, item.lastName)}
          actions={[
            <IconText
              icon={StarOutlined}
              text="Hire this dude now!"
              key="list-vertical-star-o"
            />,
          ]}
          extra={
            <img
              width={272}
              alt="logo"
              src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
            />
          }
        >
          <List.Item.Meta
            avatar={<Avatar src="https://picsum.photos/200" />}
            title={<a href={item.id}>{[item.firstName, " ", item.lastName]}</a>}
            description="Coming Soon"
          />
          {item.skill.map((data) => {
            return `\u00A0\u00A0\u00A0\u00A0 ${data} `;
          })}
        </List.Item>
      )}
    />
  );
};

export default Contractors;
