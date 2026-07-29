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
  color = "#3b82f6",
}: ChartProps) {
  return (
    <div className={cn("w-full rounded-2xl border border-border p-4 bg-background shadow-xs", className)}>
      <ResponsiveContainer width="100%" height={height}>
        {type === "bar" ? (
          <ReBarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" opacity={0.2} />
            <XAxis dataKey={xKey} stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
            <YAxis stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
            <Tooltip
              contentStyle={{
                backgroundColor: "var(--background)",
                borderColor: "var(--border)",
                borderRadius: "0.75rem",
                fontSize: "12px",
              }}
            />
            <Bar dataKey={yKey} fill={color} radius={[6, 6, 0, 0]} />
          </ReBarChart>
        ) : (
          <ReLineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" opacity={0.2} />
            <XAxis dataKey={xKey} stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
            <YAxis stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
            <Tooltip
              contentStyle={{
                backgroundColor: "var(--background)",
                borderColor: "var(--border)",
                borderRadius: "0.75rem",
                fontSize: "12px",
              }}
            />
            <Line type="monotone" dataKey={yKey} stroke={color} strokeWidth={2.5} dot={{ r: 4 }} />
          </ReLineChart>
        )}
      </ResponsiveContainer>
    </div>
  );
}`;
