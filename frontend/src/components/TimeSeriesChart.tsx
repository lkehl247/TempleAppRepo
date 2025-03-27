import React from "react";

interface MonthData {
  month: string;
  count: number;
  trend: "up" | "down" | "neutral";
}

const data: MonthData[] = [
  { month: "Jan", count: 2, trend: "neutral" },
  { month: "Feb", count: 4, trend: "up" },
  { month: "Mar", count: 3, trend: "down" },
];

const TrendIcon: React.FC<{ trend: "up" | "down" | "neutral" }> = ({
  trend,
}) => {
  switch (trend) {
    case "up":
      return <span style={{ color: "#006400" }}>▲</span>;
    case "down":
      return <span style={{ color: "#8B0000" }}>▼</span>;
    case "neutral":
      return <span style={{ color: "#E4A010" }}>▬</span>;
  }
};

export const TimeSeriesTable: React.FC = () => (
  <article
    className="stat-outline"
    style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      textAlign: "center",
    }}
  >
    <h3>Times Per Month</h3>
    <table style={{ alignContent: "center" }}>
      <thead>
        <tr>
          <th style={{ alignItems: "center" }}>Month</th>
          <th style={{ alignContent: "center" }}>Count</th>
          <th style={{ alignContent: "center" }}>Trend</th>
        </tr>
      </thead>
      <tbody>
        {data.map(({ month, count, trend }) => (
          <tr key={month} className="">
            <td>{month}</td>
            <td>{count}</td>
            <td>
              <TrendIcon trend={trend} />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </article>
);
