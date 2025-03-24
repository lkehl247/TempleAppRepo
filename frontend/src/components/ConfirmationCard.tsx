// @ts-ignore
import React from "react";

interface ConfirmationCardProp {
  temple: string;
  date: string;
  time: string;
  ordinance: string;
  arrivalTime: string;
}

export const ConfirmationCard: React.FC<ConfirmationCardProp> = ({
  temple,
  date,
  time,
  ordinance,
  arrivalTime,
}) => {
  return (
    <article className="appointment-box">
      <div>
        <h1>Temple: {temple}</h1>
        <p>Date: {date}</p>
        <p>Time: {time}</p>
        <p>Ordinanace: {ordinance}</p>
        <p>Please arrive {arrivalTime} early</p>
      </div>
    </article>
  );
};
