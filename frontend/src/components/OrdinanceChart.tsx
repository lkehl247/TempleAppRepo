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
    <div>{label}</div>
  </div>
);

export const OrdinanceChart: React.FC = () => (
  <section
    className="stat-outline"
    style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      textAlign: "center",
    }}
  >
    <h3>Appointments by Ordinance</h3>
    <div>
      <table>
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
              <div>4</div>
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
              <div>6</div>
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
              <div>2</div>
            </td>
          </tr>
          <tr>
            <td>
              <OrdinanceBar height="h-8" label="Sealing" color="bg-lime-900" />
            </td>
            <td>
              <div>2</div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>
);
