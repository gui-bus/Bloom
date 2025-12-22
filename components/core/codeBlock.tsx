"use client";

import hljs from "highlight.js";
import { useEffect, useRef, useState } from "react";
import { Button } from "../ui/button/button";

interface CodeBlockProps {
  /** Código a ser exibido */
  code: string;

  /** Nome do arquivo ou do exemplo (ex: Button.tsx) */
  componentName: string;

  /** Descrição curta explicando o propósito do exemplo */
  description?: string;

  /** Linguagem usada pelo highlight.js */
  language?: "typescript" | "css";

  /** Rótulo exibido no header (ex: Button.tsx, styles.css, Example) */
  languageLabel?: string;

  /** Tags informativas para documentação */
  tags?: string[];

  /** Controla exibição do botão de copiar */
  showCopy?: boolean;
}

export function CodeBlock({
  code,
  componentName,
  description,
  language = "typescript",
  languageLabel,
  tags,
  showCopy = true,
}: CodeBlockProps) {
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
    <div className="relative bg-[#282a36] rounded-3xl p-5">
      {/* Header */}
      <div className="flex flex-col gap-2">
        <div className="flex items-center justify-between gap-5">
          <span className="text-sm font-medium text-white">
            {languageLabel ?? componentName}
          </span>

          {showCopy && (
            <Button onClick={handleCopy} aria-label="Copiar código">
              {copied ? "Copiado" : "Copiar"}
            </Button>
          )}
        </div>

        {/* Description */}
        {description && (
          <p className="text-sm text-white/70 max-w-[90%]">
            {description}
          </p>
        )}

        {/* Tags */}
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

      {/* Code */}
      <pre
        className="mt-4 rounded-3xl text-sm overflow-hidden"
        aria-label={`Código do exemplo ${componentName}`}
      >
        <code
          ref={codeRef}
          className={`language-${language} whitespace-pre-wrap`}
        >
          {code}
        </code>
      </pre>
    </div>
  );
}
