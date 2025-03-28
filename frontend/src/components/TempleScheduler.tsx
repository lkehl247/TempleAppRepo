"use client";
import React, { useState, useEffect } from "react";
import TempleSelector from "../components/TempleSelector";
import OrdinanceSelector from "../components/OrdinanceSelector";
import DateSelector from "../components/DateSelector";
import TimeSlotGrid from "../components/TimeSlotGrid";
import Appointment from "../types/AvailableAppointments";
import { useNavigate } from "react-router-dom";

const TempleScheduler: React.FC = () => {
  const [selectedTemple, setSelectedTemple] = useState<string | null>(null);
  const [selectedOrdinance, setSelectedOrdinance] = useState<string | null>(
    null
  );
  const [selectedStartDate, setSelectedStartDate] = useState<string | null>(
    null
  );
  const [selectedEndDate, setSelectedEndDate] = useState<string | null>(null);
  const [availableAppointments, setAvailableAppointments] = useState<
    Appointment[]
  >([]);

  const navigate = useNavigate(); // Use navigate for routing

  const handleSeeAppointments = () => {
    const queryParams = new URLSearchParams({
      templeId: selectedTemple || "", //I think this needs to be templeName
      ordinanceId: selectedOrdinance || "", //I think this needs to be ordinanceName
      startDate: selectedStartDate || "",
      endDate: selectedEndDate || "",
    }).toString();

    fetch(
      `http://localhost:5051/api/Appointment/AvailableAppointments?${queryParams}`
    )
      .then((response) => response.json())
      .then((data) => {
        setAvailableAppointments(data);
      })
      .catch((error) => console.error("Error fetching appointments:", error));
  };

  const handleTimeSlotClick = (appointment: Appointment) => {
    // Navigate to the confirmation page and pass the selected appointment via state
    navigate("/confirmation", { state: { appointment } });
  };
  return (
    <div>
      <div>
        <TempleSelector
          selectedTemple={selectedTemple}
          setSelectedTemple={setSelectedTemple}
        />
        <OrdinanceSelector
          selectedOrdinance={selectedOrdinance}
          setSelectedOrdinance={setSelectedOrdinance}
        />
        <DateSelector
          selectedStartDate={selectedStartDate}
          setSelectedStartDate={setSelectedStartDate}
          selectedEndDate={selectedEndDate}
          setSelectedEndDate={setSelectedEndDate}
        />
        <button onClick={handleSeeAppointments}>
          See Available Appointments
        </button>
        <TimeSlotGrid availableAppointments={availableAppointments} />
      </div>
    </div>
  );
};

export default TempleScheduler;
