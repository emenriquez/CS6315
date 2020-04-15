import React from "react";
import { Button } from "antd";

const Homesearch = (props) => {
  return (
    <div>
      <Button
        href="/search?skill=Electrician"
        style={{
          background: "linear-gradient(90deg, #e3ffe7 0%, #d9e7ff 100%)",
        }}
      >
        Electrician
      </Button>
      <Button
        href="/search?skill=Plumber"
        style={{
          background: "linear-gradient(90deg, #e3ffe7 0%, #d9e7ff 100%)",
        }}
      >
        Plumber
      </Button>
      <Button
        href="/search?skill=Housekeeper"
        style={{
          background: "linear-gradient(90deg, #e3ffe7 0%, #d9e7ff 100%)",
        }}
      >
        Housekeeper
      </Button>
      <p>City Selector</p>
    </div>
  );
};

export default Homesearch;
