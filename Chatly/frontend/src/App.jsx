import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Home from "./pages/Home";
import Profile from "./pages/Profile";

import useCurrentUser from "./Hooks/getCurrentUser";

const App = () => {
  useCurrentUser();

  const { userData } = useSelector((state) => state.user);

  console.log("Redux User:", userData);

  return (
    <Routes>

      {/* Login */}
      <Route
        path="/login"
        element={
          userData ? (
            <Navigate to="/" replace />
          ) : (
            <Login />
          )
        }
      />

      {/* Signup */}
      <Route
        path="/signup"
        element={
          userData ? (
            <Navigate to="/" replace />
          ) : (
            <Signup />
          )
        }
      />

      {/* Home */}
      <Route
        path="/"
        element={
          userData ? (
            <Home />
          ) : (
            <Navigate to="/login" replace />
          )
        }
      />

      {/* Profile */}
      <Route
        path="/profile"
        element={
          userData ? (
            <Profile />
          ) : (
            <Navigate to="/login" replace />
          )
        }
      />

      {/* Unknown route */}
      <Route
        path="*"
        element={<Navigate to="/login" replace />}
      />

    </Routes>
  );
};

export default App;