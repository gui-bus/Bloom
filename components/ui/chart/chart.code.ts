export const chartCode = `"use client";

import * as React from "react";
import {
  ResponsiveContainer,
  LineChart as ReLineChart,
  Line,
  BarChart as ReBarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";
import { cn } from "@/lib/utils";

export interface ChartProps {
  type?: "line" | "bar";
  data: Array<Record<string, any>>;
  xKey: string;
  yKey: string;
  height?: number;
  className?: string;
  color?: string;
}

export function Chart({
  type = "line",
  data,
  xKey,
  yKey,
  height = 300,
  className,
  color = "#0284c7",
}: ChartProps) {
  return (
    <div
      className={cn(
        "w-full rounded-2xl border border-zinc-200 dark:border-zinc-800 p-6 bg-white dark:bg-zinc-900 shadow-xs text-zinc-900 dark:text-zinc-100",
        className
      )}
    >
      <ResponsiveContainer width="100%" height={height}>
        {type === "bar" ? (
          <ReBarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" opacity={0.15} stroke="#a1a1aa" />
            <XAxis dataKey={xKey} stroke="#71717a" fontSize={12} tickLine={false} axisLine={false} />
            <YAxis stroke="#71717a" fontSize={12} tickLine={false} axisLine={false} />
            <Tooltip
              contentStyle={{
                backgroundColor: "rgba(24, 24, 27, 0.95)",
                borderColor: "#27272a",
                borderRadius: "0.75rem",
                color: "#f4f4f5",
                fontSize: "12px",
                boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.3)",
              }}
              itemStyle={{ color: "#f4f4f5" }}
            />
            <Bar dataKey={yKey} fill={color} radius={[6, 6, 0, 0]} />
          </ReBarChart>
        ) : (
          <ReLineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" opacity={0.15} stroke="#a1a1aa" />
            <XAxis dataKey={xKey} stroke="#71717a" fontSize={12} tickLine={false} axisLine={false} />
            <YAxis stroke="#71717a" fontSize={12} tickLine={false} axisLine={false} />
            <Tooltip
              contentStyle={{
                backgroundColor: "rgba(24, 24, 27, 0.95)",
                borderColor: "#27272a",
                borderRadius: "0.75rem",
                color: "#f4f4f5",
                fontSize: "12px",
                boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.3)",
              }}
              itemStyle={{ color: "#f4f4f5" }}
            />
            <Line
              type="monotone"
              dataKey={yKey}
              stroke={color}
              strokeWidth={3}
              dot={{ r: 4, fill: color }}
              activeDot={{ r: 6, fill: color }}
            />
          </ReLineChart>
        )}
      </ResponsiveContainer>
    </div>
  );
}
`;
