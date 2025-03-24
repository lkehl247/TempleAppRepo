import React, { useState, useEffect } from "react";

interface Temple {
  templeId: number;
  templeName: string;
}

interface TempleSelectorProps {
  selectedTemple: number | null;
  setSelectedTemple: (templeId: number | null) => void;
}

const dummyTemples: Temple[] = [
  { templeId: 1, templeName: "Orem" },
  { templeId: 2, templeName: "Provo" },
  { templeId: 3, templeName: "Provo City" },
  { templeId: 4, templeName: "Payson" },
  { templeId: 5, templeName: "Timpanogos" },
];

const TempleSelector: React.FC<TempleSelectorProps> = ({
  selectedTemple,
  setSelectedTemple,
}) => {
  const [temples, setTemples] = useState<Temple[]>(dummyTemples);

  useEffect(() => {
    fetch("http://localhost:5000/getTemples")
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
            className={
              temple.templeId === selectedTemple
                ? "selected-item"
                : "unselected-item"
            }
            onClick={() => setSelectedTemple(temple.templeId)}
          >
            {temple.templeName}
          </button>
        ))}
      </div>
    </section>
  );
};

export default TempleSelector;
