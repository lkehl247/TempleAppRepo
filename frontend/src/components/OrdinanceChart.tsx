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
  <section className="p-5 mt-7 rounded-xl border ">
    <h3 className="mb-5 text-base font-bold text-center">
      Appointments by Ordinance
    </h3>
    <div className="relative h-[131px]">
      <table className="table">
        <thead>
          <tr>
            <th>Ordinance</th>
            <th>Count</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <OrdinanceBar height="h-8" label="Baptism" color="bg-slate-500" />
            </td>
            <td>
              <div className="absolute left-0 text-xs top-[38px]">4</div>
            </td>
          </tr>
          <tr>
            <td>
              <OrdinanceBar
                height="h-8"
                label="Initiatory"
                color="bg-teal-800"
              />
            </td>
            <td>
              <div className="absolute left-px top-1.5 text-xs">6</div>
            </td>
          </tr>
          <tr>
            <td>
              <OrdinanceBar
                height="h-4"
                label="Endowment"
                color="bg-neutral-400"
              />
            </td>
            <td>
              <div className="absolute left-px text-xs top-[72px]">2</div>
            </td>
          </tr>
          <tr>
            <td>
              <OrdinanceBar height="h-8" label="Sealing" color="bg-lime-900" />
            </td>
            <td>
              <div className="absolute left-px text-xs top-[72px]">2</div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>
);
