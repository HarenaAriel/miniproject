import React from "react";
import ReactDOM from "react-dom/client";
import "./style/index.css";
import App from "./layout/App";
import "./style/index.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
