"use client";
import React, { useState, useEffect } from "react";
import TempleSelector from "../components/TempleSelector";
import OrdinanceSelector from "../components/OrdinanceSelector";
import DateSelector from "../components/DateSelector";
import TimeSelector from "../components/TimeSelector";
import TimeSlotGrid from "../components/TimeSlotGrid";
import Appointment from "../types/Appointment";
import { useNavigate } from "react-router-dom";

const dummyAvailableAppointments: Appointment[] = [
  {
    appointmentId: 1,
    templeId: 101,
    temple: 1,
    ordinanceId: 201,
    ordinance: 1,
    userName: "",
    userAccount: "",
    appointmentTime: new Date("2025-02-24T10:00:00"),
    confirmed: false,
    cancelled: false,
    completed: false,
    notes: "",
  },
  {
    appointmentId: 2,
    templeId: 102,
    temple: 2,
    ordinanceId: 202,
    ordinance: 2,
    userName: "",
    userAccount: "",
    appointmentTime: new Date("2025-02-24T10:00:00"),
    confirmed: false,
    cancelled: false,
    completed: false,
    notes: "",
  },
  {
    appointmentId: 3,
    templeId: 103,
    temple: 3,
    ordinanceId: 203,
    ordinance: 3,
    userName: "",
    userAccount: "",
    appointmentTime: new Date("2025-02-25T10:00:00"),
    confirmed: false,
    cancelled: false,
    completed: false,
    notes: "",
  },
  {
    appointmentId: 4,
    templeId: 104,
    temple: 4,
    ordinanceId: 204,
    ordinance: 4,
    userName: "",
    userAccount: "",
    appointmentTime: new Date("2025-02-25T11:00:00"),
    confirmed: false,
    cancelled: false,
    completed: false,
    notes: "",
  },
  {
    appointmentId: 5,
    templeId: 105,
    temple: 5,
    ordinanceId: 205,
    ordinance: 5,
    userName: "",
    userAccount: "",
    appointmentTime: new Date("2025-02-26T10:00:00"),
    confirmed: false,
    cancelled: false,
    completed: false,
    notes: "",
  },
  {
    appointmentId: 6,
    templeId: 106,
    temple: 6,
    ordinanceId: 206,
    ordinance: 6,
    userName: "",
    userAccount: "",
    appointmentTime: new Date("2025-02-24T12:00:00"),
    confirmed: false,
    cancelled: false,
    completed: false,
    notes: "",
  },
  {
    appointmentId: 7,
    templeId: 107,
    temple: 7,
    ordinanceId: 207,
    ordinance: 7,
    userName: "",
    userAccount: "",
    appointmentTime: new Date("2025-02-24T12:00:00"),
    confirmed: false,
    cancelled: false,
    completed: false,
    notes: "",
  },
  {
    appointmentId: 8,
    templeId: 108,
    temple: 8,
    ordinanceId: 208,
    ordinance: 8,
    userName: "",
    userAccount: "",
    appointmentTime: new Date("2025-02-25T12:00:00"),
    confirmed: false,
    cancelled: false,
    completed: false,
    notes: "",
  },
  {
    appointmentId: 9,
    templeId: 109,
    temple: 9,
    ordinanceId: 209,
    ordinance: 9,
    userName: "",
    userAccount: "",
    appointmentTime: new Date("2025-02-26T12:00:00"),
    confirmed: false,
    cancelled: false,
    completed: false,
    notes: "",
  },
];

const TempleScheduler: React.FC = () => {
  const [selectedTemple, setSelectedTemple] = useState<string | null>(null);
  const [selectedOrdinance, setSelectedOrdinance] = useState<string | null>(
    null
  );
  const [selectedStartDate, setSelectedStartDate] = useState<string | null>(
    null
  );
  const [selectedEndDate, setSelectedEndDate] = useState<string | null>(null);
  const [selectedStartTime, setSelectedStartTime] = useState<string | null>(
    null
  );
  const [selectedEndTime, setSelectedEndTime] = useState<string | null>(null);
  const [availableAppointments, setAvailableAppointments] = useState<
    Appointment[]
  >(dummyAvailableAppointments);

  const navigate = useNavigate(); // Use navigate for routing

  const handleSeeAppointments = () => {
    const queryParams = new URLSearchParams({
      templeId: selectedTemple || "",
      ordinanceId: selectedOrdinance || "",
      startDate: selectedStartDate || "",
      endDate: selectedEndDate || "",
      startTime: selectedStartTime || "",
      endTime: selectedEndTime || "",
    }).toString();

    fetch(`http://localhost:5000/ScheduleAppointments?${queryParams}`)
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
        <TimeSelector
          selectedStartTime={selectedStartTime}
          setSelectedStartTime={setSelectedStartTime}
          selectedEndTime={selectedEndTime}
          setSelectedEndTime={setSelectedEndTime}
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
