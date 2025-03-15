import React from "react";

export const AppointmentCard = ({ title, date, arrivalTime }) => {
  return (
    <article className="p-4 rounded-xl bg-neutral-400">
      <div className="text-base text-center text-black">
        <span>{title}</span>{" "}
        <span className="font-bold text-black">
          {date} at {arrivalTime}
        </span>
      </div>
    </article>
  );
};
