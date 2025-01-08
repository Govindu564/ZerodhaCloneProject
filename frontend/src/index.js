import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { AuthProvider } from "./authContext.jsx";
import { BrowserRouter, Routes, Route, Router } from "react-router-dom";
import ProjectRoutes from "./router";

import Navbar from "./landing_page/Navbar.js";
import Footer from "./landing_page/Footer.js";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <AuthProvider>
    <BrowserRouter>
      <Navbar />
      <ProjectRoutes />
      <Footer />
    </BrowserRouter>
  </AuthProvider>
);
