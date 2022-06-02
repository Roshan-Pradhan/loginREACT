import React from "react";
import { Form, Input, Button, Row, Col, message, Select } from "antd";
import {
  UserOutlined,
  LockOutlined,
  MailOutlined,
  PhoneOutlined,
} from "@ant-design/icons";
import axios from "axios";

const SignUp = () => {
  const onFinish = async (values) => {
    const { Username, Gender, Email, Phonenumber, Password } = values;

    try {
      const data = await axios.post("http://localhost:8000/userlogin", {
        Username,
        Gender,
        Email,
        Phonenumber,
        Password,
      });
      // console.log(data.data.Message);
      message.success(data.data.Message);
    } catch (err) {
      message.error(err.response.data);
    }
  };
  return (
    <div className="myForm">
      <Row justify="center" align="middle">
        <Col span={10}>
          <h4 align="middle">User Registration Form</h4>
          <Form
            name="normal_login"
            className="login-form"
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
          >
            <Form.Item
              name="Username"
              rules={[
                {
                  required: true,
                  message: "Please input your Username!",
                },
              ]}
            >
              <Input
                prefix={<UserOutlined className="site-form-item-icon" />}
                placeholder="Username"
              />
            </Form.Item>

            <Form.Item
              name="Gender"
              rules={[
                {
                  required: true,
                  message: "Please select your gender!",
                },
              ]}
            >
              <Select placeholder="Select Your Gender">
                <Select.Option value="Male">Male</Select.Option>
                <Select.Option value="Female">Female</Select.Option>
                <Select.Option value="Others">Others</Select.Option>
              </Select>
            </Form.Item>

            <Form.Item
              name="Email"
              rules={[
                {
                  required: true,
                  message: "Please input your Email!",
                },
              ]}
            >
              <Input
                prefix={<MailOutlined className="site-form-item-icon" />}
                placeholder="Email"
              />
            </Form.Item>
            <Form.Item
              name="Phonenumber"
              rules={[
                {
                  required: true,
                  message: "Please input your Phonenumber!",
                },
              ]}
            >
              <Input
                prefix={<PhoneOutlined className="site-form-item-icon" />}
                placeholder="Phonenumber"
                type="number"
                maxLength="10"
              />
            </Form.Item>
            <Form.Item
              name="Password"
              rules={[
                {
                  required: true,
                  message: "Please input your Password!",
                },
              ]}
            >
              <Input
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                placeholder="Password"
              />
            </Form.Item>

            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                className="login-form-button Buttonss"
              >
                Register
              </Button>
            </Form.Item>
          </Form>
        </Col>
      </Row>
    </div>
  );
};

export default SignUp;
