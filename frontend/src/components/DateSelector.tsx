import React from "react";

interface DateSelectorProps {
  selectedStartDate: string | null;
  setSelectedStartDate: (date: string | null) => void;
  selectedEndDate: string | null;
  setSelectedEndDate: (date: string | null) => void;
}

const DateSelector: React.FC<DateSelectorProps> = ({
  selectedStartDate,
  setSelectedStartDate,
  selectedEndDate,
  setSelectedEndDate,
}) => {
  return (
    <section>
      <div>
        <h2>Start Date</h2>
        <input
          type="date"
          value={selectedStartDate || ""}
          onChange={(e) => setSelectedStartDate(e.target.value)}
        />
      </div>
      <div>
        <h2>End Date</h2>
        <input
          type="date"
          value={selectedEndDate || ""}
          onChange={(e) => setSelectedEndDate(e.target.value)}
        />
      </div>
    </section>
  );
};

export default DateSelector;
