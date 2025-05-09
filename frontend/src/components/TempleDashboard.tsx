"use client";
// @ts-ignore
import React from "react";
import { StatCard } from "./StatCard";
import { TimeSeriesTable } from "./TimeSeriesChart";
import { OrdinanceChart } from "./OrdinanceChart";

export const TempleDashboard: React.FC = () => {
  return (
    <main className="flex flex-col bg-white min-h-[screen]">
      <div className="flex-1">
        <section className="px-7 mt-6">
          <h1 className="mb-9 text-3xl font-bold text-black">
            My Temple Stats
          </h1>
          <div
            className="stat-box-container"
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "20px",
              alignItems: "center",
            }}
          >
            <StatCard value="5" label="Total Appointments" />
            <StatCard value="3" label="People Added to Appointments" />
            <TimeSeriesTable />
            <StatCard value="2" label="Unique Temples" />
            <OrdinanceChart />
          </div>
        </section>
      </div>
    </main>
  );
};

export default TempleDashboard;
