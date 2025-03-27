"use client";

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginForm: React.FC = () => {
  const [email, setEmail] = useState("rgosling@gmail.com");
  const [password, setPassword] = useState("*************");
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle login logic here
  };

  return (
    <form onSubmit={handleSubmit} aria-labelledby="login-heading">
      <fieldset>
        <div>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="password">Password</label>
          <input
            className="input-left-align"
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div>
          <button onClick={() => navigate("/")} type="submit">
            Sign In
          </button>
        </div>

        <a className="login-section" href="#">
          Forgot password?
        </a>
      </fieldset>
    </form>
  );
};

export default LoginForm;
