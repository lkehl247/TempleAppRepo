import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Appointment from "../types/Appointment";

const ConfirmationPage: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { id, time, date } = location.state as {
    id: number;
    time: string;
    date: string;
  };

  // Retrieve the passed appointment data
  const { appointment }: { appointment: Appointment } = location.state || {};

  const handleConfirm = () => {
    // Implement the logic to confirm the appointment
    console.log("Confirmed appointment:", appointment);
    // Redirect to another page (e.g., appointment success page or scheduler)
    navigate("/scheduler");
  };

  const handleGoBack = () => {
    navigate("/scheduler"); // Go back to the scheduler page
  };

  return (
    <div>
      <h2>Confirm Appointment</h2>
      {appointment ? (
        <div>
          <p>Appointment ID: {id}</p>
          <p>Time: {time}</p>
          <p>Date: {date}</p>
          <button onClick={() => window.history.back()}>Go Back</button>
          <button>Confirm Appointment</button>
        </div>
      ) : (
        <p>No appointment selected</p>
      )}
    </div>
  );
};

export default ConfirmationPage;
