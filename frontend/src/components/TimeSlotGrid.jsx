import React from "react";
import TimeSlot from "./TimeSlot";

const timeSlots = {
  "Feb 24": [
    { time: "9:00 AM", count: 2 },
    { time: "10:00 AM", count: 4 },
    { time: "12:00 PM", count: 1 },
    { time: "1:30 PM", count: 3 },
    { time: "8:00 PM", count: 1 },
  ],
  "Feb 25": [
    { time: "7:00 AM", count: 2 },
    { time: "10:30 AM", count: 5 },
    { time: "4:00 PM", count: 6 },
    { time: "5:00 PM", count: 3 },
    { time: "5:30 PM", count: 1 },
    { time: "7:00 PM", count: 2 },
    { time: "8:00 PM", count: 1 },
  ],
  "Feb 26": [
    { time: "7:00 AM", count: 3 },
    { time: "8:00 AM", count: 4 },
    { time: "9:00 AM", count: 4 },
    { time: "10:00 AM", count: 3 },
    { time: "11:00 AM", count: 5 },
    { time: "12:00 PM", count: 2 },
    { time: "1:00 PM", count: 1 },
    { time: "2:00 PM", count: 1 },
    { time: "3:00 PM", count: 2 },
  ],
};

const TimeSlotGrid = () => {
  return (
    <section className="flex flex-col">
      <header className="grid grid-cols-3 py-1 text-lg text-center text-white bg-lime-900">
        <div className="border-2 border-black">Feb 24</div>
        <div className="border-2 border-black">Feb 25</div>
        <div>Feb 26</div>
      </header>
      <div className="grid grid-cols-3 border-2 border-black">
        {Object.entries(timeSlots).map(([date, slots]) => (
          <div key={date} className="flex flex-col gap-2 p-1">
            {slots.map((slot) => (
              <TimeSlot
                key={`${date}-${slot.time}`}
                time={slot.time}
                count={slot.count}
              />
            ))}
          </div>
        ))}
      </div>
    </section>
  );
};

export default TimeSlotGrid;
