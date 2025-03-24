// @ts-ignore
import React from "react";

interface TimeSlotProps {
  time: string;
  count: number;
}

const TimeSlot: React.FC<TimeSlotProps> = ({ time, count }) => {
  return (
    <div className="appointment-time">
      <time>{time}</time>
      <div className="number-of-seats">{count}</div>
    </div>
  );
};

export default TimeSlot;
