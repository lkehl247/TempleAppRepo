// src/pages/Login.jsx
// import React from "react";

// const Login = () => {
//   return <h1>Login Page</h1>;
// };

// export default Login;

"use client";

import React from "react";
import LoginForm from "../components/loginForm";

const CelestialScheduleLogin: React.FC = () => {
  return (
    <>
      <h1>Celestial Temple Scheduler</h1>

      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/8e6628c480a4ceb7d81306cf7bcfb1a88873461f"
        alt="Temple illustration"
      />

      <LoginForm />
    </>
  );
};

export default CelestialScheduleLogin;
