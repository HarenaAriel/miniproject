import React from "react";
import Navbar from "./Navbar";
import { Outlet } from "react-router";

function App() {
  return (
    <>
      <div className="App">
        <Navbar />
        <div className="content">
          <Outlet />
        </div>
      </div>
    </>
  );
}

export default App;
