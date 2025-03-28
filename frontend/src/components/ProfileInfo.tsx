"use client";
// @ts-ignore
import React from "react";
import barcode from "../assets/barcode.png";

export const ProfileInfo: React.FC = () => {
  return (
    <section>
      <div />
      <div>
        <h1>Ryan Gosling</h1>
        <div>
          <img
            src={barcode}
            alt="Temple Recommend"
            style={{ width: "400px" }}
          />
        </div>
        <div>
          <h2>Expiration Date</h2>
          <time>05/2026</time>
        </div>
        <br />
        <div>
          <button>Set Renewal Reminder</button>
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
