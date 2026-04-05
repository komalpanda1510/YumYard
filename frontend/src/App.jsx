import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import ForgotPassword from "./pages/ForgotPassword";
import useGetCurrentUser from "./hooks/useGetCurrentUser";
import { useSelector } from "react-redux";
import Home from "./pages/Home";
import useGetCity from "./hooks/useGetCity";
import useGetMyShop from "./hooks/useGetMyShop";
export const serverUrl = "http://localhost:8000";
function App() {
  useGetCurrentUser(); // Fetch current user on app load
  useGetCity(); // Fetch user's city on app load
  useGetMyShop(); // Fetch user's shop data on app load
  const {userData}=useSelector(state=>state.user);
  return (
    <Routes>
      <Route path="/signup" element={!userData?<SignUp />:<Navigate to={"/"}/>} />
      <Route path="/signin" element={!userData?<SignIn />:<Navigate to={"/"}/>} />
      <Route path="/forgot-password" element={!userData?<ForgotPassword />:<Navigate to={"/"}/>} />
      <Route path="/" element={userData?<Home/>:<Navigate to={"/signin"}/>} />

    </Routes>
  );
}

export default App;
