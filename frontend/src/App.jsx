// src/App.jsx
import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./App.css";

// Import pages
import Home from "./pages/Home";
import Stats from "./pages/Stats";
import Learn from "./pages/Learn";
import Profile from "./pages/Profile";
import Scheduling from "./pages/Scheduling";
import Login from "./pages/Login";

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link> |<Link to="/stats">Stats</Link> |
        <Link to="/learn">Learn</Link> |<Link to="/profile">Profile</Link> |
        <Link to="/scheduling">Scheduling</Link> |{" "}
        <Link to="/login">Login</Link>
      </nav>

      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/stats" element={<Stats />} />
          <Route path="/learn" element={<Learn />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/scheduling" element={<Scheduling />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
