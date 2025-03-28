import React, { useState, useEffect } from "react";

interface Temple {
  templeId: string;
  templeName: string;
}

interface TempleSelectorProps {
  selectedTemple: string;
  setSelectedTemple: (templeId: string) => void;
}

const TempleSelector: React.FC<TempleSelectorProps> = ({
  selectedTemple,
  setSelectedTemple,
}) => {
  const [temples, setTemples] = useState<Temple[]>([]);

  const handleSelect = (selectedTempleId: string) => {
    if (selectedTempleId === selectedTemple) {
      setSelectedTemple(""); // Deselect if the same temple is clicked again
    } else {
      setSelectedTemple(selectedTempleId);
    }
  };

  useEffect(() => {
    fetch("http://localhost:5051/api/Appointment/GetTemples")
      .then((response) => response.json())
      .then((data) => setTemples(data))
      .catch((error) => console.error("Error fetching temples:", error));
  }, []);

  return (
    <section>
      <h2>Temples</h2>
      <div>
        {temples.map((temple) => (
          <button
            key={temple.templeId}
            id={temple.templeId}
            className={
              temple.templeId === selectedTemple
                ? "selected-item"
                : "unselected-item"
            }
            onClick={() => handleSelect(temple.templeId)}
          >
            {temple.templeName}
          </button>
        ))}
      </div>
    </section>
  );
};

export default TempleSelector;
