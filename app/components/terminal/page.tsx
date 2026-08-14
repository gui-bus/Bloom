"use client";

import { CodeBlock } from "@/components/core/codeBlock";
import { DocsComponent } from "@/components/core/docsComponent";
import { DocsPagination } from "@/components/core/docsPagination";
import DocsTitle from "@/components/core/docsTitle";
import { ImportSnippet } from "@/components/core/importSnippet";
import { InstallationBlock } from "@/components/core/installationBlock";
import { Separator } from "@/components/ui/separator/separator";
import { Terminal, type TerminalLine } from "@/components/ui/terminal/terminal";
import { terminalCode } from "@/components/ui/terminal/terminal.code";

const demoLines: TerminalLine[] = [
  { text: "npx bloom-ui init", type: "command" },
  { text: "Initializing design system tokens...", type: "output" },
  { text: "Design system tokens initialized successfully", type: "success" },
  { text: "npx bloom-ui add terminal button card", type: "command" },
  { text: "Downloading component source code...", type: "output" },
  { text: "Added 3 components to components/ui", type: "success" },
];

export default function TerminalPage() {
  return (
    <div className="space-y-8">
      <DocsTitle
        title="Terminal"
        description="A customizable command-line preview block supporting macOS zsh, Windows PowerShell, CMD, Ubuntu, and Default terminal variants."
      />

      <ImportSnippet
        importCode={`import { Terminal, TerminalLine } from "@/components/ui/terminal/terminal";`}
      />

      <InstallationBlock componentName="terminal" />

      <CodeBlock
        code={terminalCode}
        componentName="terminal.tsx"
        description="Complete command line interface component source code with multi-OS variants."
        tags={["React", "Terminal", "CLI", "Code"]}
      />

      <DocsComponent
        title="Default Variant"
        description="Neutral dark terminal window with traffic lights and copy button."
        props={[
          "variant?: 'default' | 'mac' | 'powershell' | 'cmd' | 'ubuntu'",
        ]}
        preview={
          <div className="w-full p-4">
            <Terminal variant="default" lines={demoLines} />
          </div>
        }
        code={`<Terminal variant="default" lines={demoLines} />`}
      />

      <DocsComponent
        props={["variant: 'mac'"]}
        title="macOS Variant"
        description="Authentic macOS zsh terminal aesthetic with red/yellow/green window control dots."
        preview={
          <div className="w-full p-4">
            <Terminal variant="mac" lines={demoLines} />
          </div>
        }
        code={`<Terminal variant="mac" lines={demoLines} />`}
      />

      <DocsComponent
        props={["variant: 'powershell'"]}
        title="Windows PowerShell Variant"
        description="Classic blue theme with yellow command highlights and PS prompt."
        preview={
          <div className="w-full p-4">
            <Terminal variant="powershell" lines={demoLines} />
          </div>
        }
        code={`<Terminal variant="powershell" lines={demoLines} />`}
      />

      <DocsComponent
        props={["variant: 'cmd'"]}
        title="Windows Command Prompt (CMD) Variant"
        description="Minimal black theme inspired by traditional Windows cmd.exe."
        preview={
          <div className="w-full p-4">
            <Terminal variant="cmd" lines={demoLines} />
          </div>
        }
        code={`<Terminal variant="cmd" lines={demoLines} />`}
      />

      <DocsComponent
        props={["variant: 'ubuntu'"]}
        title="Ubuntu Terminal Variant"
        description="Deep purple Ubuntu GNOME Terminal theme with bash prompt styling."
        preview={
          <div className="w-full p-4">
            <Terminal variant="ubuntu" lines={demoLines} />
          </div>
        }
        code={`<Terminal variant="ubuntu" lines={demoLines} />`}
      />

      <Separator label={<span className="px-2">API Reference</span>} gradient />

      <DocsComponent
        title="Props — Terminal"
        description="Supported configuration props for the Terminal block component."
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
                  <td className="px-3 py-2 font-mono text-primary">variant</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">
                    "default" | "mac" | "powershell" | "cmd" | "ubuntu"
                  </td>
                  <td className="px-3 py-2 text-muted-foreground">"default"</td>
                  <td className="px-3 py-2 text-muted-foreground">
                    Operating system visual theme variant.
                  </td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">title</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">
                    string
                  </td>
                  <td className="px-3 py-2 text-muted-foreground">
                    auto (variant default)
                  </td>
                  <td className="px-3 py-2 text-muted-foreground">
                    Custom title bar text overlay.
                  </td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">lines</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">
                    TerminalLine[]
                  </td>
                  <td className="px-3 py-2 text-muted-foreground">[]</td>
                  <td className="px-3 py-2 text-muted-foreground">
                    Array of terminal line items.
                  </td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">radius</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">
                    keyof typeof designRadius
                  </td>
                  <td className="px-3 py-2 text-muted-foreground">"xl"</td>
                  <td className="px-3 py-2 text-muted-foreground">
                    Corner border radius styling.
                  </td>
                </tr>
                <tr>
                  <td className="px-3 py-2 font-mono text-primary">showCopy</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">
                    boolean
                  </td>
                  <td className="px-3 py-2 text-muted-foreground">true</td>
                  <td className="px-3 py-2 text-muted-foreground">
                    Whether to display the copy commands button in header.
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
