"use client";
//#region Imports
import { Icon } from "@iconify/react";
import hljs from "highlight.js";
import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button/button";

//#endregion

//#region Interfaces
interface CodeBlockProps {
  code: string;
  componentName?: string;
  description?: string;
  language?: "typescript" | "css";
  tags?: string[];
  showCopy?: boolean;
  maxHeight?: number;
}
//#endregion

export function CodeBlock({
  code,
  componentName,
  description,
  language = "typescript",
  tags,
  showCopy = true,
  maxHeight = 280,
}: CodeBlockProps) {
  //#region Hooks
  const codeRef = useRef<HTMLElement>(null);
  //#endregion

  //#region useStates
  const [copied, setCopied] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [hasOverflow, setHasOverflow] = useState(false);
  //#endregion

  //#region useEffects
  useEffect(() => {
    if (codeRef.current) {
      hljs.highlightElement(codeRef.current);
    }
  }, []);

  useEffect(() => {
    if (!codeRef.current) return;

    hljs.highlightElement(codeRef.current);

    const pre = codeRef.current.parentElement;
    if (!pre) return;

    const hasOverflow = pre.scrollHeight > maxHeight;
    setHasOverflow(hasOverflow);
  }, [maxHeight]);
  //#endregion

  //#region Handle functions
  function handleCopy() {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  }
  //#endregion

  //#region Constants
  const iconMap: Record<"typescript" | "css", string> = {
    typescript: "devicon:react",
    css: "skill-icons:css",
  };

  const resolvedLanguage: "typescript" | "css" = componentName?.endsWith(".css")
    ? "css"
    : language;
  //#endregion

  return (
    <div className="relative bg-[#282a36] rounded-3xl p-5">
      {/* HEADER */}
      <div className="flex flex-col gap-2">
        <div className="flex items-center justify-between gap-5">
          <div className="flex items-center gap-2">
            <Icon
              icon={iconMap[resolvedLanguage]}
              className="w-5 h-5 min-w-5 min-h-5"
            />

            <span className="text-sm font-medium text-white">
              {componentName || (
                <span className="capitalize">{resolvedLanguage}</span>
              )}
            </span>
          </div>

          {showCopy && (
            <Button
              onClick={handleCopy}
              aria-label="Copiar código"
              className="ml-auto"
            >
              {copied ? "Copiado" : "Copiar"}
            </Button>
          )}
        </div>

        {description && (
          <p className="text-sm text-white/70 max-w-[90%]">{description}</p>
        )}

        {tags && tags.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
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

      {/* CODE CONTAINER */}
      <div className="relative mt-4">
        <pre
          className="rounded-3xl text-sm overflow-hidden transition-all duration-300"
          style={{
            maxHeight: isExpanded ? "none" : `${maxHeight}px`,
          }}
        >
          <code
            ref={codeRef}
            className={`language-${resolvedLanguage} whitespace-pre-wrap font-mono`}
          >
            {code}
          </code>
        </pre>

        {/* GRADIENT OVERLAY */}
        {!isExpanded && hasOverflow && (
          <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-20 rounded-b-3xl bg-linear-to-t from-[#282a36] to-transparent" />
        )}
      </div>

      {/* TOGGLE */}
      {hasOverflow && (
        <div className="mt-3 flex justify-center">
          <button
            type="button"
            onClick={() => setIsExpanded((prev) => !prev)}
            className="text-xs text-white/70 hover:text-white transition"
          >
            {isExpanded ? "Mostrar menos" : "Mostrar mais"}
          </button>
        </div>
      )}
    </div>
  );
}
