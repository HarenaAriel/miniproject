import React from "react";
import ReactDOM from "react-dom/client";
import "./style/index.css";
import "./style/index.css";
import { RouterProvider } from "react-router-dom";
import route from "./routes";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={route} />
  </React.StrictMode>
);
