import React from "react";
import TimeSlot from "./TimeSlot";
import Appointment from "../types/Appointment";

interface TimeSlotData {
  time: string;
  count: number;
  id: number;
}

interface TimeSlots {
  [date: string]: TimeSlotData[];
}

interface TimeSlotGridProps {
  availableAppointments: Appointment[];
}

const TimeSlotGrid: React.FC<TimeSlotGridProps> = ({
  availableAppointments,
}) => {
  const timeSlots: TimeSlots = {};

  availableAppointments.forEach((appointment) => {
    const date = new Date(appointment.appointmentTime).toLocaleDateString(
      "en-US",
      {
        month: "short",
        day: "numeric",
      }
    );
    const time = new Date(appointment.appointmentTime).toLocaleTimeString(
      "en-US",
      {
        hour: "numeric",
        minute: "numeric",
      }
    );

    if (!timeSlots[date]) {
      timeSlots[date] = [];
    }

    const slot = timeSlots[date].find((slot) => slot.time === time);
    if (slot) {
      slot.count += 1;
    } else {
      timeSlots[date].push({ time, count: 1, id: appointment.appointmentId });
    }
  });

  return (
    <section className="time-slot-grid">
      <header className="time-slot-header">
        {Object.keys(timeSlots).map((date) => (
          <div key={date}>{date}</div>
        ))}
      </header>

      <div className="time-slot-content">
        {Object.entries(timeSlots).map(([date, slots]) => (
          <div key={date} className="time-slot-column">
            {slots
              .filter((slot) => slot.count > 0)
              .map((slot) => (
                <TimeSlot
                  key={`${date}-${slot.time}`}
                  id={slot.id}
                  time={slot.time}
                  date={date}
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
