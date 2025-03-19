"use client";
// @ts-ignore
import React from "react";
import TempleSelector from "../components/TempleSelector";
import OrdinanceSelector from "../components/OrdinanceSelector";
import DateSelector from "../components/DateSelector";
import TimeSlotGrid from "../components/TimeSlotGrid";

const TempleScheduler: React.FC = () => {
  return (
    <div className="flex flex-col bg-white min-h-[screen]">
      <div className="flex flex-col gap-6 p-4">
        <TempleSelector />
        <OrdinanceSelector />
        <DateSelector />
        <TimeSlotGrid />
      </div>
    </div>
  );
};

export default TempleScheduler;
