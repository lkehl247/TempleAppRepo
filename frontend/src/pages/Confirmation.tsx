import React from "react";
import { ConfirmationCard } from "../components/ConfirmationCard"; // Adjust path if needed

const Confirmation = () => {
  return (
    <div>
      <h1>Confirmation Details</h1>
      <ConfirmationCard
        temple="Salt Lake Temple"
        date="April 10, 2025"
        time="10:00 AM"
        ordinance="Endowment"
        arrivalTime="30 minutes"
      />
    </div>
  );
};

export default Confirmation;
