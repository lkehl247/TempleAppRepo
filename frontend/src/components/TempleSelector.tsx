// @ts-ignore
import React from "react";

interface Temple {
  name: string;
  selected: boolean;
}

const temples: Temple[] = [
  { name: "Orem", selected: true },
  { name: "Provo", selected: false },
  { name: "Provo City", selected: false },
  { name: "Payson", selected: false },
  { name: "Timpanogos", selected: false },
];

const TempleSelector: React.FC = () => {
  return (
    <section>
      <h2>Temples</h2>
      <div>
        {temples.map((temple) => (
          <button
            style={{ borderRadius: "8px", margin: "2px" }}
            key={temple.name}
            className={` 
              ${temple.selected ? "selected-item" : "unselected-item"}`}
          >
            {temple.name}
          </button>
        ))}
      </div>
    </section>
  );
};

export default TempleSelector;
