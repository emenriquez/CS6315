import React, { Component } from "react";
import {
  Form,
  Input,
  Button,
  Checkbox,
  Select,
  Tooltip,
  Descriptions,
  Divider,
} from "antd";
import { QuestionCircleOutlined } from "@ant-design/icons";
import { connect } from "react-redux";
import axios from "axios";
import * as actions from "../store/actions/auth";
import ContractorJobTable from "../components/ContractorJobTable";

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

const { Option } = Select;

class ContractorRegistration extends Component {
  state = {
    ready: true,
    user: [],
    contractor: { skill: [], city: [] },
    jobs: [],
  };

  componentDidUpdate() {
    if (!this.state.user.username) {
      if (this.props.token) {
        const options = {
          headers: {
            Authorization: `Token ${this.props.token}`,
          },
        };
        axios
          .get(`http://127.0.0.1:8000/rest-auth/user/`, options)
          .then((res) => {
            this.setState({ user: res.data });
            axios
              .get(
                `http://127.0.0.1:8000/contractors/${this.state.user.id}/RUD`
              )
              .then((res) => {
                this.setState({ contractor: res.data });
              })
              .catch((error) => {
                this.setState({ ready: false });
              });
            axios
              .get(
                `http://127.0.0.1:8000/jobs/?contractorID=${this.state.user.id}`
              )
              .then((res) => {
                this.setState({ jobs: res.data });
              })
              .catch((err) => {
                console.log(err);
              });
          });
      } else {
        console.log("user not loaded");
      }
    }
  }

  constructor(props) {
    super(props);
    this.props.getUserID();
  }

