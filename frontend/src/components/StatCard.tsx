// @ts-ignore
import React from "react";

interface StatCardProps {
  value: string | number;
  label: string;
}

export const StatCard: React.FC<StatCardProps> = ({ value, label }) => (
  <article className="flex flex-col justify-center items-center p-5 h-40 rounded-xl border">
    <h3 className="text-base font-bold text-center">{label}:</h3>
    <br />
    <h3 className="mb-1 text-xl4 font-bold text-black text-center">{value}</h3>
  </article>
);
