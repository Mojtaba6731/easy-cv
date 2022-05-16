import React from "react";
import "antd/dist/antd.css";
import { Form, Input, Button, Space } from "antd";
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";

export default function Skills() {
  const onFinish = (values) => {
    console.log("Received values of form:", values);
  };

  return (
    <div className="flex flex-col">
      <p className="text-2xl text-blue-700">
        Type your summary,
        <br /> but notice we make this limited to 468 character:
      </p>
      <Form name="social_info_form" onFinish={onFinish} autoComplete="off">
        <Form.List
          className="flex justify-center"
          name="social_link"
          rules={[
            {
              validator: async (_, names) => {
                if (!names || names.length < 3) {
                  return Promise.reject(new Error("At least 3 Skill"));
                }
              },
            },
          ]}
        >
          {(fields, { add, remove }) => (
            <>
              {fields.map(({ key, name, ...restField }) => (
                <Space
                  key={key}
                  style={{ display: "flex", marginBottom: 8, align: "center" }}
                  align="baseline"
                >
                  <Form.Item
                    {...restField}
                    name={[name, "skill"]}
                    style={{ align: "center" }}
                  >
                    <Input placeholder="type here" />
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
    </div>
  );
}
