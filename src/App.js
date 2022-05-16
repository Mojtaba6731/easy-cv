import React from "react";
import Routes from "./Components/Route/Route";
import { memo } from "react";

const App = memo(() => {
  return (
    <div className="w-screen">
      <Routes />
    </div>
  );
});

export default App;
