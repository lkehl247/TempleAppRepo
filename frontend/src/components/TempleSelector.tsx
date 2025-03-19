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
    <section className="flex flex-col gap-2">
      <h2 className="text-xl text-black">Temples</h2>
      <div className="flex overflow-x-auto gap-3 items-center py-1">
        {temples.map((temple) => (
          <button
            key={temple.name}
            className={`h-10 text-base rounded-xl flex-[shrink] px-4 flex items-center justify-center whitespace-nowrap
              ${
                temple.selected
                  ? "text-white bg-lime-900"
                  : "text-black bg-neutral-400"
              }`}
          >
            {temple.name}
          </button>
        ))}
      </div>
    </section>
  );
};

export default TempleSelector;
