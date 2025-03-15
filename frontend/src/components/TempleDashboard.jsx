"use client";
import { StatusBar } from "./StatusBar";
import { StatCard } from "./StatCard";
import { TimeSeriesChart } from "./TimeSeriesChart";
import { OrdinanceChart } from "./OrdinanceChart";
import { NavigationBar } from "./NavigationBar";

export const TempleDashboard = () => {
  return (
    <main className="flex flex-col bg-white min-h-[screen]">
      <div className="flex-1">
        <StatusBar />

        <section className="px-7 mt-6">
          <h1 className="mb-9 text-3xl font-bold text-black">
            My Temple Dashboard
          </h1>

          <div className="grid grid-cols-2 gap-7 max-sm:grid-cols-1">
            <StatCard value="5" label="Total Appointments" />
            <StatCard value="3" label="People Added to Appointments" />
            <TimeSeriesChart />
            <StatCard value="2" label="Unique Temples" />
          </div>

          <OrdinanceChart />
        </section>
      </div>

      <NavigationBar />
    </main>
  );
};

export default TempleDashboard;
