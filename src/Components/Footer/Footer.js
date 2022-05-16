import React from "react";
import "antd/dist/antd.css";
import { ArrowUpOutlined } from "@ant-design/icons";

export default function Footer() {
  return (
    <div className="relative min-h-72 flex flex-col lg:flex-row justify-center items-center lg:justify-between bg-blue-600 px-2 sm:px-0">
      {/* ----Back_Top--- */}
      <div className="absolute left-1/2 bottom-full w-max p-2 -my-5 bg-white rounded-full hover:-translate-y-1 duration-1000 ease-in-out">
        <a href="#" className="text-gray-800 text-3xl">
          <ArrowUpOutlined />
        </a>
      </div>
      {/*---About_Us---*/}
      <div className="h-5/6 flex justify-center items-center m-10">
        <p className="text-lg text-slate-300"> Easy CV</p>
      </div>
    </div>
  );
}
