import React from "react";
import "antd/dist/antd.css";
import { Form, DatePicker, Input } from "antd";

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

const { RangePicker } = DatePicker;

export default function Education() {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };

  React.useEffect(() => {
    Education.current = form.submit;
  }, []);

  return (
    <div className="w-max flex-col justify-center items-center mx-16">
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
          name="uni_name"
          label="Univercuty Name"
          rules={[
            {
              required: true,
              message: "Please input your univercity name!",
              whitespace: true,
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
              message: "Please input your uni-location!",
              whitespace: true,
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item name="date" label="Date">
          <RangePicker />
        </Form.Item>

        <Form.Item
          name="degree"
          label="Degree"
          rules={[
            {
              required: true,
              message: "Please input your Degree",
              whitespace: true,
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="field_of_Study"
          label="Field of Study"
          rules={[
            {
              required: true,
              message: "Please input your Degree",
              whitespace: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
      </Form>
    </div>
  );
}
