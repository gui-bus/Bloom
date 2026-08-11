"use client";

import * as React from "react";
import { designRadius } from "@/lib/design-system";
import { cn } from "@/lib/utils";

export interface DiffViewerProps {
  className?: string;
  oldValue: string;
  newValue: string;
  splitView?: boolean;
  variant?: "default" | "bordered" | "flat";
  radius?: keyof typeof designRadius;
}

interface DiffLine {
  type: "added" | "removed" | "unchanged";
  content: string;
  oldLineNumber?: number;
  newLineNumber?: number;
}

function computeLineDiff(oldStr: string, newStr: string): DiffLine[] {
  const oldLines = oldStr.split(/\r?\n/);
  const newLines = newStr.split(/\r?\n/);

  const m = oldLines.length;
  const n = newLines.length;

  const dp: number[][] = Array(m + 1)
    .fill(null)
    .map(() => Array(n + 1).fill(0));

  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (oldLines[i - 1] === newLines[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + 1;
      } else {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
      }
    }
  }

  const diff: DiffLine[] = [];
  let i = m;
  let j = n;

  while (i > 0 || j > 0) {
    if (i > 0 && j > 0 && oldLines[i - 1] === newLines[j - 1]) {
      diff.unshift({
        type: "unchanged",
        content: oldLines[i - 1],
        oldLineNumber: i,
        newLineNumber: j,
      });
      i--;
      j--;
    } else if (j > 0 && (i === 0 || dp[i][j - 1] >= dp[i - 1][j])) {
      diff.unshift({
        type: "added",
        content: newLines[j - 1],
        newLineNumber: j,
      });
      j--;
    } else {
      diff.unshift({
        type: "removed",
        content: oldLines[i - 1],
        oldLineNumber: i,
      });
      i--;
    }
  }

  return diff;
}

export const DiffViewer: React.FC<DiffViewerProps> = ({
  className,
  oldValue,
  newValue,
  splitView = false,
  variant = "default",
  radius = "md",
}) => {
  const diffLines = React.useMemo(
    () => computeLineDiff(oldValue, newValue),
    [oldValue, newValue],
  );

  if (splitView) {
    const leftSide = diffLines.filter((l) => l.type !== "added");
    const rightSide = diffLines.filter((l) => l.type !== "removed");

    const _maxLines = Math.max(leftSide.length, rightSide.length);
    const splitRows: { left?: DiffLine; right?: DiffLine }[] = [];

    let lIdx = 0;
    let rIdx = 0;

    while (lIdx < leftSide.length || rIdx < rightSide.length) {
      const left = leftSide[lIdx];
      const right = rightSide[rIdx];

      if (left && right && left.type === "removed" && right.type === "added") {
        splitRows.push({ left, right });
        lIdx++;
        rIdx++;
      } else if (left && left.type === "removed") {
        splitRows.push({ left });
        lIdx++;
      } else if (right && right.type === "added") {
        splitRows.push({ right });
        rIdx++;
      } else {
        splitRows.push({ left, right });
        lIdx++;
        rIdx++;
      }
    }

    return (
      <div
        className={cn(
          "w-full overflow-x-auto border font-mono text-xs select-text",
          designRadius[radius],
          variant === "default" &&
            "bg-white dark:bg-zinc-900 border-zinc-200 dark:border-zinc-800 shadow-xs",
          variant === "bordered" &&
            "bg-transparent border-2 border-zinc-200 dark:border-zinc-800",
          variant === "flat" &&
            "bg-zinc-50 dark:bg-zinc-850/60 border-transparent",
          className,
        )}
      >
        <div className="grid grid-cols-2 divide-x divide-zinc-200 dark:divide-zinc-800 min-w-[700px]">
          <div className="px-4 py-2 bg-zinc-50 dark:bg-zinc-900/50 border-b border-zinc-200 dark:border-zinc-800 text-zinc-500 font-medium">
            Original
          </div>
          <div className="px-4 py-2 bg-zinc-50 dark:bg-zinc-900/50 border-b border-zinc-200 dark:border-zinc-800 text-zinc-500 font-medium">
            Modified
          </div>

          <div className="flex flex-col">
            {splitRows.map((row, idx) => {
              const line = row.left;
              return (
                <div
                  key={`left-${idx}`}
                  className={cn(
                    "flex items-center min-h-[20px] pr-2 transition-colors",
                    line?.type === "removed"
                      ? "bg-red-500/10 text-red-600 dark:text-red-400"
                      : "bg-transparent text-zinc-600 dark:text-zinc-400",
                  )}
                >
                  <span className="w-10 select-none text-right pr-2.5 text-zinc-400 dark:text-zinc-600 border-r border-zinc-200 dark:border-zinc-800 mr-2 py-0.5">
                    {line?.oldLineNumber || ""}
                  </span>
                  <span className="w-4 select-none text-center mr-1">
                    {line?.type === "removed" ? "-" : ""}
                  </span>
                  <span className="whitespace-pre truncate py-0.5">
                    {line?.content || ""}
                  </span>
                </div>
              );
            })}
          </div>

          <div className="flex flex-col">
            {splitRows.map((row, idx) => {
              const line = row.right;
              return (
                <div
                  key={`right-${idx}`}
                  className={cn(
                    "flex items-center min-h-[20px] pr-2 transition-colors",
                    line?.type === "added"
                      ? "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400"
                      : "bg-transparent text-zinc-600 dark:text-zinc-400",
                  )}
                >
                  <span className="w-10 select-none text-right pr-2.5 text-zinc-400 dark:text-zinc-600 border-r border-zinc-200 dark:border-zinc-800 mr-2 py-0.5">
                    {line?.newLineNumber || ""}
                  </span>
                  <span className="w-4 select-none text-center mr-1">
                    {line?.type === "added" ? "+" : ""}
                  </span>
                  <span className="whitespace-pre truncate py-0.5">
                    {line?.content || ""}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      className={cn(
        "w-full overflow-x-auto border font-mono text-xs select-text flex flex-col divide-y divide-zinc-100 dark:divide-zinc-900/50",
        designRadius[radius],
        variant === "default" &&
          "bg-white dark:bg-zinc-900 border-zinc-200 dark:border-zinc-800 shadow-xs",
        variant === "bordered" &&
          "bg-transparent border-2 border-zinc-200 dark:border-zinc-800",
        variant === "flat" &&
          "bg-zinc-50 dark:bg-zinc-850/60 border-transparent",
        className,
      )}
    >
      {diffLines.map((line, idx) => (
        <div
          key={idx}
          className={cn(
            "flex items-center min-h-[22px] pr-4 transition-colors",
            line.type === "added" &&
              "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400",
            line.type === "removed" &&
              "bg-red-500/10 text-red-600 dark:text-red-400",
            line.type === "unchanged" && "text-zinc-600 dark:text-zinc-400",
          )}
        >
          <div className="flex select-none w-20 text-zinc-400 dark:text-zinc-600 text-right mr-3 py-0.5 border-r border-zinc-200 dark:border-zinc-800 pr-2">
            <span className="w-1/2">{line.oldLineNumber || ""}</span>
            <span className="w-1/2 ml-1">{line.newLineNumber || ""}</span>
          </div>

          <span className="w-4 select-none text-center mr-1 text-xs">
            {line.type === "added" && "+"}
            {line.type === "removed" && "-"}
          </span>

          <span className="whitespace-pre py-0.5">{line.content}</span>
        </div>
      ))}
    </div>
  );
};

DiffViewer.displayName = "DiffViewer";
