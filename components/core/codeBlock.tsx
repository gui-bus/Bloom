"use client";
import { CodeBlock as PublicCodeBlock } from "@/components/ui/codeBlock/codeBlock";

interface CoreCodeBlockProps {
  code: string;
  componentName?: string;
  description?: string;
  language?: "typescript" | "css";
  tags?: string[];
  showCopy?: boolean;
  maxHeight?: number;
}

export function CodeBlock({
  code,
  componentName,
  language = "typescript",
  showCopy = true,
  maxHeight = 320,
}: CoreCodeBlockProps) {
  const resolvedLang = componentName?.endsWith(".css") ? "css" : language;

  return (
    <PublicCodeBlock
      variant="mac"
      code={code}
      filename={componentName}
      language={resolvedLang}
      showCopy={showCopy}
      maxHeight={maxHeight}
    />
  );
}
