import React, { useState } from "react";
import "antd/dist/antd.css";
import { Form, Input, DatePicker, InputNumber } from "antd";
import Demo from "./socialInfo";

const formItemLayout = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 8,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 16,
    },
  },
};

export default function ContactForm({ submitContactForm }) {
  const [contactInfo, setContactInfo] = useState({});
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };

  React.useEffect(() => {
    submitContactForm.current = form.submit;
  }, []);

  return (
    <div className="w-max flex-col justify-center items-center mx-16">
      <div>
        <Form
          {...formItemLayout}
          size="large"
          form={form}
          name="contact"
          onFinish={onFinish}
          scrollToFirstError
        >
          <Form.Item
            initialValue=""
            name="nickname"
            label="Nickname"
            tooltip="first-name and last-name?"
            rules={[
              {
                required: true,
                message: "Please input your nickname!",
                whitespace: true,
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name="jobtitle"
            label="Job Title"
            rules={[
              {
                required: true,
                message: "Please input your job title!",
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
                // required: true,
                message: "Please input your E-mail!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name="location"
            label="Location"
            rules={[
              {
                required: true,
                whitespace: true,
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name="phone"
            label="Phone Number"
            rules={[
              {
                required: true,
                message: "Please input your phone number!",
              },
            ]}
          >
            <InputNumber addonBefore={"+98"} />
          </Form.Item>

          <Form.Item name="Birthday" label="BirthDay">
            <DatePicker />
          </Form.Item>
        </Form>
      </div>
      <div className="mt-16">
        <p className="text-base text-blue-700">Add Social or Portfolio Link:</p>
        <Demo />
      </div>
    </div>
  );
}
