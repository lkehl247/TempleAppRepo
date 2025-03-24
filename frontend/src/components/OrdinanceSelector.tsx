// @ts-ignore
import React from "react";

interface Ordinance {
  name: string;
  selected: boolean;
}

const ordinances: Ordinance[] = [
  { name: "Baptism", selected: false },
  { name: "Initiatory", selected: true },
  { name: "Endowment", selected: false },
  { name: "Sealing", selected: false },
];

const OrdinanceSelector: React.FC = () => {
  return (
    <section>
      <h2>Ordinances</h2>
      <div>
        {ordinances.map((ordinance) => (
          <button
            style={{ borderRadius: "8px", margin: "2px" }}
            key={ordinance.name}
            className={`
              ${ordinance.selected ? "selected-item" : "unselected-item"}`}
          >
            {ordinance.name}
          </button>
        ))}
      </div>
    </section>
  );
};

export default OrdinanceSelector;
