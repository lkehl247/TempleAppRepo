// @ts-ignore
import React from "react";

interface TimeSlotProps {
  time: string;
  date: string;
  count: number;
  id: number;
}

const TimeSlot: React.FC<TimeSlotProps> = ({ time, date, count, id }) => {
  function handleTimeSlotClick(id: number, time: string, date: string): void {
    console.log(id, date, time);
  }

  return (
    <div onClick={() => handleTimeSlotClick(id, date, time)}>
      <time>{time}</time>
      <div className="number-of-seats">{count}</div>
    </div>
  );
};

export default TimeSlot;
