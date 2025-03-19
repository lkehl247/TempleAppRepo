// @ts-ignore
import React from "react";

const DateSelector: React.FC = () => {
  return (
    <section className="flex flex-col gap-2">
      <h2 className="text-xl text-black">Start Date</h2>
      <time
        dateTime="2025-02-24"
        className="text-lg text-black rounded-md bg-zinc-500 bg-opacity-10 h-[34px] w-[126px] flex items-center justify-center"
      >
        Feb 24, 2025
      </time>
    </section>
  );
};

export default DateSelector;
