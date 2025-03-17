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
    <section className="time-slot-grid">
      <header className="time-slot-header">
        <div>Feb 24</div>
        <div>Feb 25</div>
        <div>Feb 26</div>
      </header>

      <div className="time-slot-content">
        {Object.entries(timeSlots).map(([date, slots]) => (
          <div key={date} className="time-slot-column">
            {slots.map((slot) => (
              <TimeSlot
                key={`${date}-${slot.time}`}
                time={slot.time}
                count={slot.count}
                className={`time-slot-item ${slot.count >= 4 ? "busy" : ""}`}
              />
            ))}
          </div>
        ))}
      </div>
    </section>
  );
};

export default TimeSlotGrid;
