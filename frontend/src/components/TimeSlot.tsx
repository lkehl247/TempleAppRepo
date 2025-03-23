// @ts-ignore
import React from "react";

interface TimeSlotProps {
  time: string;
  count: number;
}

const TimeSlot: React.FC<TimeSlotProps> = ({ time, count }) => {
  return (
    <div className="flex items-center gap-2 p-2 bg-green-700 rounded-md text-white">
      <div className="flex items-center gap-2">
        <div className="px-2 py-1 bg-green-800 rounded-md">{time}</div>
        <div className="w-6 h-6 flex items-center justify-center bg-black text-white rounded-full text-sm">
          {count}
        </div>
      </div>
    </div>
  );
};

export default TimeSlot;
