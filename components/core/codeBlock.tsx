"use client";

import hljs from "highlight.js";
import { useEffect, useRef, useState } from "react";

interface CodeBlockProps {
  code: string;
}

export function CodeBlock({ code }: CodeBlockProps) {
  const codeRef = useRef<HTMLElement>(null);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (codeRef.current) {
      hljs.highlightElement(codeRef.current);
    }
  }, [code]);

  function handleCopy() {
    navigator.clipboard.writeText(code);
    setCopied(true);

    setTimeout(() => setCopied(false), 1500);
  }

  return (
    <div className="relative">
      <button
        onClick={handleCopy}
        className="absolute right-3 top-3 rounded-lg bg-neutral-800 px-2 py-1 text-xs text-white opacity-70 transition hover:opacity-100"
        aria-label="Copiar código"
      >
        {copied ? (
          <span className="flex items-center gap-1">
            {/* <Check size={14} /> */}
            Copiado
          </span>
        ) : (
          <span className="flex items-center gap-1">
            {/* <Copy size={14} /> */}
            Copiar
          </span>
        )}
      </button>

      <pre className="rounded-3xl text-sm overflow-hidden pt-10">
        <code
          ref={codeRef}
          className="language-typescript whitespace-pre-wrap wrap-break-word"
        >
          {code}
        </code>
      </pre>
    </div>
  );
}