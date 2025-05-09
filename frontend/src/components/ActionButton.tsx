import React from "react";

interface ActionButtonProps {
  text: string;
  onClick?: () => void;
}

export const ActionButton: React.FC<ActionButtonProps> = ({
  text,
  onClick,
}) => {
  return (
    <button onClick={onClick} style={{ margin: "8px" }}>
      {text}
    </button>
  );
};
