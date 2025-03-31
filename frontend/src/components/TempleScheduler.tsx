import React, { useState, useEffect } from "react";
import TempleSelector from "../components/TempleSelector";
import OrdinanceSelector from "../components/OrdinanceSelector";
import DateSelector from "../components/DateSelector";
import TimeSelector from "../components/TimeSelector";
import TimeSlotGrid from "../components/TimeSlotGrid";
import Appointment from "../types/Appointment";
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
  const [selectedStartTime, setSelectedStartTime] = useState<string | null>(
    null
  );
  const [selectedEndTime, setSelectedEndTime] = useState<string | null>(null);
  const [availableAppointments, setAvailableAppointments] = useState<
    Appointment[]
  >([]);

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
    console.log(
      `http://localhost:5051/api/Appointment/AllAppointments?${queryParams}`
    );
    fetch(
      `http://localhost:5051/api/Appointment/AllAppointments?${queryParams}`
    )
      .then((response) => response.json())
      .then((data) => {
        setAvailableAppointments(data);
      })
      .catch((error) => console.error("Error fetching appointments:", error));
    console.log(availableAppointments);
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
        <br></br>
        {/* <DateSelector
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
        /> */}
        <div>
          {" "}
          <button onClick={handleSeeAppointments}>
            See Available Appointments
          </button>
        </div>
        <br></br>
        {availableAppointments.length > 0 && (
          <TimeSlotGrid availableAppointments={availableAppointments} />
        )}
      </div>
    </div>
  );
};

export default TempleScheduler;
