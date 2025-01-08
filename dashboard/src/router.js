import React, { useEffect } from "react";
import { useNavigate, useRoutes } from "react-router-dom";

// Pages
import Home from "./components/Home";
import Login from "./components/Login";
import Orders from "./components/Orders";
import Holdings from "./components/Holdings";
import Positions from "./components/Positions";
import Funds from "./components/Funds";
import Apps from "./components/Apps";
import Summary from "./components/Summary";

import Menu from "./components/Menu";

// Context
import { useAuth } from "./authContext";

const ProjectRoutes = () => {
  const { currentUser, setCurrentUser } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const userIdfromStorage = localStorage.getItem("userId");

    if (userIdfromStorage && !currentUser) {
      setCurrentUser(userIdfromStorage);
    }

    // Redirect based on authentication
    if (!userIdfromStorage) {
      navigate("/auth"); // Redirect to Login if not authenticated
    } else if (userIdfromStorage && window.location.pathname === "/auth") {
      navigate("/"); // Redirect to Home if logged in
    }
  }, [currentUser, navigate, setCurrentUser]);

  const element = useRoutes([
    {
      path: "/auth",
      element: !currentUser ? <Login /> : null, // Render Login only if unauthenticated
    },
    {
      path: "/",
      element: currentUser ? <Home/> : null,
      children: [
        { path: "/", element: <Summary /> },
        { path: "orders", element: <Orders /> },
        { path: "holdings", element: <Holdings /> },
        { path: "positions", element: <Positions /> },
        { path: "funds", element: <Funds /> },
        { path: "apps", element: <Apps /> },
      ], // Render Login only if unauthenticated
    },
    <Menu/>
  ]);

  return element || <div>Loading...</div>; // Fallback while routing is resolved
};

export default ProjectRoutes;
