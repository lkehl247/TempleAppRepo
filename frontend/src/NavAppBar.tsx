import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
// import icons
import homeBtn from "./assets/home.png";
import calendarBtn from "./assets/calendar.png";
import statsBtn from "./assets/stats.png";
import recommendBtn from "./assets/recommend.png";
import profileBtn from "./assets/profile.png";

// Import pages
import Home from "./pages/Home";
import Stats from "./pages/Stats";
import Learn from "./pages/Learn";
import Profile from "./pages/Profile";
import Scheduling from "./pages/Scheduling";
import Login from "./pages/Login";

const NavAppBar = () => {
  return (
    <BrowserRouter>
      <nav className="nav-bar">
        <Link to="/" className="nav-item">
          <img className="icon" src={homeBtn} alt="Home" />
          <span>Home</span>
        </Link>
        <Link to="/scheduling" className="nav-item">
          <img className="icon" src={calendarBtn} alt="Calendar" />
          <span>Scheduling</span>
        </Link>
        <Link to="/stats" className="nav-item">
          <img className="icon" src={statsBtn} alt="Stats" />
          <span>Stats</span>
        </Link>
        <Link to="/learn" className="nav-item">
          <img className="icon" src={recommendBtn} alt="Learn" />
          <span>Learn</span>
        </Link>
        <Link to="/profile" className="nav-item">
          <img className="icon" src={profileBtn} alt="Profile" />
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
