"use client";
// @ts-ignore
import React from "react";
import { ActionButton } from "./ActionButton";
import { AppointmentList } from "./AppointmentList";

export const MainLayout: React.FC = () => {
  return (
    <div className="flex flex-col bg-white min-h-[screen]">
      <main className="flex flex-col gap-10 px-7 mt-12">
        <h1 className="text-4xl font-semibold text-center text-black">
          Welcome, Emma!
        </h1>

        <section className="flex flex-col gap-10">
          <ActionButton
            text="Schedule Appointment"
            className="rounded-xl bg-slate-500"
          />
          <ActionButton
            text="Attendance Stats"
            className="rounded-xl bg-neutral-400"
          />
          <ActionButton
            text="See Recommend"
            className="rounded-xl bg-lime-900"
          />
          <AppointmentList />
        </section>
      </main>
    </div>
  );
};

export default MainLayout;
