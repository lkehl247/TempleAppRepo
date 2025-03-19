// @ts-ignore
import React from "react";

interface StatCardProps {
  value: string | number;
  label: string;
}

export const StatCard: React.FC<StatCardProps> = ({ value, label }) => (
  <article className="flex flex-col justify-center items-center p-5 h-40 rounded-xl border border-black">
    <p className="mb-1 text-4xl font-bold">{value}</p>
    <h3 className="text-base font-bold text-center">{label}</h3>
  </article>
);
