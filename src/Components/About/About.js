import React from "react";
import { Helmet } from "react-helmet";

export default function About() {
  return (
    <div className="flex justify-center bg-slate-50">
      <Helmet>
        <title>About | Rocket</title>
      </Helmet>
      <div className="w-screen h-screen flex justify-center items-center py-20">
        <div className="w-2/5 h-full flex flex-col lg:flex-row justify-center items-center bg-slate-50 px-4 lg:px-20">
          <p className="font-normal text-sm md:text-base lg:text-xl leading-5">
            <h4>Why Easy CV is Best?</h4>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
        </div>
        <div className="flex items-center justify-center"></div>
      </div>
    </div>
  );
}
