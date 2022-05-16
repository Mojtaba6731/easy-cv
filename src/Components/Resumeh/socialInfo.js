import React from "react";
import "antd/dist/antd.css";

import { Form, Input, Button, Space } from "antd";
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";

const Demo = () => {
  const onFinish = (values) => {
    console.log("Received values of form:", values);
  };

  return (
    <Form name="social_info_form" onFinish={onFinish} autoComplete="off">
      <Form.List name="social_link">
        {(fields, { add, remove }) => (
          <>
            {fields.map(({ key, name, label, ...restField }) => (
              <Space
                key={key}
                style={{ display: "flex", marginBottom: 8 }}
                align="baseline"
              >
                <Form.Item
                  {...restField}
                  label={[label, "Label"]}
                  name={[name, "label"]}
                  rules={[{ required: true, message: "Missing label" }]}
                >
                  <Input placeholder="label" />
                </Form.Item>
                <Form.Item
                  {...restField}
                  label={[label, "Link"]}
                  name={[name, "link"]}
                  rules={[{ required: true, message: "Missing Link" }]}
                >
                  <Input placeholder="link" />
                </Form.Item>
                <MinusCircleOutlined onClick={() => remove(name)} />
              </Space>
            ))}
            <Form.Item>
              <Button
                type="dashed"
                onClick={() => add()}
                block
                icon={<PlusOutlined />}
              >
                Add field
              </Button>
            </Form.Item>
          </>
        )}
      </Form.List>
    </Form>
  );
};

export default Demo;
