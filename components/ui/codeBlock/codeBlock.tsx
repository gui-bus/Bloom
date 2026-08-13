"use client";

import hljs from "highlight.js";
import * as React from "react";
import { Button } from "@/components/ui/button/button";
import { designRadius } from "@/lib/design-system";
import { cn } from "@/lib/utils";

export type CodeBlockVariant =
  | "default"
  | "mac"
  | "powershell"
  | "cmd"
  | "ubuntu";

export interface CodeBlockProps extends React.HTMLAttributes<HTMLDivElement> {
  code: string;
  variant?: CodeBlockVariant;
  language?: string;
  filename?: string;
  radius?: keyof typeof designRadius;
  showCopy?: boolean;
  maxHeight?: number;
  className?: string;
}

const variantStyles: Record<
  CodeBlockVariant,
  {
    container: string;
    header: string;
    title: string;
    headerControls?: React.ReactNode;
  }
> = {
  default: {
    container: "bg-[#282C34] text-zinc-100 border border-zinc-800",
    header: "bg-white/5 border-b border-white/10",
    title: "text-zinc-200 font-mono text-xs font-semibold",
  },
  mac: {
    container: "bg-[#1e1e1e] text-zinc-100 border border-zinc-800 shadow-xl",
    header: "bg-[#252526] border-b border-zinc-800",
    title: "text-zinc-300 font-mono text-xs font-semibold",
    headerControls: (
      <div className="flex items-center gap-1.5 select-none">
        <span className="size-3 rounded-full bg-[#ff5f56] inline-block" />
        <span className="size-3 rounded-full bg-[#ffbd2e] inline-block" />
        <span className="size-3 rounded-full bg-[#27c93f] inline-block" />
      </div>
    ),
  },
  powershell: {
    container: "bg-[#012456] text-white border border-blue-900 shadow-lg",
    header: "bg-[#00193d] border-b border-blue-900/60",
    title: "text-yellow-300 font-mono text-xs font-bold",
  },
  cmd: {
    container: "bg-black text-zinc-100 border border-zinc-800 shadow-lg",
    header: "bg-zinc-900 border-b border-zinc-800",
    title: "text-zinc-400 font-mono text-xs",
  },
  ubuntu: {
    container: "bg-[#300a24] text-white border border-[#5e2750] shadow-lg",
    header: "bg-[#24071b] border-b border-[#5e2750]/60",
    title: "text-green-400 font-mono text-xs font-semibold",
  },
};

const CodeBlock = React.forwardRef<HTMLDivElement, CodeBlockProps>(
  (
    {
      code,
      variant = "default",
      language = "typescript",
      filename,
      radius = "2xl",
      showCopy = true,
      maxHeight = 320,
      className,
      ...props
    },
    ref,
  ) => {
    const codeRef = React.useRef<HTMLElement>(null);
    const [isExpanded, setIsExpanded] = React.useState(false);
    const styleConfig = variantStyles[variant] || variantStyles.default;

    const resolvedLang = React.useMemo(() => {
      if (filename?.endsWith(".tsx") || filename?.endsWith(".ts"))
        return "typescript";
      if (filename?.endsWith(".css")) return "css";
      if (filename?.endsWith(".json")) return "json";
      if (filename?.endsWith(".sh") || filename?.endsWith(".bash"))
        return "bash";
      return language;
    }, [filename, language]);

    const highlightedCode = React.useMemo(() => {
      try {
        if (resolvedLang && hljs.getLanguage(resolvedLang)) {
          return hljs.highlight(code, { language: resolvedLang }).value;
        }
        return hljs.highlightAuto(code).value;
      } catch (_err) {
        return code
          .replace(/&/g, "&amp;")
          .replace(/</g, "&lt;")
          .replace(/>/g, "&gt;")
          .replace(/"/g, "&quot;")
          .replace(/'/g, "&#039;");
      }
    }, [code, resolvedLang]);

    return (
      <div
        ref={ref}
        className={cn(
          "flex flex-col overflow-hidden transition-all duration-200",
          designRadius[radius],
          styleConfig.container,
          className,
        )}
        {...props}
      >
        <div
          className={cn(
            "flex items-center justify-between px-4 py-3",
            styleConfig.header,
          )}
        >
          <div className="flex items-center gap-3">
            {styleConfig.headerControls}
            <span className={styleConfig.title}>{filename ?? language}</span>
          </div>

          {showCopy && (
            <Button
              isCopy
              copyText={code}
              variant="flat"
              size="xs"
              radius="sm"
              className="bg-white/10 hover:bg-white/20 text-white border border-white/10"
            />
          )}
        </div>

        <div className="relative font-mono text-xs leading-relaxed overflow-x-auto">
          <pre
            className="transition-all duration-200 bg-transparent p-4 !bg-transparent"
            style={{
              maxHeight: isExpanded ? "none" : `${maxHeight}px`,
              overflow: "hidden",
            }}
          >
            <code
              ref={codeRef}
              className={`language-${resolvedLang} whitespace-pre-wrap font-mono !bg-transparent`}
              dangerouslySetInnerHTML={{ __html: highlightedCode }}
            />
          </pre>
        </div>

        {code.split("\n").length > 12 && (
          <div className="flex justify-center p-2 bg-black/20 border-t border-white/5">
            <button
              type="button"
              onClick={() => setIsExpanded((prev) => !prev)}
              className="text-[11px] font-semibold text-white/60 hover:text-white transition cursor-pointer select-none"
            >
              {isExpanded ? "Show Less" : "Show More"}
            </button>
          </div>
        )}
      </div>
    );
  },
);

CodeBlock.displayName = "CodeBlock";

export { CodeBlock };
