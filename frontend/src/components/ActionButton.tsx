// @ts-ignore
import React from "react";

interface ActionButtonProps {
  text: string;
  className?: string;
}

export const ActionButton: React.FC<ActionButtonProps> = ({ text }) => {
  return (
    <button style={{ borderRadius: "8px" }}>
      <span>{text}</span>
    </button>
  );
};
