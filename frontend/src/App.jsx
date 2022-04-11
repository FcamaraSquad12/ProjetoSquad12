import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import StoreProvider from "components/Store/Provider";
import RoutsPrivate from "components/Routes/Private/Private";
import Login from "./pages/Login/Login";
import SignUp from "./pages/SignUp/SignUp";
import Profile from "./pages/Profile/Profile";
import Home from "./components/User/Home/Home";

const PagesRoot = () => (
  <Router>
    <StoreProvider>
       <Routes>
         <Route path="/login" element={<Login/>} />
         <Route path="/signup" element={<SignUp/>} />
         <Route path="/home" element={<Home/>} />
         <Route path="/profile" element={<Profile/>} />
         <Route path="/" element={<Login/>} />
       </Routes>
     </StoreProvider>
   </Router>

);

export default PagesRoot;
