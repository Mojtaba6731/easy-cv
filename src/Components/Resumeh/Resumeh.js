import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import { Button, message, notification, Steps } from "antd";
import { GithubOutlined, GoogleOutlined } from "@ant-design/icons";
import ContactForm from "./contact";
import UploadImage from "./uploadImage";
import Education from "./education";
import Summary from "./summary";
import Skills from "./skills";

export default function ResumeBuilder() {
  const { Step } = Steps;
  const [current, setCurrent] = React.useState(0);
  const childFunc = React.useRef(null);

  const next = () => {
    if (current === 0) {
      childFunc.current();
    }
    setCurrent(current + 1);
  };
  const prev = () => {
    setCurrent(current - 1);
  };

  const steps = [
    {
      title: "Contact Information",
      content: <ContactForm submitContactForm={childFunc} />,
    },
    {
      title: "Upload Image",
      content: <UploadImage />,
    },
    {
      title: "Education",
      content: <Education />,
    },
    {
      title: "Summary",
      content: <Summary />,
    },
    {
      title: "Sklls",
      content: <Skills />,
    },
    {
      title: "Experience or Project",
      content: <Education />,
    },
  ];

  return (
    <>
      <div className="w-screen min-h-screen h-full flex justify-center my-16 px-16">
        <div className="w-full min-h-screen h-full flex flex-col items-center justify-center">
          <Steps current={current}>
            {steps.map((item) => (
              <Step key={item.title} title={item.title} />
            ))}
          </Steps>
          <div className="steps-content w-full h-max flex justify-center items-center mt-24 mb-12">
            {steps[current].content}
          </div>
          <div className="steps-action mb-40 mt-auto">
            {current < steps.length - 1 && (
              <Button size="large" type="primary" onClick={() => next()}>
                Save & Next
              </Button>
            )}
            {current === steps.length - 1 && (
              <Button
                size="large"
                type="primary"
                onClick={() => message.success("Processing complete!")}
              >
                Done
              </Button>
            )}
            {current > 0 && (
              <Button
                size="large"
                style={{ margin: "0 8px" }}
                onClick={() => prev()}
              >
                Previous
              </Button>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
