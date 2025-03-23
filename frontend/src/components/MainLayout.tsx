"use client";
// @ts-ignore
import React from "react";
import { ActionButton } from "./ActionButton";
import { AppointmentList } from "./AppointmentList";

export const MainLayout: React.FC = () => {
  return (
    <div>
      <main>
        <h1>Welcome, Emma!</h1>

        <section>
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
