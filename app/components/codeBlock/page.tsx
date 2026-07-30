"use client";

import { ImportSnippet } from "@/components/core/importSnippet";

import { DocsPagination } from "@/components/core/docsPagination";

import { InstallationBlock } from "@/components/core/installationBlock";

import * as React from "react";
import { Icon } from "@iconify/react";
import { CodeBlock as CoreCodeBlock } from "@/components/core/codeBlock";
import { DocsComponent } from "@/components/core/docsComponent";
import DocsTitle from "@/components/core/docsTitle";
import { CodeBlock } from "@/components/ui/codeBlock/codeBlock";
import { codeBlockCode } from "@/components/ui/codeBlock/codeBlock.code";
import { Separator } from "@/components/ui/separator/separator";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs/tabs";

const sampleSnippet = `import React from 'react';
import { Button } from '@/components/ui/button';

export function ExampleApp() {
  return (
    <div className="flex gap-4 p-4">
      <Button color="primary">Click Me</Button>
    </div>
  );
}`;

const longSnippet = `
import * as React from "react";
import { cn } from "@/lib/utils";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "bordered" | "flat";
  color?: "default" | "primary" | "success" | "warning" | "danger";
  radius?: "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "full";
}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant = "default", color = "default", radius = "2xl", children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900",
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);
Card.displayName = "Card";

export { Card };`;

