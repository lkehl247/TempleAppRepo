"use client";
// @ts-ignore
import React from "react";
import { ActionButton } from "./ActionButton";
import { AppointmentList } from "./AppointmentList";
import { useNavigate } from "react-router-dom";

export const MainLayout: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div>
      <main>
        <h1>Welcome Ryan!</h1>

        <section>
          <ActionButton
            onClick={() => navigate(`/scheduling`)}
            text="Schedule Appointment"
          />
          <ActionButton
            onClick={() => navigate(`/stats`)}
            text="Attendance Stats"
          />
          <ActionButton
            onClick={() => navigate(`/profile`)}
            text="See Recommend"
          />
          <AppointmentList />
        </section>
      </main>
    </div>
  );
};

export default MainLayout;
