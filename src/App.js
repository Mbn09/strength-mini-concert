import React from "react";
import Router from "./screen/00_Nav/router";
import { ConfigProvider } from "antd";

ConfigProvider.config({
  theme: {
    primaryColor: "#086E7D",
  },
});

const App = () => {
  return (
    <ConfigProvider>
      <Router />
    </ConfigProvider>
  );
};

export default App;
