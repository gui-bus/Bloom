import type { Metadata } from "next";
import { Icon } from "@iconify/react";
import { CodeBlock as CoreCodeBlock } from "@/components/core/codeBlock";
import { DocsComponent } from "@/components/core/docsComponent";
import DocsTitle from "@/components/core/docsTitle";

export const metadata: Metadata = {
  title: "Code Block",
  description: "Syntax-highlighted code block component with copy functionality, language icons, and expandable containers.",
};

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

export default function CodeBlockComponentPage() {
  return (
    <main className="p-5 space-y-8">
      <DocsTitle
        title="Code Block"
        description="A stylized syntax-highlighted code block component with integrated copy button, file tags, language badges, and optional container expansion."
      />

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
            description="Core implementation of the CodeBlock UI component."
            tags={["React", "Tailwind", "Highlight.js", "UI Component"]}
          />
        </TabsContent>
      </Tabs>

      {/* Basic CodeBlock */}
      <DocsComponent
        title="Basic Usage"
        description="Standard CodeBlock displaying TypeScript React source code."
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
  code={\`${sampleSnippet}\`}
  componentName="example.tsx"
  description="Basic component usage example"
  tags={["React", "TypeScript"]}
/>`}
      />

      {/* Languages */}
      <DocsComponent
        title="Language Support"
        description="Supports TypeScript, CSS, HTML, JSON, Bash, and more."
        preview={
          <div className="space-y-4 w-full">
            <CodeBlock
              code={`/* Custom style tokens */\n.custom-card {\n  background: var(--background);\n  border-radius: 1rem;\n}`}
              componentName="styles.css"
              language="css"
            />
            <CodeBlock
              code={`pnpm add @radix-ui/react-slot class-variance-authority`}
              componentName="install.sh"
              language="bash"
            />
          </div>
        }
        code={`<div className="space-y-4 w-full">
  <CodeBlock
    code={\`/* Custom style tokens */\\n.custom-card {\\n  background: var(--background);\\n  border-radius: 1rem;\\n}\`}
    componentName="styles.css"
    language="css"
  />
  <CodeBlock
    code="pnpm add @radix-ui/react-slot class-variance-authority"
    componentName="install.sh"
    language="bash"
  />
</div>`}
        props={["language: 'typescript' | 'javascript' | 'css' | 'html' | 'json' | 'bash'"]}
      />

      <Separator label={<span className="px-2">API Reference</span>} gradient />

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
                  <td className="px-3 py-2 text-muted-foreground">—</td>
                  <td className="px-3 py-2 text-muted-foreground">
                    The source code string to display and highlight.
                  </td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">componentName</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">string</td>
                  <td className="px-3 py-2 text-muted-foreground">—</td>
                  <td className="px-3 py-2 text-muted-foreground">
                    Header filename label (e.g. "button.tsx").
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
                    Subheader description text.
                  </td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">tags</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">string[]</td>
                  <td className="px-3 py-2 text-muted-foreground">—</td>
                  <td className="px-3 py-2 text-muted-foreground">
                    Array of tag pill labels.
                  </td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">showCopy</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">boolean</td>
                  <td className="px-3 py-2 text-muted-foreground">true</td>
                  <td className="px-3 py-2 text-muted-foreground">
                    Renders the copy to clipboard action button.
                  </td>
                </tr>
                <tr>
                  <td className="px-3 py-2 font-mono text-primary">maxHeight</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">number</td>
                  <td className="px-3 py-2 text-muted-foreground">280</td>
                  <td className="px-3 py-2 text-muted-foreground">
                    Max container height in pixels before showing expand toggle.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        }
      />
    </main>
  );
}
