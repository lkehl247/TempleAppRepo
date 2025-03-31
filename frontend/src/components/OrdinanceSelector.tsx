import React, { useState, useEffect } from "react";

interface Ordinance {
  ordinanceId: string;
  ordinanceName: string;
}

const dummyOrdinances: Ordinance[] = [
  { ordinanceId: "1", ordinanceName: "Baptism" },
  { ordinanceId: "2", ordinanceName: "Initiatory" },
  { ordinanceId: "3", ordinanceName: "Endowment" },
  { ordinanceId: "4", ordinanceName: "Sealing" },
];

interface OrdinanceSelectorProps {
  selectedOrdinance: string;
  setSelectedOrdinance: (ordinanceId: string) => void;
}

const OrdinanceSelector: React.FC<OrdinanceSelectorProps> = ({
  selectedOrdinance,
  setSelectedOrdinance,
}) => {
  const [ordinances, setOrdinances] = useState<Ordinance[]>([]);

  const handleSelect = (selectedOrdinanceId: string) => {
    if (selectedOrdinanceId === selectedOrdinance) {
      setSelectedOrdinance(""); // Deselect if the same ordinance is clicked again
    } else {
      setSelectedOrdinance(selectedOrdinanceId);
    }
  };

  useEffect(() => {
    fetch("http://localhost:5051/api/Appointment/GetOrdinances")
      .then((response) => response.json())
      .then((data) => setOrdinances(data))
      .catch((error) => console.error("Error fetching ordinances:", error));
  }, []);

  return (
    <section>
      <h2>Ordinances</h2>
      <div>
        {ordinances.map((ordinance) => (
          <button
            style={{ margin: "8px" }}
            key={ordinance.ordinanceId}
            id={ordinance.ordinanceId}
            className={
              ordinance.ordinanceId === selectedOrdinance
                ? "selected-item"
                : "unselected-item"
            }
            onClick={() => handleSelect(ordinance.ordinanceId)}
          >
            {ordinance.ordinanceName}
          </button>
        ))}
      </div>
    </section>
  );
};

export default OrdinanceSelector;
