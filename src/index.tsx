import React from "react";
import ReactDOM from "react-dom/client";
import "./app/style/index.css";
import { RouterProvider } from "react-router-dom";
import route from "./app/routes";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={route} />
  </React.StrictMode>
);
