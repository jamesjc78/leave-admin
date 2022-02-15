import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "../pages/login";
import Home from "../pages/home";
import Leave from "../pages/leave";

const AdminRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/user" element={<Home />} />
      <Route path="/user/:email" element={<Leave />} />
    </Routes>
  );
};

export default AdminRoutes;
