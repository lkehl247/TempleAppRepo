"use client";
// @ts-ignore
import React from "react";

export const ProfileInfo: React.FC = () => {
  return (
    <section className="flex flex-col gap-10 px-8 mt-16">
      <div className="w-full rounded-xl bg-neutral-200 h-[140px]" />
      <div className="flex flex-col gap-3">
        <h1 className="text-4xl font-bold leading-6 text-black">Emma Smith</h1>

        <div className="flex flex-col gap-5">
          <h2 className="text-2xl leading-6 text-black">Expiration Date</h2>
          <time className="text-4xl font-bold leading-6 text-black">
            05/2026
          </time>
        </div>

        <div className="mt-2 h-[37px] w-[165px]">
          <button className="text-sm text-white rounded-xl bg-slate-500 size-full">
            Set Renewal Reminder
          </button>
        </div>

        <div className="flex flex-col gap-1.5 mt-14">
          <h3 className="text-base leading-6 text-black">Ward or Branch</h3>
          <p className="text-3xl font-bold leading-6 text-black">
            Provo YSA 81st Ward
          </p>
        </div>

        <div className="flex flex-col gap-1.5 mt-2.5">
          <h3 className="text-base leading-6 text-black">Stake</h3>
          <p className="text-3xl font-bold leading-6 text-black">
            Provo YSA 6th Stake
          </p>
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
