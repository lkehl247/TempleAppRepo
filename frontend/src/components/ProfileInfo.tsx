"use client";
// @ts-ignore
import React from "react";
import barcode from "../assets/barcode.png";

export const ProfileInfo: React.FC = () => {
  return (
    <section>
      <div className="w-full rounded-xl bg-neutral-200 h-[140px]" />
      <div className="flex flex-col gap-3">
        <h1>Ryan Gosling</h1>
        <div>
          <img
            src={barcode}
            alt="Temple Recommend"
            style={{ width: "400px" }}
          />
        </div>
        <div className="flex flex-col gap-5">
          <h2 className="text-2xl leading-6 text-black">Expiration Date</h2>
          <time className="text-4xl font-bold leading-6 text-black">
            05/2026
          </time>
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

        <div className="flex flex-col gap-1.5 mt-12">
          <h3 className="text-base leading-6 text-black">Record Number</h3>
          <p className="text-3xl font-bold leading-6 text-black">
            001-4368-572B
          </p>
        </div>
      </div>
    </section>
  );
};