export default function CodeBlockComponentPage() {
  return (
    <div className="space-y-8">
      <DocsTitle
        title="Code Block"
        description="A stylized syntax-highlighted code block component with integrated copy button, file name header, language badges, description text, tag pills, and optional expandable container."
      />

      <ImportSnippet importCode={`import { CodeBlock } from "@/components/ui/codeBlock/codeBlock";`} />

      <InstallationBlock componentName="codeBlock" />

      <Tabs defaultValue="codeBlock">
        <TabsList background={false}>
          <TabsTrigger
            value="codeBlock"
            startContent={<Icon icon="devicon:react" className="size-5" />}
          >
            codeBlock.tsx
          </TabsTrigger>
        </TabsList>

        <TabsContent value="codeBlock">
          <CoreCodeBlock
            code={codeBlockCode}
            componentName="codeBlock.tsx"
            description="Core implementation of the CodeBlock UI component with syntax highlighting and clipboard copy."
            tags={["React", "Tailwind", "Highlight.js", "UI Component"]}
          />
        </TabsContent>
      </Tabs>

      {/* Default */}
      <DocsComponent
        title="Default"
        description="Standard code block displaying TypeScript source code with header, description, and tag pills."
        preview={
          <div className="w-full">
            <CodeBlock
              code={sampleSnippet}
              componentName="example.tsx"
              description="Basic component usage example"
              tags={["React", "TypeScript"]}
            />
          </div>
        }
        code={`<CodeBlock
  code={sampleSnippet}
  componentName="example.tsx"
  description="Basic component usage example"
  tags={["React", "TypeScript"]}
/>`}
      />

      {/* Language Support */}
      <DocsComponent
        title="Language Support"
        description="Supports TypeScript, JavaScript, CSS, HTML, JSON, and Bash with automatic language icon resolution."
        preview={
          <div className="w-full flex flex-col gap-4">
            <CodeBlock
              code={`/* Custom style tokens */
.custom-card {
  background: var(--background);
  border-radius: 1rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
}`}
              componentName="styles.css"
              language="css"
            />
            <CodeBlock
              code={`pnpm add @radix-ui/react-slot class-variance-authority`}
              componentName="install.sh"
              language="bash"
            />
            <CodeBlock
              code={`{
  "name": "bloom-ui",
  "version": "1.0.0",
  "description": "Modern React component library"
}`}
              componentName="package.json"
              language="json"
            />
          </div>
        }
        code={`<CodeBlock
  code={cssCode}
  componentName="styles.css"
  language="css"
/>

<CodeBlock
  code="pnpm add @radix-ui/react-slot class-variance-authority"
  componentName="install.sh"
  language="bash"
/>

<CodeBlock
  code={jsonCode}
  componentName="package.json"
  language="json"
/>`}
        props={["language: 'typescript' | 'javascript' | 'css' | 'html' | 'json' | 'bash'"]}
      />

      {/* Expandable Container */}
      <DocsComponent
        title="Expandable Container"
        description="When the code exceeds the 'maxHeight' threshold, a gradient fade and 'Show more' toggle button appear automatically."
        preview={
          <div className="w-full">
            <CodeBlock
              code={longSnippet}
              componentName="card.tsx"
              description="Full component source with expandable overflow container"
              tags={["React", "TypeScript", "Tailwind"]}
              maxHeight={200}
            />
          </div>
        }
        code={`<CodeBlock
  code={longSnippet}
  componentName="card.tsx"
  description="Full component source with expandable overflow container"
  tags={["React", "TypeScript", "Tailwind"]}
  maxHeight={200}
/>`}
        props={["maxHeight: number"]}
      />

      {/* Without Copy Button */}
      <DocsComponent
        title="Without Copy Button"
        description="Set 'showCopy' to false to hide the clipboard copy action button."
        preview={
          <div className="w-full">
            <CodeBlock
              code={`const greeting = "Hello, World!";
console.log(greeting);`}
              componentName="hello.ts"
              showCopy={false}
            />
          </div>
        }
        code={`<CodeBlock
  code={snippet}
  componentName="hello.ts"
  showCopy={false}
/>`}
        props={["showCopy: boolean"]}
      />

      <Separator label={<span className="px-2">API Reference</span>} gradient />

      {/* Props CodeBlock Table */}
      <DocsComponent
        title="Props — CodeBlock"
        description="Properties to configure the CodeBlock component."
        preview={
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-2 px-3 font-semibold text-foreground">Prop</th>
                  <th className="text-left py-2 px-3 font-semibold text-foreground">Type</th>
                  <th className="text-left py-2 px-3 font-semibold text-foreground">Default</th>
                  <th className="text-left py-2 px-3 font-semibold text-foreground">Description</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">code</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">string</td>
                  <td className="px-3 py-2 text-muted-foreground">required</td>
                  <td className="px-3 py-2 text-muted-foreground">
                    The source code string to display and syntax-highlight.
                  </td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">componentName</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">string</td>
                  <td className="px-3 py-2 text-muted-foreground">—</td>
                  <td className="px-3 py-2 text-muted-foreground">
                    File name label displayed in the header (e.g. "button.tsx").
                  </td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">language</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">
                    'typescript' | 'javascript' | 'css' | 'html' | 'json' | 'bash'
                  </td>
                  <td className="px-3 py-2 text-muted-foreground">'typescript'</td>
                  <td className="px-3 py-2 text-muted-foreground">
                    Syntax highlighting language identifier.
                  </td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">description</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">string</td>
                  <td className="px-3 py-2 text-muted-foreground">—</td>
                  <td className="px-3 py-2 text-muted-foreground">
                    Subheader description text below the file name.
                  </td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">tags</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">string[]</td>
                  <td className="px-3 py-2 text-muted-foreground">—</td>
                  <td className="px-3 py-2 text-muted-foreground">
                    Array of tag pill labels rendered below the description.
                  </td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">showCopy</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">boolean</td>
                  <td className="px-3 py-2 text-muted-foreground">true</td>
                  <td className="px-3 py-2 text-muted-foreground">
                    Renders the copy-to-clipboard action button in the header.
                  </td>
                </tr>
                <tr>
                  <td className="px-3 py-2 font-mono text-primary">maxHeight</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">number</td>
                  <td className="px-3 py-2 text-muted-foreground">280</td>
                  <td className="px-3 py-2 text-muted-foreground">
                    Max container height in pixels before showing the expand/collapse toggle.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        }
      />
    
      <DocsPagination />
    </div>
  );
}
