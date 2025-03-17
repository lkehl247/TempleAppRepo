import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";


// Import pages
import Home from "./pages/Home";
import Stats from "./components/TempleDashboard";
import Learn from "./pages/Learn";
import Profile from "./components/MembershipCard";
import Scheduling from "./components/TempleScheduler";
import Login from "./pages/Login";
import Welcome from "./components/MainLayout";

const NavAppBar = () => {
  return (
    <BrowserRouter>
      <nav className="nav-bar">
        <Link to="/" className="nav-item">
          <img className="icon" src="./assets/home.png" alt="Home" />
          <span>Home</span>
        </Link>
        <Link to="/scheduling" className="nav-item">
          <img className="icon" src="./assets/calendar.png" alt="Calendar" />
          <span>Scheduling</span>
        </Link>
        <Link to="/stats" className="nav-item">
          <img className="icon" src="./assets/stats.png" alt="Stats" />
          <span>Stats</span>
        </Link>
        <Link to="/learn" className="nav-item">
          <img className="icon" src="./assets/recommend.png" alt="Learn" />
          <span>Learn</span>
        </Link>
        <Link to="/profile" className="nav-item">
          <img className="icon" src="./assets/profile.png" alt="Profile" />
          <span>Profile</span>
        </Link>
        <Link to="/login" className="nav-item">
          <span>Login</span>
        </Link>
      </nav>

      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/stats" element={<Stats />} />
          <Route path="/learn" element={<Learn />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/scheduling" element={<Scheduling />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default NavAppBar;
