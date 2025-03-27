// @ts-ignore
import React from "react";
import { useNavigate } from "react-router-dom";

interface TimeSlotProps {
  time: string;
  date: string;
  count: number;
  id: number;
}

const TimeSlot: React.FC<TimeSlotProps> = ({ time, date, count, id }) => {
  const navigate = useNavigate();

  function handleTimeSlotClick(id: number, time: string, date: string): void {
    // Using navigate to pass parameters to the next page
    navigate("/confirmation", {
      state: { id, time, date }, // Passing the data via state
    });
  }

  return (
    <>
      <button
        className="time-slot"
        onClick={() => handleTimeSlotClick(id, time, date)}
      >
        {time} <span className="number-of-seats">{count}</span>
      </button>
    </>
  );
};

export default TimeSlot;
