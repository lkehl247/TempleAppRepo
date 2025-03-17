// src/pages/Login.jsx
// import React from "react";

// const Login = () => {
//   return <h1>Login Page</h1>;
// };

// export default Login;

"use client";

import React from "react";
import StatusBar from "../statusBar";
import LoginForm from "../loginForm";

const CelestialScheduleLogin: React.FC = () => {
  return (
    <main className="w-full bg-[linear-gradient(180deg,#006184_0%,#FFF_100%)] min-h-screen">
      <StatusBar />

      <section className="flex flex-col items-center px-4 pt-14">
        <h1 className="mb-16 text-5xl font-bold text-white max-md:text-4xl max-sm:text-3xl">
          Celestial Schedule
        </h1>

        <LoginForm />

        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/8e6628c480a4ceb7d81306cf7bcfb1a88873461f"
          alt="Temple illustration"
          className="w-[303px] h-[303px] mt-8 max-sm:w-[250px] max-sm:h-[250px]"
        />
      </section>
    </main>
  );
};

export default CelestialScheduleLogin;

