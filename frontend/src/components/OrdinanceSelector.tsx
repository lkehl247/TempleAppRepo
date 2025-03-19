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
    <section className="flex flex-col gap-2">
      <h2 className="text-xl text-black">Ordinances</h2>
      <div className="flex overflow-x-auto gap-3.5 items-center py-1">
        {ordinances.map((ordinance) => (
          <button
            key={ordinance.name}
            className={`h-10 text-base rounded-xl flex-[shrink] px-4 flex items-center justify-center whitespace-nowrap
              ${
                ordinance.selected
                  ? "text-white bg-lime-900"
                  : "text-black bg-neutral-400"
              }`}
          >
            {ordinance.name}
          </button>
        ))}
      </div>
    </section>
  );
};

export default OrdinanceSelector;
