import React from "react";
import "antd/dist/antd.css";
import { Input } from "antd";

const { TextArea } = Input;

export default function Summary() {
  return (
    <div>
      <p className="text-2xl text-blue-700">
        Type your summary,
        <br /> but notice we make this limited to 468 character
      </p>
      <TextArea rows={10} placeholder="type here" maxLength={468} />
    </div>
  );
}
