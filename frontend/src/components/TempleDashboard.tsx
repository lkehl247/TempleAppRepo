"use client";
// @ts-ignore
import React from "react";
import { StatCard } from "./StatCard";
import { TimeSeriesTable } from "./TimeSeriesChart";
import { OrdinanceChart } from "./OrdinanceChart";

export const TempleDashboard: React.FC = () => {
  return (
    <main>
      <div>
        <section>
          <h1>My Temple Stats</h1>
          <div className="stat-box-container">
            <StatCard value="5" label="Total Appointments" />
            <StatCard value="3" label="People Added to Appointments" />
            <TimeSeriesTable />
            <StatCard value="2" label="Unique Temples" />
          </div>
          <OrdinanceChart />
        </section>
      </div>
    </main>
  );
};

export default TempleDashboard;
