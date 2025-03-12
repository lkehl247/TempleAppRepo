import React from "react";
import "./App.css";

const NavBar = () => {
  return (
    <nav className="nav-bar">
      <div>
        <img className="icon" src="/assets/home.png" />
        <span>Home</span>
      </div>
      <div className="nav-item">
        <img className="icon" src="/assets/calendar.png" />
        <span>Calendar</span>
      </div>
      <div className="nav-item">
        <img className="icon" src="/assets/stats.png" />
        <span>Stats</span>
      </div>
      <div className="nav-item">
        <img className="icon" src="/assets/home/recommend.png" />
        <span>Recommend</span>
      </div>
      <div className="nav-item">
        <img className="icon" src="/assets/profile.png" />
        <span>Profile</span>
      </div>
    </nav>
  );
};

export default NavBar;
