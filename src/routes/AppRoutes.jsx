import React from 'react'
import { BrowserRouter, Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import LandingPage from "../pages/LandingPage"; 
import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";
import Basics from "../pages/Basics";
import Hooks from "../pages/Hooks";
import Routing from "../pages/Routing";
import ApiCalls from "../pages/ApiCalls";
import Zustand from "../pages/Zustand";
import UseEffectHook from "../pages/UseEffectHook";
import UseStateHook from "../pages/UseStateHook";
import UseContextHook from "../pages/UseContextHook";
import UseReducerHook from "../pages/UseReducerHook";
import UseRefHook from "../pages/UseRefHook";
import CustomHooks from "../pages/CustomHooks";
import Admin from "../pages/Admin";
import Unauthorised from '../pages/Unauthorised';
import ProtectedRoutes from '../routes/ProtectedRoutes'


const AppRoutes = () => {
  return (
    <div>
   <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/unauthorised" element={<Unauthorised />} />

        <Route element={<ProtectedRoutes allowedRoles={["admin"]} />}>
            <Route path="/admin" element={<Admin />} />
          </Route>

       <Route element={<ProtectedRoutes />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/basics" element={<Basics />} />
        <Route path="/hooks" element={<Hooks />} />
        <Route path="/routing" element={<Routing />} />
        <Route path="/apicall" element={<ApiCalls />} />
        <Route path="/zustand" element={<Zustand />} />
        <Route path="/hooks/useStateHook" element={<UseStateHook />} />
        <Route path="/hooks/useEffectHook" element={<UseEffectHook />} />
        <Route path="/hooks/useContextHook" element={<UseContextHook />} />
        <Route path="/hooks/useReducerHook" element={<UseReducerHook />} />
        <Route path="/hooks/useRefHook" element={<UseRefHook />} />
        <Route path="/hooks/customHooks" element={<CustomHooks />} />
       </Route>
      </Routes>
    </div>
  )
}

export default AppRoutes