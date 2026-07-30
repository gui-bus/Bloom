"use client";

import * as React from "react";
import { Icon } from "@iconify/react";
import { toast } from "@/components/ui/toast/toast";

export function InstallationBlock({ componentName }: { componentName: string }) {
  const [copied, setCopied] = React.useState(false);
  const command = `npx @bloomui-react/cli add ${componentName}`;

  const handleCopy = () => {
    navigator.clipboard.writeText(command);
    setCopied(true);
    toast.success("Command copied to clipboard!", {
      description: command,
    });
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 p-4 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 shadow-xs">
      <div className="flex items-center gap-3 font-mono text-xs text-zinc-900 dark:text-zinc-100 overflow-x-auto max-w-full">
        <Icon icon="hugeicons:terminal" className="size-4 text-sky-500 shrink-0" />
        <span className="text-zinc-400 select-none">$</span>
        <code className="font-bold">{command}</code>
      </div>
      <button
        onClick={handleCopy}
        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-100 dark:bg-zinc-800/60 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-200 dark:hover:bg-zinc-700 text-xs font-semibold transition-all duration-200 shrink-0 cursor-pointer"
      >
        <Icon
          icon={copied ? "hugeicons:checkmark-circle-02" : "hugeicons:copy-01"}
          className={`size-3.5 ${copied ? "text-emerald-500" : ""}`}
        />
        <span>{copied ? "Copied!" : "Copy"}</span>
      </button>
    </div>
  );
}
