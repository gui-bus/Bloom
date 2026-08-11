"use client";

import { AccessibilityCard } from "@/components/core/accessibilityCard";
import { CodeBlock as CoreCodeBlock } from "@/components/core/codeBlock";
import { DocsComponent } from "@/components/core/docsComponent";
import { DocsPagination } from "@/components/core/docsPagination";
import DocsTitle from "@/components/core/docsTitle";
import { ImportSnippet } from "@/components/core/importSnippet";
import { InstallationBlock } from "@/components/core/installationBlock";
import { CodeBlock } from "@/components/ui/codeBlock/codeBlock";
import { codeBlockCode } from "@/components/ui/codeBlock/codeBlock.code";
import { Separator } from "@/components/ui/separator/separator";

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
    <div className="space-y-8">
      <DocsTitle
        title="Code Block"
        description="A syntax-highlighted code container supporting multiple OS variants (mac, powershell, cmd, ubuntu, default), copy-to-clipboard, custom filename headers, and expandable previews."
      />

      <ImportSnippet
        importCode={`import { CodeBlock } from "@/components/ui/codeBlock/codeBlock";`}
      />

      <InstallationBlock componentName="codeBlock" />

      <CoreCodeBlock
        code={codeBlockCode}
        componentName="codeBlock.tsx"
        description="Core implementation of the CodeBlock UI component."
        tags={["React", "Tailwind", "UI Component"]}
      />

      <DocsComponent
        title="Default"
        description="Standard code block container with header title, language badge, and copy button."
        preview={
          <div className="w-full">
            <CodeBlock
              code={sampleSnippet}
              filename="example.tsx"
              language="typescript"
            />
          </div>
        }
        code={`<CodeBlock
  code={sampleSnippet}
  filename="example.tsx"
  language="typescript"
/>`}
      />

      <DocsComponent
        title="OS Variants"
        description="Pass 'variant' to style the code block container to match common operating system developer terminals."
        preview={
          <div className="w-full flex flex-col gap-4">
            <div>
              <span className="text-xs font-mono text-muted-foreground block mb-2">
                variant="mac"
              </span>
              <CodeBlock
                variant="mac"
                code={sampleSnippet}
                filename="App.tsx"
              />
            </div>

            <div>
              <span className="text-xs font-mono text-muted-foreground block mb-2">
                variant="powershell"
              </span>
              <CodeBlock
                variant="powershell"
                code={`Get-ChildItem -Path ./components -Recurse`}
                filename="PowerShell Script"
              />
            </div>

            <div>
              <span className="text-xs font-mono text-muted-foreground block mb-2">
                variant="cmd"
              </span>
              <CodeBlock
                variant="cmd"
                code={`dir /s /b *.tsx`}
                filename="Command Prompt"
              />
            </div>

            <div>
              <span className="text-xs font-mono text-muted-foreground block mb-2">
                variant="ubuntu"
              </span>
              <CodeBlock
                variant="ubuntu"
                code={`sudo apt-get update && sudo apt-get install -y nodejs`}
                filename="Bash Terminal"
              />
            </div>
          </div>
        }
        code={`<div className="space-y-4 w-full">
  <CodeBlock variant="mac" code={sampleSnippet} filename="App.tsx" />
  <CodeBlock variant="powershell" code="Get-ChildItem..." filename="PowerShell" />
  <CodeBlock variant="cmd" code="dir /s /b *.tsx" filename="Command Prompt" />
  <CodeBlock variant="ubuntu" code="sudo apt-get update" filename="Bash Terminal" />
</div>`}
        props={["variant: 'default' | 'mac' | 'powershell' | 'cmd' | 'ubuntu'"]}
      />

      <AccessibilityCard />

      <Separator label={<span className="px-2">API Reference</span>} gradient />

      <DocsComponent
        title="Props — CodeBlock"
        description="Properties to configure the CodeBlock component."
        preview={
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-2 px-3 font-semibold text-foreground">
                    Prop
                  </th>
                  <th className="text-left py-2 px-3 font-semibold text-foreground">
                    Type
                  </th>
                  <th className="text-left py-2 px-3 font-semibold text-foreground">
                    Default
                  </th>
                  <th className="text-left py-2 px-3 font-semibold text-foreground">
                    Description
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">code</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">
                    string
                  </td>
                  <td className="px-3 py-2 text-muted-foreground">—</td>
                  <td className="px-3 py-2 text-muted-foreground">
                    The source code content string to render.
                  </td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">variant</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">
                    'default' | 'mac' | 'powershell' | 'cmd' | 'ubuntu'
                  </td>
                  <td className="px-3 py-2 text-muted-foreground">'default'</td>
                  <td className="px-3 py-2 text-muted-foreground">
                    OS terminal visual style variant.
                  </td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">filename</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">
                    string
                  </td>
                  <td className="px-3 py-2 text-muted-foreground">—</td>
                  <td className="px-3 py-2 text-muted-foreground">
                    File name or title label in the header bar.
                  </td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">language</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">
                    string
                  </td>
                  <td className="px-3 py-2 text-muted-foreground">
                    'typescript'
                  </td>
                  <td className="px-3 py-2 text-muted-foreground">
                    Language fallback title when filename is omitted.
                  </td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">showCopy</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">
                    boolean
                  </td>
                  <td className="px-3 py-2 text-muted-foreground">true</td>
                  <td className="px-3 py-2 text-muted-foreground">
                    Renders copy to clipboard action button in the header.
                  </td>
                </tr>
                <tr>
                  <td className="px-3 py-2 font-mono text-primary">
                    maxHeight
                  </td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">
                    number
                  </td>
                  <td className="px-3 py-2 text-muted-foreground">320</td>
                  <td className="px-3 py-2 text-muted-foreground">
                    Maximum container height in pixels before enabling
                    expandable scroll.
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
