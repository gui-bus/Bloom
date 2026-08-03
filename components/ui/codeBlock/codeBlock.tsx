"use client";

import { Icon } from "@iconify/react";
import hljs from "highlight.js";
import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button/button";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

export interface CodeFile {
  name: string;
  code: string;
  language?: "typescript" | "javascript" | "css" | "html" | "json" | "bash";
  description?: string;
  tags?: string[];
  highlightLines?: (number | string)[];
}

export interface CodeBlockProps extends React.HTMLAttributes<HTMLDivElement> {
  code?: string;
  files?: CodeFile[];
  componentName?: string;
  description?: string;
  language?: "typescript" | "javascript" | "css" | "html" | "json" | "bash";
  tags?: string[];
  showCopy?: boolean;
  maxHeight?: number;
  showLineNumbers?: boolean;
  highlightLines?: (number | string)[];
  wordWrap?: boolean;
}

function parseHighlightLines(
  highlightLines?: (number | string)[],
): Set<number> {
  const set = new Set<number>();
  if (!highlightLines) return set;
  for (const item of highlightLines) {
    if (typeof item === "number") {
      set.add(item);
    } else if (typeof item === "string") {
      if (item.includes("-")) {
        const [start, end] = item.split("-").map((n) => parseInt(n.trim(), 10));
        if (!isNaN(start) && !isNaN(end)) {
          for (let i = start; i <= end; i++) {
            set.add(i);
          }
        }
      } else {
        const num = parseInt(item.trim(), 10);
        if (!isNaN(num)) set.add(num);
      }
    }
  }
  return set;
}

