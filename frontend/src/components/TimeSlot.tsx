// @ts-ignore
import React from "react";

interface TimeSlotProps {
  time: string;
  count: number;
}

const TimeSlot: React.FC<TimeSlotProps> = ({ time, count }) => {
  return (
    <div className="flex justify-between items-center px-2.5 py-1.5 text-white bg-lime-900 rounded-xl">
      <time className="text-base">{time}</time>
      <div className="w-6 h-6 text-black bg-white rounded-full flex items-center justify-center">
        {count}
      </div>
    </div>
  );
};

export default TimeSlot;
