// @ts-ignore
import React from "react";
import { AppointmentCard } from "./AppointmentCard";

interface Appointment {
  title: string;
  date: string;
  arrivalTime: string;
}

export const AppointmentList: React.FC = () => {
  const appointments: Appointment[] = [
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
    <section>
      <h2>Upcoming Appointments</h2>
      <div>
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
