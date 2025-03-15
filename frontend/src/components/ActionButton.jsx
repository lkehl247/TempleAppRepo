import React from "react";

export const ActionButton = ({ text, className }) => {
  return (
    <button className={`w-full h-[94px] ${className}`}>
      <span className="text-2xl md:text-4xl font-bold text-center text-white">
        {text}
      </span>
    </button>
  );
};
