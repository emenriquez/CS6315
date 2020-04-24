import React, { Component } from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import * as actions from "../store/actions/auth";

import { Form, Input, Tooltip, Select, Checkbox, Button } from "antd";
import { QuestionCircleOutlined } from "@ant-design/icons";

const { Option } = Select;

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
      console.log(values);
      this.props.onAuth(
        values.first_name,
        values.last_name,
        values.username,
        values.email,
        values.password1,
        values.password2,
        values.city
      );
      this.props.history.push("/");
    };
    function handleChange(value) {
      console.log(`selected ${value}`);
    }

    return (
      <Form
        {...formItemLayout}
        name="register"
        onFinish={onFinish}
        initialValues={{
          city: "Edinburg",
        }}
        scrollToFirstError
        style={{ maxWidth: "500px", margin: "auto" }}
      >
        <Form.Item
          name="first_name"
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
          name="last_name"
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
          name="password1"
          label="Password"
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
            { min: 8, message: "Password must be at least 8 characters" },
          ]}
          hasFeedback
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          name="password2"
          label="Confirm Password"
          dependencies={["password1"]}
          hasFeedback
          rules={[
            {
              required: true,
              message: "Please confirm your password!",
            },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue("password1") === value) {
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
          name="city"
          label="City"
          rules={[
            {
              required: true,
              message: "Please select your City!",
            },
          ]}
        >
          <Select style={{ width: 120 }} onChange={handleChange}>
            <Option value="Edinburg">Edinburg</Option>
            <Option value="McAllen">McAllen</Option>

            <Option value="Pharr">Pharr</Option>
          </Select>
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
    onAuth: (
      first_name,
      last_name,
      username,
      email,
      password1,
      password2,
      city
    ) =>
      dispatch(
        actions.authRegister(
          first_name,
          last_name,
          username,
          email,
          password1,
          password2,
          city
        )
      ),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(RegistrationForm);
