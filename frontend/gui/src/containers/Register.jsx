import React, { Component } from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import * as actions from "../store/actions/auth";

import {
  Form,
  Input,
  Tooltip,
  Cascader,
  Row,
  Col,
  Checkbox,
  Button,
} from "antd";
import { QuestionCircleOutlined } from "@ant-design/icons";

const residences = [
  {
    value: "Edinburg",
    label: "Edinburg",
  },
  {
    value: "McAllen",
    label: "McAllen",
  },
  {
    value: "Pharr",
    label: "Pharr",
  },
  {
    value: "Brownsville",
    label: "Brownsville",
  },
];

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 8 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 16 },
  },
};
const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
};

class RegistrationForm extends Component {
  render() {
    const onFinish = (values) => {
      console.log("Received values of form: ", values);
      this.props.onAuth(values.username, values.email, values.password);
      this.props.history.push("/");
    };

    return (
      <Form
        {...formItemLayout}
        name="register"
        onFinish={onFinish}
        initialValues={{
          residence: ["Edinburg"],
          prefix: "86",
        }}
        scrollToFirstError
      >
        <Form.Item
          name="First name"
          label={<span>First Name&nbsp;</span>}
          rules={[
            {
              required: true,
              message: "Please input your first name!",
              whitespace: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="Last name"
          label={<span>Last Name&nbsp;</span>}
          rules={[
            {
              required: true,
              message: "Please input your last name!",
              whitespace: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="username"
          label={
            <span>
              Username&nbsp;
              <Tooltip title="What do you want others to call you?">
                <QuestionCircleOutlined />
              </Tooltip>
            </span>
          }
          rules={[
            {
              required: true,
              message: "Please input your username!",
              whitespace: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="email"
          label="E-mail"
          rules={[
            {
              type: "email",
              message: "The input is not valid E-mail!",
            },
            {
              required: true,
              message: "Please input your E-mail!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="password"
          label="Password"
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
          ]}
          hasFeedback
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          name="confirm"
          label="Confirm Password"
          dependencies={["password"]}
          hasFeedback
          rules={[
            {
              required: true,
              message: "Please confirm your password!",
            },
            ({ getFieldValue }) => ({
              validator(rule, value) {
                if (!value || getFieldValue("password") === value) {
                  return Promise.resolve();
                }
                return Promise.reject(
                  "The two passwords that you entered do not match!"
                );
              },
            }),
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          name="residence"
          label="City"
          rules={[
            {
              type: "array",
              required: true,
              message: "Please select your City!",
            },
          ]}
        >
          <Cascader options={residences} />
        </Form.Item>

        <Form.Item
          name="phone"
          label="Phone Number"
          rules={[
            { required: true, message: "Please input your phone number!" },
          ]}
        >
          <Input style={{ width: "100%" }} />
        </Form.Item>

        <Form.Item
          label="Captcha"
          extra="Please type 'human' to make sure that your are a human."
        >
          <Row gutter={8}>
            <Col span={12}>
              <Form.Item
                name="captcha"
                noStyle
                rules={[
                  {
                    required: true,
                    message: "Please type 'human' in the verification field!",
                  },
                  () => ({
                    validator(rule, value) {
                      if (!value || "human" === value) {
                        return Promise.resolve();
                      }
                      return Promise.reject(
                        "Please type 'human' in the verification field!"
                      );
                    },
                  }),
                ]}
              >
                <Input />
              </Form.Item>
            </Col>
          </Row>
        </Form.Item>

        <Form.Item
          name="agreement"
          valuePropName="checked"
          rules={[
            {
              validator: (_, value) =>
                value
                  ? Promise.resolve()
                  : Promise.reject("You must accept the agreement"),
            },
          ]}
          {...tailFormItemLayout}
        >
          <Checkbox>
            I agree to award this project 1<sup>st</sup> place
          </Checkbox>
        </Form.Item>
        <Form.Item {...tailFormItemLayout}>
          <Button type="primary" htmlType="submit">
            Register
          </Button>
          {"  "}Or{" "}
          <NavLink style={{ marginRight: "10px" }} to="/login/">
            Login
          </NavLink>
        </Form.Item>
      </Form>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    loading: state.loading,
    error: state.error,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onAuth: (username, email, password) =>
      dispatch(actions.authRegister(username, email, password, password)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(RegistrationForm);
