"use client";
// @ts-ignore
import React from "react";
import "../App.css";

export const ProfileInfo: React.FC = () => {
  return (
    <section style={{ marginTop: "40px" }}>
      <div />
      <div>
        <h1>Emma Smith</h1>
        <br />
        <br />

        <div>
          <h2>Expiration Date</h2>
          <time>05/2026</time>
        </div>

        <div>
          <button style={{ borderRadius: "10px" }}>Set Renewal Reminder</button>
        </div>

        <div>
          <h3>Ward or Branch</h3>
          <p>Provo YSA 81st Ward</p>
        </div>

        <div>
          <h3>Stake</h3>
          <p>Provo YSA 6th Stake</p>
        </div>

        <div>
          <h3>Record Number</h3>
          <p>001-4368-572B</p>
        </div>
      </div>
    </section>
  );
};
