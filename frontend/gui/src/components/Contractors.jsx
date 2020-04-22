import React from "react";

import { List, Avatar, Spin, Popover } from "antd";
import { StarOutlined } from "@ant-design/icons";

const IconText = ({ icon, text }) => (
  <span>
    <Popover
      title="Email"
      content="Contractor Email Here (Coming Soon!)"
      trigger="click"
    >
      {React.createElement(icon, { style: { marginRight: 8 } })}
      {text}
    </Popover>
  </span>
);

const IconLogin = ({ icon, text }) => (
  <span>
    <a href="/login">
      {React.createElement(icon, { style: { marginRight: 8 } })}
      {text}
    </a>
  </span>
);

const Contractors = (props) => {
  function getRandomInt() {
    return Math.floor(Math.random() * 100) + 1;
  }

  if (!props.data) {
    return <Spin />;
  } else {
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
            key={(item.first_name, item.last_name)}
            actions={[
              props.token ? (
                <IconText
                  icon={StarOutlined}
                  text="Request Me"
                  key="list-vertical-star-o"
                  href="/"
                />
              ) : (
                <IconLogin
                  icon={StarOutlined}
                  text="Request Me"
                  key="list-vertical-star-o"
                  href="/"
                />
              ),
            ]}
            extra={
              <img
                width={272}
                alt="logo"
                src={`https://picsum.photos/seed/${getRandomInt()}/400/300?random=1`}
              />
            }
          >
            <List.Item.Meta
              avatar={
                <Avatar
                  size={64}
                  src={`https://randomuser.me/api/portraits/men/${getRandomInt()}.jpg`}
                />
              }
              title={
                <a href={"contractors/" + item.id}>
                  {item.company_name || item.first_name + " " + item.last_name}
                </a>
              }
              description={
                "Available in:" +
                item.city.map((data) => {
                  return `\u00A0 ${data} `;
                })
              }
            />
            {item.skill.map((data) => {
              return `\u00A0\u00A0\u00A0\u00A0 ${data} `;
            })}
          </List.Item>
        )}
      />
    );
  }
};

export default Contractors;
