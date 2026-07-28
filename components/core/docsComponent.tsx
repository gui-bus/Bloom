"use client";

import * as React from "react";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs/tabs";
import { CodeBlock } from "./codeBlock";

interface DocsComponentProps {
  title: string;
  description?: string;
  preview: React.ReactNode;
  code?: string | React.ReactNode;
  props?: string[];
}

export function DocsComponent({
  title,
  description,
  preview,
  code,
  props,
}: DocsComponentProps) {
  
  function renderWithInlineCode(text: string) {
    const elements: React.ReactNode[] = [];
    let lastIndex = 0;
    const regex = /'([^']+)'/g;
    let match = regex.exec(text);

    while (match !== null) {
      if (match.index > lastIndex) {
        elements.push(
          <span key={lastIndex}>{text.slice(lastIndex, match.index)}</span>
        );
      }

      elements.push(
        <code
          key={match.index}
          className="mx-1 rounded-full border border-border px-2 py-1 font-sans font-semibold text-xs text-primary shadow-[inset_0_-1px_0_rgba(0,0,0,0.05)]"
        >
          {match[1]}
        </code>
      );

      lastIndex = match.index + match[0].length;
      match = regex.exec(text);
    }

    if (lastIndex < text.length) {
      elements.push(<span key={lastIndex}>{text.slice(lastIndex)}</span>);
    }

    return elements;
  }

  const resolvedCode = React.useMemo(() => {
    if (!code) return null;

    if (React.isValidElement(code)) {
      return code;
    }

    if (typeof code === "string") {
      return <CodeBlock code={code} componentName="Usage" />;
    }

    return null;
  }, [code]);

  return (
    <section className="space-y-4 border border-zinc-200/50 dark:border-zinc-800/50 rounded-3xl p-6 bg-zinc-50/20 dark:bg-zinc-950/10">
      <div className="space-y-1">
        <h3 className="font-semibold text-xl text-foreground">{title}</h3>

        {description && (
          <p className="font-light text-sm text-muted-foreground leading-relaxed">
            {renderWithInlineCode(description)}
          </p>
        )}

        {props && props.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-2 pt-1">
            {props.map((prop) => (
              <span key={prop} className="text-xs font-mono p-3 rounded text-zinc-600 dark:text-zinc-400">
                {renderWithInlineCode(prop)}
              </span>
            ))}
          </div>
        )}
      </div>

      <Tabs defaultValue="preview" className="w-full">
        <TabsList background={false} className="border-b border-border w-full justify-start rounded-none p-0 h-10 gap-6">
          <TabsTrigger value="preview" variant="underline" className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary px-1 py-2 text-sm font-medium">
            Preview
          </TabsTrigger>

          {resolvedCode && (
            <TabsTrigger value="code" variant="underline" className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary px-1 py-2 text-sm font-medium">
              Code
            </TabsTrigger>
          )}
        </TabsList>

        <TabsContent value="preview" className="border border-zinc-200/60 dark:border-zinc-800/60 rounded-2xl p-6 mt-4 bg-background">
          {preview}
        </TabsContent>

        {resolvedCode && (
          <TabsContent value="code" className="p-0 mt-4">
            {resolvedCode}
          </TabsContent>
        )}
      </Tabs>
    </section>
  );
}
