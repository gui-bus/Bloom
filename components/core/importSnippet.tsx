"use client";

import * as React from "react";
import { Icon } from "@iconify/react";
import { toast } from "@/components/ui/toast/toast";

interface ImportSnippetProps {
  importCode: string;
}

export function ImportSnippet({ importCode }: ImportSnippetProps) {
  const [copied, setCopied] = React.useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(importCode);
    setCopied(true);
    toast.success("Import statement copied!", { description: importCode });
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-3.5 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 shadow-xs">
      <div className="flex items-center gap-2.5 font-mono text-xs overflow-x-auto max-w-full">
        <span className="text-xs font-bold uppercase tracking-wider text-sky-500 bg-sky-500/10 px-2 py-0.5 rounded-md select-none shrink-0">
          Import
        </span>
        <code className="text-zinc-900 dark:text-zinc-100 font-semibold">{importCode}</code>
      </div>
      <button
        onClick={handleCopy}
        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-100 dark:bg-zinc-800/60 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-200 dark:hover:bg-zinc-700 text-xs font-semibold transition-all duration-200 shrink-0 cursor-pointer select-none"
      >
        <Icon
          icon={copied ? "hugeicons:checkmark-circle-02" : "hugeicons:copy-01"}
          className={`size-3.5 ${copied ? "text-emerald-500" : ""}`}
        />
        <span>{copied ? "Copied" : "Copy"}</span>
      </button>
    </div>
  );
}
