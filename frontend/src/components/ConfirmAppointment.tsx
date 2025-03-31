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
  const appointment: Appointment | null = location.state;

  const handleConfirm = () => {
    // Implement the logic to confirm the appointment
    console.log("Confirmed appointment:", appointment);
    // FIXME. we need to create a backend route to handle assigning an appointment to a user.
    navigate("/");
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h2 className="selected-item">Confirm Appointment</h2>
      {appointment ? (
        <div
          style={{
            border: "1px solid #ccc",
            borderRadius: "8px",
            padding: "20px",
            maxWidth: "400px",
            margin: "20px auto",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          }}
        >
          <p style={{ margin: "10px 0", fontSize: "16px" }}>
            <strong>Appointment ID:</strong> {id}
          </p>
          <p style={{ margin: "10px 0", fontSize: "16px" }}>
            <strong>Time:</strong> {time}
          </p>
          <p style={{ margin: "10px 0", fontSize: "16px" }}>
            <strong>Date:</strong> {date}
          </p>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginTop: "20px",
            }}
          >
            <button
              onClick={() => window.history.back()}
              style={{
                padding: "10px 20px",
                backgroundColor: "white",
                color: "black",
                border: "1px solid black",
                borderRadius: "4px",
                cursor: "pointer",
              }}
            >
              Go Back
            </button>
            <button onClick={handleConfirm} className="selected-item">
              Confirm Appointment
            </button>
          </div>
        </div>
      ) : (
        <p style={{ textAlign: "center", color: "#999" }}>
          No appointment selected
        </p>
      )}
    </div>
  );
};

export default ConfirmationPage;
