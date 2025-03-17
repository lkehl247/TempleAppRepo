// src/App.jsx
import React from "react";


// Import pages
import Home from "./pages/Home";
import Stats from "./components/TempleDashboard";
import Learn from "./pages/Learn";
import Profile from "./components/MembershipCard";
import Scheduling from "./components/TempleScheduler";
import Login from "./pages/Login";
import Welcome from "./components/MainLayout"

import "./App.css";
// import components
import NavAppBar from "./NavAppBar";

function App() {
  return (
    <>

      <NavAppBar />
    </>
  );
}

export default App;