export function CodeBlock({
  code: singleCode = "",
  files,
  componentName,
  description,
  language = "typescript",
  tags,
  showCopy = true,
  maxHeight = 280,
  highlightLines,
  wordWrap = false,
  className,
  ...props
}: CodeBlockProps) {
  const [activeFileIndex, setActiveFileIndex] = useState(0);
  const [isWrapEnabled, setIsWrapEnabled] = useState(wordWrap);
  const [copied, setCopied] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [hasOverflow, setHasOverflow] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const activeFile = files && files.length > 0 ? files[activeFileIndex] : null;
  const currentCode = activeFile ? activeFile.code : singleCode;
  const currentFileName = activeFile ? activeFile.name : componentName;
  const currentDescription = activeFile?.description ?? description;
  const currentTags = activeFile?.tags ?? tags;
  const currentLanguage =
    activeFile?.language ??
    (currentFileName?.endsWith(".css") ? "css" : language);
  const currentHighlightLines = activeFile?.highlightLines ?? highlightLines;

  useEffect(() => {
    if (containerRef.current) {
      const codeEls = containerRef.current.querySelectorAll("code");
      codeEls.forEach((el) => {
        el.removeAttribute("data-highlighted");
        hljs.highlightElement(el as HTMLElement);
      });
      const pre = containerRef.current.querySelector("pre");
      if (pre) {
        setHasOverflow(pre.scrollHeight > maxHeight);
      }
    }
  }, [currentCode, maxHeight, activeFileIndex, isWrapEnabled]);

  function handleCopy() {
    navigator.clipboard.writeText(currentCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  }

  const iconMap: Record<string, string> = {
    typescript: "devicon:typescript",
    javascript: "devicon:javascript",
    css: "skill-icons:css",
    html: "devicon:html5",
    json: "devicon:json",
    bash: "devicon:bash",
  };

  const highlightedSet = parseHighlightLines(currentHighlightLines);
  const codeLines = currentCode.split("\n");

  const actionButtons = (
    <div className="flex items-center gap-2 shrink-0">
      <Button
        onClick={() => setIsWrapEnabled((prev) => !prev)}
        aria-label="Toggle word wrap"
        variant="flat"
        size="xs"
        startContent={<Icon icon="hugeicons:text-wrap" className="size-3.5" />}
        className={cn(
          "bg-white/10 hover:bg-white/20 text-white rounded-lg px-2.5 py-1.5 border border-white/5 text-xs transition-colors cursor-pointer",
          isWrapEnabled && "bg-sky-500/20 text-sky-300 border-sky-500/30",
        )}
        title="Toggle Word Wrap"
      >
        Wrap
      </Button>

      {showCopy && (
        <Button
          onClick={handleCopy}
          aria-label="Copy code"
          variant="flat"
          size="xs"
          startContent={
            copied ? (
              <Icon icon="lucide:check" className="size-3.5 text-green-400" />
            ) : (
              <Icon icon="lucide:copy" className="size-3.5" />
            )
          }
          className="bg-white/10 hover:bg-white/20 text-white rounded-lg px-3 py-1.5 border border-white/5 transition-colors cursor-pointer min-w-[70px]"
        >
          {copied ? "Copied" : "Copy"}
        </Button>
      )}
    </div>
  );

  return (
    <div
      ref={containerRef}
      className={cn(
        "relative bg-[#282C34] text-[#f8f8f2] rounded-3xl p-5 overflow-hidden",
        className,
      )}
      {...props}
    >
      <div className="flex flex-col gap-2">
        {files && files.length > 0 ? (
          <div className="flex items-center justify-between gap-4 pb-2 border-b border-white/10 overflow-x-auto">
            <div className="flex items-center gap-1.5 overflow-x-auto">
              {files.map((file, idx) => {
                const fileLang =
                  file.language ||
                  (file.name.endsWith(".css") ? "css" : "typescript");
                const isActive = idx === activeFileIndex;
                return (
                  <button
                    key={file.name + idx}
                    type="button"
                    onClick={() => setActiveFileIndex(idx)}
                    className={cn(
                      "flex items-center gap-2 px-3 py-1.5 rounded-xl text-xs font-medium transition-all cursor-pointer",
                      isActive
                        ? "bg-white/15 text-white font-semibold shadow-xs"
                        : "text-white/60 hover:text-white hover:bg-white/5",
                    )}
                  >
                    <Icon
                      icon={iconMap[fileLang] || "lucide:code"}
                      className="size-3.5"
                    />
                    <span>{file.name}</span>
                  </button>
                );
              })}
            </div>

            {actionButtons}
          </div>
        ) : (
          <div className="flex items-center justify-between gap-5">
            <div className="flex items-center gap-2">
              <Icon
                icon={iconMap[currentLanguage] || "lucide:code"}
                className="w-5 h-5 min-w-5 min-h-5 text-white/90"
              />
              <span className="text-sm font-medium text-white">
                {currentFileName || (
                  <span className="capitalize">{currentLanguage}</span>
                )}
              </span>
            </div>

            {actionButtons}
          </div>
        )}

        {currentDescription && (
          <p className="text-sm text-white/70 max-w-[90%] pt-1">
            {currentDescription}
          </p>
        )}

        {currentTags && currentTags.length > 0 && (
          <div className="flex flex-wrap gap-2 pt-1">
            {currentTags.map((tag) => (
              <span
                key={tag}
                className="text-xs text-white/60 bg-white/10 rounded-full px-2 py-0.5"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>

      <div className="relative mt-4">
        <pre
          className={cn(
            "rounded-2xl text-sm transition-all duration-300 bg-[#282C34] p-3 text-[#f8f8f2]",
            isWrapEnabled
              ? "whitespace-pre-wrap break-words overflow-y-auto"
              : "whitespace-pre overflow-x-auto",
            !isExpanded && "overflow-hidden",
          )}
          style={{
            maxHeight: isExpanded ? "none" : `${maxHeight}px`,
          }}
        >
          {highlightedSet.size > 0 ? (
            <div className="font-mono text-sm py-1 bg-[#282C34]">
              {codeLines.map((lineContent, lineIndex) => {
                const lineNumber = lineIndex + 1;
                const isHighlighted = highlightedSet.has(lineNumber);
                return (
                  <div
                    key={lineIndex}
                    className={cn(
                      "px-3 py-0.5 flex items-start gap-4 transition-colors bg-[#282C34]",
                      isHighlighted &&
                        "bg-sky-500/20 border-l-2 border-sky-400 font-semibold",
                    )}
                  >
                    <code
                      className={`language-${currentLanguage} flex-1 bg-[#282C34]`}
                    >
                      {lineContent || " "}
                    </code>
                  </div>
                );
              })}
            </div>
          ) : (
            <code
              key={activeFileIndex + (isWrapEnabled ? "-wrap" : "-nowrap")}
              className={`language-${currentLanguage} ${
                isWrapEnabled ? "whitespace-pre-wrap" : "whitespace-pre"
              } font-mono bg-[#282C34] text-[#f8f8f2]`}
            >
              {currentCode}
            </code>
          )}
        </pre>

        {!isExpanded && hasOverflow && (
          <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-20 rounded-b-3xl bg-linear-to-t from-[#282a36] to-transparent" />
        )}
      </div>

      {hasOverflow && (
        <div className="mt-3 flex justify-center">
          <button
            type="button"
            onClick={() => setIsExpanded((prev) => !prev)}
            className="text-xs text-white/70 hover:text-white transition cursor-pointer"
          >
            {isExpanded ? "Show less" : "Show more"}
          </button>
        </div>
      )}
    </div>
  );
}
