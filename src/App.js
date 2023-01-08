import React from "react";
import Login from "./pages/login/Login";
import { Routes, Route } from "react-router-dom";
import Profile from "./pages/profile/Profile";
import Home from "./pages/homepage/Home";

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Login />} />
      <Route exact path="/homepage/Home" element={<Home />} />
      <Route exact path="/profile/Profile" element={<Profile />} />
    </Routes>
  );
}

export default App;
