import React from "react";

import { Card, Avatar } from "antd";

import RequestJob from "./requestJob";

const { Meta } = Card;

const ContractorDetail = (props) => {
  function getRandomInt() {
    return Math.floor(Math.random() * 99) + 1;
  }

  return (
    <Card
      style={{ maxWidth: 600 }}
      cover={
        <img
          alt="example"
          src={`https://picsum.photos/seed/${getRandomInt()}/800/600?random=1`}
        />
      }
      actions={[<RequestJob contractor={props.data.id} />]}
    >
      <Meta
        avatar={
          <Avatar
            size={64}
            src={`https://randomuser.me/api/portraits/men/${getRandomInt()}.jpg`}
          />
        }
        title={
          props.data.company_name || [
            props.data.first_name,
            " ",
            props.data.last_name,
          ]
        }
        description={
          props.data.skill
            ? props.data.skill.map((data) => {
                return `\u00A0\u00A0 ${data} `;
              })
            : null
        }
      />
    </Card>
  );
};

export default ContractorDetail;
