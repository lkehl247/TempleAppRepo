// @ts-ignore
import React from "react";

interface ActionButtonProps {
  text: string;
  className?: string;
}

export const ActionButton: React.FC<ActionButtonProps> = ({ text, className }) => {
  return (
    <button className={`w-full h-[94px] ${className || ''}`}>
      <span className="text-2xl md:text-4xl font-bold text-center text-white">
        {text}
      </span>
    </button>
  );
};
