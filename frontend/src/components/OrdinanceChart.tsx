// @ts-ignore
import React from "react";

interface OrdinanceBarProps {
  height: string;
  label: string;
  color: string;
}

const OrdinanceBar: React.FC<OrdinanceBarProps> = ({
  height,
  label,
  color,
}) => (
  <div>
    <div className={`w-5 ${height} ${color}`} />
    <div className="mt-1.5 text-xs">{label}</div>
  </div>
);

export const OrdinanceChart: React.FC = () => (
  <section>
    <h3>Appointments by Ordinance</h3>
    <div>
      <div>4</div>
      <div>6</div>
      <div>2</div>
      <div />
      <div>
        <OrdinanceBar height="h-8" label="Baptism" color="bg-slate-500" />
        <OrdinanceBar height="h-8" label="Initiatory" color="bg-teal-800" />
        <OrdinanceBar height="h-4" label="Endowment" color="bg-neutral-400" />
        <OrdinanceBar height="h-8" label="Sealing" color="bg-lime-900" />
      </div>
    </div>
  </section>
);
