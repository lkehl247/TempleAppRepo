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
      return <span className="text-green-600">▲</span>;
    case "down":
      return <span className="text-red-600">▼</span>;
    case "neutral":
      return <span className="text-yellow-600">▬</span>;
  }
};

export const TimeSeriesTable: React.FC = () => (
  <article className="p-5 rounded-xl border">
    <h3 className="mb-2 text-base font-bold text-center">Times Per Month</h3>
    <table className="table">
      <thead>
        <tr className="bg-gray-100">
          <th className="p-2 ">Month</th>
          <th className="p-2 ">Count</th>
          <th className="p-2 ">Trend</th>
        </tr>
      </thead>
      <tbody>
        {data.map(({ month, count, trend }) => (
          <tr key={month} className="">
            <td className="p-2 ">{month}</td>
            <td className="p-2 ">{count}</td>
            <td className="p-2 ">
              <TrendIcon trend={trend} />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </article>
);
