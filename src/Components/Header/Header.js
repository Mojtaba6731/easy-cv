import React, { useState } from "react";
import { Link } from "react-router-dom";
import "antd/dist/antd.css";
import { Menu } from "antd";
import { SendOutlined } from "@ant-design/icons";

export default function Header() {
  const [current, setCurrent] = useState();

  const { SubMenu } = Menu;
  const handleClick = (e) => {
    setCurrent(e.key);
  };

  return (
    <Menu
      className="flex justify-center items-center px-2 md:px-80"
      onClick={handleClick}
      selectedKeys={current}
      mode="horizontal"
    >
      <Menu.Item
        key="Rocket"
        className="flex items-center mr-auto"
        icon={<SendOutlined className="text-blue-600 text-lg" />}
        onClick={handleClick}
      >
        <Link to="/" className="font-semibold text-base text-blue-600">
          Easy CV
        </Link>
      </Menu.Item>

      <Menu.Item key="About" className="flex items-center">
        <a onClick={handleClick} target="_blank" rel="noopener noreferrer">
          <Link to="/About">About</Link>
        </a>
      </Menu.Item>

      <Menu.Item key="log-ing" className="flex items-center">
        <a onClick={handleClick} target="_blank" rel="noopener noreferrer">
          <Link to="/Login">Log In</Link>
        </a>
      </Menu.Item>
      <Menu.Item key="resumeh" className="flex items-center">
        <a onClick={handleClick} target="_blank" rel="noopener noreferrer">
          <Link to="/Resume">Resume</Link>
        </a>
      </Menu.Item>
    </Menu>
  );
}
