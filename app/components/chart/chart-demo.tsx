"use client";

import { Chart } from "@/components/ui/chart/chart";

export function ChartDemo() {
  const data = [
    { month: "Jan", revenue: 4000 },
    { month: "Feb", revenue: 3000 },
    { month: "Mar", revenue: 6000 },
    { month: "Apr", revenue: 8000 },
    { month: "May", revenue: 7000 },
    { month: "Jun", revenue: 9500 },
  ];

  return (
    <div className="w-full space-y-6">
      <Chart
        type="line"
        data={data}
        xKey="month"
        yKey="revenue"
        color="#0284c7"
      />
      <Chart
        type="bar"
        data={data}
        xKey="month"
        yKey="revenue"
        color="#10b981"
      />
    </div>
  );
}
