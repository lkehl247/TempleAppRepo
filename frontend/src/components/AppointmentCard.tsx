// @ts-ignore
import React from "react";

interface AppointmentCardProps {
  title: string;
  date: string;
  arrivalTime: string;
}

export const AppointmentCard: React.FC<AppointmentCardProps> = ({
  title,
  date,
  arrivalTime,
}) => {
  return (
    <article className="appointment-box">
      <div>
        <h1>{title}</h1>
        <p>{date}</p>
        <p>{arrivalTime}</p>
      </div>
    </article>
  );
};
