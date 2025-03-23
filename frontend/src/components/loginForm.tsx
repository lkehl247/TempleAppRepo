"use client";

import React, { useState } from "react";

const LoginForm: React.FC = () => {
  const [email, setEmail] = useState("rgosling@gmail.com");
  const [password, setPassword] = useState("*************");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle login logic here
  };

  return (
    <form
      className="w-full max-w-xs"
      onSubmit={handleSubmit}
      aria-labelledby="login-heading"
    >
      <fieldset className="flex flex-col gap-6 p-6 bg-white rounded-lg border border-solid border-neutral-200">
        <legend className="sr-only" id="login-heading">
          Login Form
        </legend>

        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="text-base text-stone-900">
            Email
          </label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="p-3 px-px text-base text-black rounded-lg border border-solid border-neutral-200"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="password" className="text-base text-stone-900">
            Password
          </label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="p-3 px-px text-base rounded-lg border border-solid border-neutral-200 text-zinc-400"
          />
        </div>

        <div className="w-full">
          <button
            type="submit"
            className="py-3 w-full rounded-lg border border-sky-800 border-solid bg-[linear-gradient(90deg,#006184_0%,#0088BA_100%)] text-neutral-100"
          >
            Sign In
          </button>
        </div>

        <a href="#">Forgot password?</a>
      </fieldset>
    </form>
  );
};

export default LoginForm;
