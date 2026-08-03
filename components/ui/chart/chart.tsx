"use client";

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
  Brush,
} from "recharts";
import { Icon } from "@iconify/react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button/button";

export interface ChartProps {
  type?: "line" | "bar";
  data: Array<Record<string, any>>;
  xKey: string;
  yKey: string;
  height?: number;
  className?: string;
  color?: string;
  title?: string;
  valueFormatter?: (value: number) => string;
  enableZoomPan?: boolean;
  enableExport?: boolean;
  onExportSVG?: () => void;
  onExportPNG?: () => void;
}

export function Chart({
  type = "line",
  data,
  xKey,
  yKey,
  height = 300,
  className,
  color = "#0284c7",
  title,
  valueFormatter,
  enableZoomPan = false,
  enableExport = false,
  onExportSVG,
  onExportPNG,
}: ChartProps) {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const [zoomStartIndex, setZoomStartIndex] = React.useState<number>(0);
  const [zoomEndIndex, setZoomEndIndex] = React.useState<number>(
    data.length > 0 ? data.length - 1 : 0,
  );

  React.useEffect(() => {
    if (data.length > 0) {
      setZoomEndIndex(data.length - 1);
    }
  }, [data]);

  const handleExportSVG = React.useCallback(() => {
    if (onExportSVG) {
      onExportSVG();
    } else {
      alert("Exporting SVG chart...");
    }
  }, [onExportSVG]);

  const handleExportPNG = React.useCallback(() => {
    if (onExportPNG) {
      onExportPNG();
    } else {
      alert("Exporting PNG chart...");
    }
  }, [onExportPNG]);

  const formatTooltipValue = (value: any) => {
    if (typeof value === "number" && valueFormatter) {
      return valueFormatter(value);
    }
    return value;
  };

  return (
    <div
      ref={containerRef}
      className={cn(
        "w-full rounded-2xl border border-zinc-200 dark:border-zinc-800 p-6 bg-white dark:bg-zinc-900 shadow-xs text-zinc-900 dark:text-zinc-100 flex flex-col space-y-4",
        className,
      )}
    >
      {(title || enableExport || enableZoomPan) && (
        <div className="flex items-center justify-between pb-2 border-b border-zinc-100 dark:border-zinc-800/80">
          <div>
            {title && (
              <h4 className="font-semibold text-sm text-zinc-900 dark:text-zinc-100">
                {title}
              </h4>
            )}
          </div>
          <div className="flex items-center gap-2">
            {enableZoomPan && (
              <Button
                variant="flat"
                size="xs"
                onClick={() => {
                  setZoomStartIndex(0);
                  setZoomEndIndex(data.length - 1);
                }}
                className="text-xs text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100"
              >
                Reset Zoom
              </Button>
            )}
            {enableExport && (
              <div className="flex items-center gap-2">
                <Button
                  variant="bordered"
                  size="xs"
                  startContent={
                    <Icon icon="hugeicons:download-02" className="size-3.5" />
                  }
                  onClick={handleExportSVG}
                >
                  SVG
                </Button>
                <Button
                  variant="bordered"
                  size="xs"
                  startContent={
                    <Icon icon="hugeicons:image-01" className="size-3.5" />
                  }
                  onClick={handleExportPNG}
                >
                  PNG
                </Button>
              </div>
            )}
          </div>
        </div>
      )}

      <ResponsiveContainer width="100%" height={height}>
        {type === "bar" ? (
          <ReBarChart data={data}>
            <CartesianGrid
              strokeDasharray="3 3"
              opacity={0.15}
              stroke="#a1a1aa"
            />
            <XAxis
              dataKey={xKey}
              stroke="#71717a"
              fontSize={12}
              tickLine={false}
              axisLine={false}
            />
            <YAxis
              stroke="#71717a"
              fontSize={12}
              tickLine={false}
              axisLine={false}
              tickFormatter={(val) =>
                valueFormatter ? valueFormatter(val) : val
              }
            />
            <Tooltip
              formatter={formatTooltipValue}
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
            {enableZoomPan && (
              <Brush
                dataKey={xKey}
                height={26}
                stroke={color}
                fill="rgba(244, 244, 245, 0.05)"
                startIndex={zoomStartIndex}
                endIndex={zoomEndIndex}
                onChange={(range) => {
                  if (range.startIndex !== undefined)
                    setZoomStartIndex(range.startIndex);
                  if (range.endIndex !== undefined)
                    setZoomEndIndex(range.endIndex);
                }}
              />
            )}
          </ReBarChart>
        ) : (
          <ReLineChart data={data}>
            <CartesianGrid
              strokeDasharray="3 3"
              opacity={0.15}
              stroke="#a1a1aa"
            />
            <XAxis
              dataKey={xKey}
              stroke="#71717a"
              fontSize={12}
              tickLine={false}
              axisLine={false}
            />
            <YAxis
              stroke="#71717a"
              fontSize={12}
              tickLine={false}
              axisLine={false}
              tickFormatter={(val) =>
                valueFormatter ? valueFormatter(val) : val
              }
            />
            <Tooltip
              formatter={formatTooltipValue}
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
            {enableZoomPan && (
              <Brush
                dataKey={xKey}
                height={26}
                stroke={color}
                fill="rgba(244, 244, 245, 0.05)"
                startIndex={zoomStartIndex}
                endIndex={zoomEndIndex}
                onChange={(range) => {
                  if (range.startIndex !== undefined)
                    setZoomStartIndex(range.startIndex);
                  if (range.endIndex !== undefined)
                    setZoomEndIndex(range.endIndex);
                }}
              />
            )}
          </ReLineChart>
        )}
      </ResponsiveContainer>
    </div>
  );
}
