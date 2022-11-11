import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./containers/Auth/Login";
import Register from "./containers/Auth/Register";
import Home from "./containers/Home";
const UnAuthorized = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/reg" element={<Register />}></Route>
      <Route path="*" element={<div>OOPS!!! Not Found</div>}></Route>
    </Routes>
  );
};

export default UnAuthorized;
