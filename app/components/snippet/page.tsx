"use client";

import { CodeBlock } from "@/components/core/codeBlock";
import { DocsComponent } from "@/components/core/docsComponent";
import { DocsPagination } from "@/components/core/docsPagination";
import DocsTitle from "@/components/core/docsTitle";
import { ImportSnippet } from "@/components/core/importSnippet";
import { InstallationBlock } from "@/components/core/installationBlock";
import { Separator } from "@/components/ui/separator/separator";
import { Snippet } from "@/components/ui/snippet/snippet";
import { snippetCode } from "@/components/ui/snippet/snippet.code";

export default function SnippetComponentPage() {
  return (
    <div className="space-y-8">
      <DocsTitle
        title="Snippet"
        description="A clean inline code snippet component for displaying single-line code, terminal CLI commands, or imports with one-click copy feedback and multiple OS visual variants."
      />

      <ImportSnippet
        importCode={`import { Snippet } from "@/components/ui/snippet/snippet";`}
      />

      <InstallationBlock componentName="snippet" />

      <CodeBlock
        code={snippetCode}
        componentName="snippet.tsx"
        description="Core implementation of the Snippet component with OS variants."
        tags={["React", "Tailwind", "UI Component"]}
      />

      <DocsComponent
        title="Default"
        description="Standard import snippet with label badge and copy button."
        preview={
          <div className="w-full">
            <Snippet
              code={`import { Snippet } from "@/components/ui/snippet/snippet";`}
            />
          </div>
        }
        code={`<Snippet code='import { Snippet } from "@/components/ui/snippet/snippet";' />`}
      />

      <DocsComponent
        title="OS Variants"
        description="Pass 'variant' to style the snippet container to match common operating system CLI windows or clean neutral themes."
        preview={
          <div className="w-full flex flex-col gap-4">
            <div>
              <span className="text-xs font-mono text-muted-foreground block mb-2">
                variant="mac"
              </span>
              <Snippet variant="mac" code="npx @bloomui-react/cli add button" />
            </div>

            <div>
              <span className="text-xs font-mono text-muted-foreground block mb-2">
                variant="powershell"
              </span>
              <Snippet
                variant="powershell"
                code="npx @bloomui-react/cli init"
              />
            </div>

            <div>
              <span className="text-xs font-mono text-muted-foreground block mb-2">
                variant="cmd"
              </span>
              <Snippet variant="cmd" code="npm install @bloomui-react/cli" />
            </div>

            <div>
              <span className="text-xs font-mono text-muted-foreground block mb-2">
                variant="ubuntu"
              </span>
              <Snippet variant="ubuntu" code="pnpm add @radix-ui/react-slot" />
            </div>

            <div>
              <span className="text-xs font-mono text-muted-foreground block mb-2">
                variant="flat"
              </span>
              <Snippet variant="flat" code="bun add bloom-ui" />
            </div>

            <div>
              <span className="text-xs font-mono text-muted-foreground block mb-2">
                variant="bordered"
              </span>
              <Snippet variant="bordered" code="yarn add bloom-ui" />
            </div>
          </div>
        }
        code={`<div className="space-y-4 w-full">
  <Snippet variant="mac" code="npx @bloomui-react/cli add button" />
  <Snippet variant="powershell" code="npx @bloomui-react/cli init" />
  <Snippet variant="cmd" code="npm install @bloomui-react/cli" />
  <Snippet variant="ubuntu" code="pnpm add @radix-ui/react-slot" />
  <Snippet variant="flat" code="bun add bloom-ui" />
  <Snippet variant="bordered" code="yarn add bloom-ui" />
</div>`}
        props={[
          "variant: 'default' | 'mac' | 'powershell' | 'cmd' | 'ubuntu' | 'flat' | 'bordered'",
        ]}
      />

      <Separator label={<span className="px-2">API Reference</span>} gradient />

      <DocsComponent
        title="Props — Snippet"
        description="Properties to configure the Snippet component."
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
                    The code or CLI command text string to display.
                  </td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">variant</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">
                    'default' | 'mac' | 'powershell' | 'cmd' | 'ubuntu' | 'flat'
                    | 'bordered'
                  </td>
                  <td className="px-3 py-2 text-muted-foreground">'default'</td>
                  <td className="px-3 py-2 text-muted-foreground">
                    Visual style variant for OS CLI window themes or neutral
                    frames.
                  </td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">symbol</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">
                    string
                  </td>
                  <td className="px-3 py-2 text-muted-foreground">
                    OS default
                  </td>
                  <td className="px-3 py-2 text-muted-foreground">
                    Custom leading prefix symbol (e.g. "$", "C:\&gt;").
                  </td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">label</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">
                    string
                  </td>
                  <td className="px-3 py-2 text-muted-foreground">'Import'</td>
                  <td className="px-3 py-2 text-muted-foreground">
                    Badge text label when variant is 'default'.
                  </td>
                </tr>
                <tr>
                  <td className="px-3 py-2 font-mono text-primary">showCopy</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">
                    boolean
                  </td>
                  <td className="px-3 py-2 text-muted-foreground">true</td>
                  <td className="px-3 py-2 text-muted-foreground">
                    Renders the copy to clipboard button.
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
