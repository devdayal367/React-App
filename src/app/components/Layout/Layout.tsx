import React from "react";
import { HashRouter, Navigate, Route, Routes } from "react-router-dom";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Login from "../Login/Login";
import PrivateRoutes from "./PrivateRoutes";
import About from "./Pages/About/About";
import Contact from "./Pages/Contact/Contact";
import useAuth from "./useAuth";
import Header from "../Shared/Header/Header";

export default function Layout() {
    const { isAuthenticated } = useAuth();
  return (
    <div>
      <h1>layout component</h1>
      {isAuthenticated && <Header />}
      <HashRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/login" replace />} />
          <Route path="/login" element={<Login />} />
          <Route element={<PrivateRoutes />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Route>
          <Route />
        </Routes>
      </HashRouter>
    </div>
  );
}
