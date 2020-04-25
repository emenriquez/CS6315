import React, { Component } from "react";
import { Result, Button } from "antd";

class ConfirmRequest extends Component {
  render() {
    return (
      <Result
        status="success"
        title="You have requested a job!"
        subTitle="Your fixer will be notified. You can access details of this job in your account page."
        extra={[
          <Button href="/account" type="primary" key="console">
            Go to My Account
          </Button>,
        ]}
      />
    );
  }
}

export default ConfirmRequest;
