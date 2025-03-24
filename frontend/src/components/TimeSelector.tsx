import React from "react";

interface TimeSelectorProps {
  selectedStartTime: string | null;
  setSelectedStartTime: (time: string | null) => void;
  selectedEndTime: string | null;
  setSelectedEndTime: (time: string | null) => void;
}

const TimeSelector: React.FC<TimeSelectorProps> = ({
  selectedStartTime,
  setSelectedStartTime,
  selectedEndTime,
  setSelectedEndTime,
}) => {
  return (
    <section>
      <div>
        <h2>Start Time</h2>
        <input
          type="time"
          value={selectedStartTime || ""}
          onChange={(e) => setSelectedStartTime(e.target.value)}
        />
      </div>
      <div>
        <h2>End Time</h2>
        <input
          type="time"
          value={selectedEndTime || ""}
          onChange={(e) => setSelectedEndTime(e.target.value)}
        />
      </div>
    </section>
  );
};

export default TimeSelector;
