"use client";

import { Check, Copy } from "lucide-react";
import * as React from "react";
import { designRadius } from "@/lib/design-system";
import { cn } from "@/lib/utils";

export interface TerminalLine {
  text: string;
  type?: "command" | "output" | "success" | "error" | "info";
  prompt?: string;
}

export type TerminalVariant = "default" | "mac" | "powershell" | "cmd" | "ubuntu";

export interface TerminalProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string;
  lines?: TerminalLine[];
  radius?: keyof typeof designRadius;
  showCopy?: boolean;
  variant?: TerminalVariant;
}

const variantStyles: Record<
  TerminalVariant,
  {
    container: string;
    header: string;
    dotsStyle?: "mac" | "cmd" | "powershell" | "ubuntu";
    defaultPrompt: string;
    commandText: string;
    headerTitle: string;
  }
> = {
  default: {
    container: "bg-zinc-950 text-zinc-100 border-zinc-200 dark:border-zinc-800",
    header: "border-b border-zinc-800 bg-zinc-900/50 text-zinc-400",
    dotsStyle: "mac",
    defaultPrompt: "$",
    commandText: "text-zinc-100",
    headerTitle: "Terminal",
  },
  mac: {
    container: "bg-zinc-950 text-zinc-100 border-zinc-800 shadow-2xl",
    header: "border-b border-zinc-800/80 bg-zinc-900/70 text-zinc-400 backdrop-blur-xs",
    dotsStyle: "mac",
    defaultPrompt: "user@macbook ~ %",
    commandText: "text-zinc-100 font-medium",
    headerTitle: "zsh — 80x24",
  },
  powershell: {
    container: "bg-[#012456] text-white border-blue-900/50 shadow-md",
    header: "border-b border-blue-900/40 bg-[#00193e] text-blue-200",
    dotsStyle: "powershell",
    defaultPrompt: "PS C:\\Users\\Bloom>",
    commandText: "text-yellow-300 font-semibold",
    headerTitle: "Windows PowerShell",
  },
  cmd: {
    container: "bg-black text-zinc-200 border-zinc-800 shadow-md",
    header: "border-b border-zinc-800 bg-zinc-900 text-zinc-300",
    dotsStyle: "cmd",
    defaultPrompt: "C:\\Users\\Bloom>",
    commandText: "text-white",
    headerTitle: "Command Prompt",
  },
  ubuntu: {
    container: "bg-[#300a24] text-zinc-100 border-purple-950/60 shadow-lg",
    header: "border-b border-purple-950/40 bg-[#24071b] text-purple-200",
    dotsStyle: "ubuntu",
    defaultPrompt: "bloom@ubuntu:~$",
    commandText: "text-white font-medium",
    headerTitle: "bloom@ubuntu: ~",
  },
};

export const Terminal = React.forwardRef<HTMLDivElement, TerminalProps>(
  (
    {
      title,
      lines = [],
      radius = "xl",
      showCopy = true,
      variant = "default",
      className,
      children,
      ...props
    },
    ref,
  ) => {
    const [copied, setCopied] = React.useState(false);
    const style = variantStyles[variant] || variantStyles.default;
    const displayTitle = title || style.headerTitle;

    const fullCommandText = React.useMemo(() => {
      return lines
        .filter((l) => l.type === "command")
        .map((l) => l.text)
        .join("\n");
    }, [lines]);

    const handleCopy = async () => {
      if (!fullCommandText) return;
      try {
        await navigator.clipboard.writeText(fullCommandText);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      } catch (err) {
        console.error("Failed to copy command", err);
      }
    };

    return (
      <div
        ref={ref}
        className={cn(
          "w-full border overflow-hidden font-mono text-xs shadow-xs",
          style.container,
          designRadius[radius],
          className,
        )}
        {...props}
      >
        {/* Header Bar */}
        <div
          className={cn(
            "flex items-center justify-between px-4 py-2.5 select-none",
            style.header,
          )}
        >
          <div className="flex items-center gap-2">
            {style.dotsStyle === "mac" && (
              <div className="flex items-center gap-1.5">
                <span className="size-3 rounded-full bg-[#ff5f56] border border-[#e0443e]/50" />
                <span className="size-3 rounded-full bg-[#ffbd2e] border border-[#dea123]/50" />
                <span className="size-3 rounded-full bg-[#27c93f] border border-[#1aab29]/50" />
              </div>
            )}
            {style.dotsStyle === "cmd" && (
              <div className="flex items-center gap-1">
                <span className="text-[10px] bg-zinc-800 px-1 py-0.5 rounded text-zinc-400 font-sans">
                  c:\
                </span>
              </div>
            )}
            {style.dotsStyle === "powershell" && (
              <div className="flex items-center gap-1">
                <span className="text-[10px] bg-blue-900/60 text-blue-200 px-1.5 py-0.5 rounded font-sans font-semibold">
                  PS
                </span>
              </div>
            )}
            {style.dotsStyle === "ubuntu" && (
              <div className="flex items-center gap-1.5">
                <span className="size-2.5 rounded-full bg-amber-600" />
                <span className="size-2.5 rounded-full bg-zinc-600" />
                <span className="size-2.5 rounded-full bg-orange-600" />
              </div>
            )}
            <span className="ml-2 text-xs font-sans font-medium opacity-90">
              {displayTitle}
            </span>
          </div>

          {showCopy && fullCommandText && (
            <button
              type="button"
              onClick={handleCopy}
              className="p-1 rounded-md opacity-70 hover:opacity-100 hover:bg-white/10 transition-all"
              title="Copy commands"
            >
              {copied ? (
                <Check className="size-3.5 text-emerald-400" />
              ) : (
                <Copy className="size-3.5" />
              )}
            </button>
          )}
        </div>

        {/* Content Body */}
        <div className="p-4 space-y-2 overflow-x-auto">
          {lines.map((line, index) => {
            const key = `${line.text}-${index}`;
            const promptText = line.prompt || style.defaultPrompt;

            if (line.type === "command") {
              return (
                <div key={key} className="flex items-start gap-2">
                  <span className="opacity-60 shrink-0 font-medium">
                    {promptText}
                  </span>
                  <span className={style.commandText}>{line.text}</span>
                </div>
              );
            }
            if (line.type === "success") {
              return (
                <div key={key} className="opacity-90">
                  <span className="text-emerald-400 mr-2 font-bold">✔</span>
                  {line.text}
                </div>
              );
            }
            if (line.type === "error") {
              return (
                <div key={key} className="text-rose-400">
                  <span className="mr-2 font-bold">✖</span>
                  {line.text}
                </div>
              );
            }
            if (line.type === "info") {
              return (
                <div key={key} className="opacity-70 italic">
                  {line.text}
                </div>
              );
            }
            return (
              <div key={key} className="opacity-75">
                {line.text}
              </div>
            );
          })}
          {children}
        </div>
      </div>
    );
  },
);

Terminal.displayName = "Terminal";
