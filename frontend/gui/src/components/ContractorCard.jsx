import React from "react";

import { Card, Avatar } from "antd";
import { MedicineBoxFilled } from "@ant-design/icons";

const { Meta } = Card;

const ContractorDetail = (props) => {
  function getRandomInt() {
    return Math.floor(Math.random() * 100) + 1;
  }

  return (
    <Card
      style={{ width: 300 }}
      cover={
        <img
          alt="example"
          src={`https://picsum.photos/seed/${getRandomInt()}/400/300?random=1`}
        />
      }
      actions={[
        <div>
          <span>Hire Me Now! </span>
          <MedicineBoxFilled style={{ fontSize: 18 }} key="request" />
        </div>,
      ]}
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
            props.data.first_Name,
            " ",
            props.data.last_ame,
          ]
        }
        description={[props.data.skill].map((data) => {
          return `\u00A0\u00A0\u00A0\u00A0 ${data} `;
        })}
      />
    </Card>
  );
};

export default ContractorDetail;
