"use client";

import { Snippet } from "@/components/ui/snippet/snippet";

interface ImportSnippetProps {
  importCode: string;
}

export function ImportSnippet({ importCode }: ImportSnippetProps) {
  return <Snippet variant="mac" symbol="import" code={importCode} />;
}
