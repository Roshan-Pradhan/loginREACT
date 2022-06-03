import React from "react";
import { Form, Row, Col, message, Input, Button } from "antd";
import axios from "axios";
import { LockOutlined, MailOutlined } from "@ant-design/icons";

const SignIn = () => {
  const onFinish = async (values) => {
    const { Email, Password } = values;
    try {
      const data = await axios.post("http://localhost:8000/newlogin", {
        Email,
        Password,
      });
      // console.log(data.status);
      message.success(data.data);
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
                Sign In
              </Button>
            </Form.Item>
          </Form>
        </Col>
      </Row>
    </div>
  );
};

export default SignIn;
