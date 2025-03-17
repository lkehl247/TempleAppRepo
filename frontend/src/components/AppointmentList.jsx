import React from "react";
import { AppointmentCard } from "./AppointmentCard";

export const AppointmentList = () => {
  const appointments = [
    {
      title: "Endowment at Provo City Center",
      date: "3/13/2025 at 5pm",
      arrivalTime: "Arrive at 4:30pm",
    },
    {
      title: "Baptisms at Orem",
      date: "3/20/2025 at 8am",
      arrivalTime: "Arrive at 7:30am",
    },
    {
      title: "Initiatory at Payson",
      date: "3/27/2025 at 8am",
      arrivalTime: "Arrive at 7:45am",
    },
    {
      title: "Sealings at Orem",
      date: "3/31/2025 at 1pm",
      arrivalTime: "Arrive at 12:30pm",
    },
  ];

  return (
    <section className="p-4 rounded-xl border border-lime-700">
      <h2 className="mb-5 text-2xl font-bold text-center text-black">
        Upcoming Appointments
      </h2>
      <div className="flex flex-col gap-2.5">
        {appointments.map((appointment, index) => (
          <AppointmentCard
            key={index}
            title={appointment.title}
            date={appointment.date}
            arrivalTime={appointment.arrivalTime}
          />
        ))}
      </div>
    </section>
  );
};