  render() {
    const createContractor = (values, statevals) => {
      console.log(
        statevals.id,
        statevals.first_name,
        statevals.last_name,
        values.companyName,
        values.skills,
        values.cities
      );
      axios
        .post(`http://127.0.0.1:8000/create`, {
          id: statevals.id,
          first_name: statevals.first_name,
          last_name: statevals.last_name,
          company_name: values.companyName,
          skill: values.skills,
          city: values.cities,
        })
        .then((res) => {
          console.log(res);
        })
        .catch((error) => {
          console.log(error);
        });
    };

    const onCreate = (values) => {
      console.log("Success:", values);
      this.setState({ contractor: values });
      createContractor(values, this.state.user);
      window.location.href = "/fixer";
    };

    const updateContractor = (values, statevals) => {
      console.log(
        statevals.id,
        values.companyName,
        values.skills,
        values.cities
      );
      axios
        .patch(`http://127.0.0.1:8000/contractors/${statevals.id}/RUD`, {
          company_name: values.companyName,
          skill: values.skills,
          city: values.cities,
        })
        .then((res) => {
          console.log(res);
        })
        .catch((error) => {
          console.log(error);
        });
    };

    const onUpdate = (values) => {
      updateContractor(values, this.state.user);
      window.location.href = "/fixer";
    };

    const onFinishFailed = (errorInfo) => {
      console.log("Failed:", errorInfo);
    };

    return (
      <div>
        {this.state.ready ? (
          <div>
            <Descriptions
              title={`Hello, ${this.state.user.first_name}!`}
              layout="vertical"
              bordered
            >
              <Descriptions.Item label="Fixer Display Name">
                {this.state.contractor.company_name ||
                  this.state.contractor.first_name +
                    " " +
                    this.state.contractor.last_name}
              </Descriptions.Item>
              <Descriptions.Item label="Skills">
                {this.state.contractor.skill.map((data) => {
                  return `${data} \u00A0\u00A0\u00A0\u00A0 `;
                })}
              </Descriptions.Item>
              <Descriptions.Item label="Available Cities">
                {this.state.contractor.city.map((data) => {
                  return `${data} \u00A0\u00A0\u00A0\u00A0 `;
                })}
              </Descriptions.Item>
              <Descriptions.Item label="Availability">
                *Available Now!*
              </Descriptions.Item>
            </Descriptions>
            <Divider />
            <h3>My Jobs</h3>
            <ContractorJobTable jobs={this.state.jobs} />
            <Divider />
            <h3 style={{ margin: "auto", padding: "30px" }}>
              Update Your Contractor Profile
            </h3>
            <Form
              {...layout}
              name="basic"
              initialValues={{
                availableNow: true,
              }}
              onFinish={onUpdate}
              onFinishFailed={onFinishFailed}
            >
              <Form.Item
                label={
                  <span>
                    Company Name&nbsp;
                    <Tooltip title="Use this if you want to be listed under a company name rather than your name">
                      <QuestionCircleOutlined />
                    </Tooltip>
                  </span>
                }
                name="companyName"
                rules={[{ required: false }]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                name="skills"
                label={
                  <span>
                    Skills&nbsp;
                    <Tooltip title="Choose the skills you want to offer to clients">
                      <QuestionCircleOutlined />
                    </Tooltip>
                  </span>
                }
                rules={[
                  {
                    required: false,
                    type: "array",
                  },
                ]}
              >
                <Select mode="multiple" placeholder="Please select your skills">
                  <Option value="Electrician">Electrician</Option>
                  <Option value="Plumber">Plumber</Option>
                  <Option value="Housekeeper">Housekeeper</Option>
                  <Option value="Landscaper">Landscaper</Option>
                  <Option value="General">General / Misc.</Option>
                  <Option value="Builder">Builder</Option>
                </Select>
              </Form.Item>

              <Form.Item
                name="cities"
                label={
                  <span>
                    Cities&nbsp;
                    <Tooltip title="Choose the cities where you are available for work">
                      <QuestionCircleOutlined />
                    </Tooltip>
                  </span>
                }
                rules={[
                  {
                    type: "array",
                  },
                ]}
              >
                <Select mode="multiple" placeholder="Please select your cities">
                  <Option value="Edinburg">Edinburg</Option>
                  <Option value="McAllen">McAllen</Option>
                  <Option value="Pharr">Pharr</Option>
                </Select>
              </Form.Item>

              <Form.Item
                {...tailLayout}
                name="availableNow"
                valuePropName="checked"
              >
                <Checkbox>Available Now</Checkbox>
              </Form.Item>

              <Form.Item {...tailLayout}>
                <Button type="primary" htmlType="submit">
                  Submit
                </Button>
              </Form.Item>
            </Form>
          </div>
        ) : (
          <div>
            <h3 style={{ margin: "auto", padding: "30px" }}>
              Create Your Contractor Profile
            </h3>
            <Form
              {...layout}
              name="basic"
              initialValues={{
                availableNow: true,
              }}
              onFinish={onCreate}
              onFinishFailed={onFinishFailed}
            >
              <Form.Item
                label={
                  <span>
                    Company Name (Optional)&nbsp;
                    <Tooltip title="Use this if you want to be listed under a company name rather than your name">
                      <QuestionCircleOutlined />
                    </Tooltip>
                  </span>
                }
                name="companyName"
                rules={[{ required: false }]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                name="skills"
                label={
                  <span>
                    Skills&nbsp;
                    <Tooltip title="Choose the skills you want to offer to clients">
                      <QuestionCircleOutlined />
                    </Tooltip>
                  </span>
                }
                rules={[
                  {
                    required: true,
                    message: "Please select your skills to be hired!",
                    type: "array",
                  },
                ]}
              >
                <Select mode="multiple" placeholder="Please select your skills">
                  <Option value="Electrician">Electrician</Option>
                  <Option value="Plumber">Plumber</Option>
                  <Option value="Housekeeper">Housekeeper</Option>
                </Select>
              </Form.Item>

              <Form.Item
                name="cities"
                label={
                  <span>
                    Cities&nbsp;
                    <Tooltip title="Choose the cities where you are available for work">
                      <QuestionCircleOutlined />
                    </Tooltip>
                  </span>
                }
                rules={[
                  {
                    required: true,
                    message: "Please select your cities to be hired!",
                    type: "array",
                  },
                ]}
              >
                <Select mode="multiple" placeholder="Please select your cities">
                  <Option value="Edinburg">Edinburg</Option>
                  <Option value="McAllen">McAllen</Option>
                  <Option value="Pharr">Pharr</Option>
                </Select>
              </Form.Item>

              <Form.Item
                {...tailLayout}
                name="availableNow"
                valuePropName="checked"
              >
                <Checkbox>Available Now</Checkbox>
              </Form.Item>

              <Form.Item {...tailLayout}>
                <Button type="primary" htmlType="submit">
                  Submit
                </Button>
              </Form.Item>
            </Form>
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    token: state.token,
    error: state.error,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getUserID: () => dispatch(actions.getUserID()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ContractorRegistration);
