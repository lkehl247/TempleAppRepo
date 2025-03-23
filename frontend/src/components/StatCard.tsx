// @ts-ignore
import React from "react";

interface StatCardProps {
  value: string | number;
  label: string;
}

export const StatCard: React.FC<StatCardProps> = ({ value, label }) => (
  <div className="stat-box">
    <p>{value}</p>
    <h3>{label}</h3>
  </div>
);
