import React from "react";
import LandingPage from "./pages/LandingPage";
import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Basics from "./pages/Basics";
import Hooks from "./pages/Hooks";
import Routing from "./pages/Routing";
import ApiCalls from "./pages/ApiCalls";
import Zustand from "./pages/Zustand";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/basics" element={<Basics />} />
        <Route path="/hooks" element={<Hooks />} />
        <Route path="/routing" element={<Routing />} />
        <Route path="/apicall" element={<ApiCalls />} />
        <Route path="/zustand" element={<Zustand />} />
      </Routes>
    </div>
  );
};

export default App;
