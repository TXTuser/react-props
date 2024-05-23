import logo from "./logo.svg";
import "./App.css";
import React from "react";
import { useState, useEffect } from "react";
import FuncComponent from "./comp/FuncComponent";
import ArrowFuncComponent from "./comp/ArrowFuncComponent";
import ClassComponent from "./comp/ClassComponent";

function App() {
  return (
    <div className="App">
      <FuncComponent name="Alex"></FuncComponent>
      {/* <ClassComponent name="Alex" number="345"></ClassComponent> */}
      <ClassComponent name="Alex" numbers={[1, 2, 3, 4, 5]}></ClassComponent>
      <ArrowFuncComponent></ArrowFuncComponent>
    </div>
  );
}

export default App;
