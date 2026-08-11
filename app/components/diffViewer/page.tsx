"use client";

import * as React from "react";
import { AccessibilityCard } from "@/components/core/accessibilityCard";
import { CodeBlock } from "@/components/core/codeBlock";
import { DocsComponent } from "@/components/core/docsComponent";
import { DocsPagination } from "@/components/core/docsPagination";
import DocsTitle from "@/components/core/docsTitle";
import { ImportSnippet } from "@/components/core/importSnippet";
import { InstallationBlock } from "@/components/core/installationBlock";
import { Button } from "@/components/ui/button/button";
import { DiffViewer } from "@/components/ui/diffViewer/diffViewer";
import { diffViewerCode } from "@/components/ui/diffViewer/diffViewer.code";
import { Separator } from "@/components/ui/separator/separator";

export default function DiffViewerPage() {
  const original = `function greet(name) {
  console.log("Hello, " + name);
  return true;
}`;

  const modified = `function greet(name, formal = false) {
  if (formal) {
    console.log("Good morning, " + name);
  } else {
    console.log("Hi, " + name);
  }
  return { status: "success" };
}`;

  const [split, setSplit] = React.useState(false);

  return (
    <div className="space-y-8">
      <DocsTitle
        title="Diff Viewer"
        description="A text comparison utility displaying line-by-line insertions and deletions, with toggle support for inline or side-by-side split layouts."
      />

      <ImportSnippet
        importCode={`import { DiffViewer } from "@/components/ui/diffViewer/diffViewer";`}
      />

      <InstallationBlock componentName="diffViewer" />

      <CodeBlock
        code={diffViewerCode}
        componentName="diffViewer.tsx"
        description="Core implementation of the DiffViewer component comparing strings using a line-by-line longest common subsequence algorithm."
        tags={["React", "Tailwind", "DiffViewer", "Git", "Code Compare"]}
      />

      <DocsComponent
        title="Default"
        description="Shows line additions (green) and deletions (red) in a unified inline format."
        props={["oldValue: string", "newValue: string"]}
        preview={
          <div className="w-full">
            <DiffViewer oldValue={original} newValue={modified} />
          </div>
        }
        code={`const original = "..."
const modified = "..."

<DiffViewer oldValue={original} newValue={modified} />`}
      />

      <DocsComponent
        title="Split View"
        description="Provides a side-by-side comparison panel, aligning deleted lines on the left and added lines on the right."
        props={["splitView: boolean"]}
        preview={
          <div className="w-full space-y-4">
            <div className="flex justify-end">
              <Button size="sm" onClick={() => setSplit(!split)}>
                Toggle: {split ? "Inline View" : "Split View"}
              </Button>
            </div>
            <DiffViewer
              oldValue={original}
              newValue={modified}
              splitView={split}
            />
          </div>
        }
        code={`<DiffViewer oldValue={original} newValue={modified} splitView={true} />`}
      />

      <DocsComponent
        title="Variants"
        description="Supports different border styles matching the Bloom aesthetics."
        props={["variant: 'default' | 'bordered' | 'flat'"]}
        preview={
          <div className="w-full space-y-6">
            <div>
              <span className="text-xs font-mono text-muted-foreground block mb-2">
                variant="flat"
              </span>
              <DiffViewer
                oldValue={original}
                newValue={modified}
                variant="flat"
              />
            </div>
            <div>
              <span className="text-xs font-mono text-muted-foreground block mb-2">
                variant="bordered"
              </span>
              <DiffViewer
                oldValue={original}
                newValue={modified}
                variant="bordered"
              />
            </div>
          </div>
        }
        code={`<DiffViewer oldValue={original} newValue={modified} variant="flat" />
<DiffViewer oldValue={original} newValue={modified} variant="bordered" />`}
      />

      <Separator label={<span className="px-2">API Reference</span>} gradient />

      <DocsComponent
        title="Props — DiffViewer"
        description="Props for the DiffViewer component."
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
                  <td className="px-3 py-2 font-mono text-primary">oldValue</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">
                    string
                  </td>
                  <td className="px-3 py-2 text-muted-foreground">""</td>
                  <td className="px-3 py-2 text-muted-foreground">
                    The original/previous string block.
                  </td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">newValue</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">
                    string
                  </td>
                  <td className="px-3 py-2 text-muted-foreground">""</td>
                  <td className="px-3 py-2 text-muted-foreground">
                    The modified/new string block to compare against.
                  </td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">
                    splitView
                  </td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">
                    boolean
                  </td>
                  <td className="px-3 py-2 text-muted-foreground">false</td>
                  <td className="px-3 py-2 text-muted-foreground">
                    Renders side-by-side columns instead of unified inline list.
                  </td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">variant</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">
                    "default" | "bordered" | "flat"
                  </td>
                  <td className="px-3 py-2 text-muted-foreground">"default"</td>
                  <td className="px-3 py-2 text-muted-foreground">
                    The outer layout styling wrapper.
                  </td>
                </tr>
                <tr>
                  <td className="px-3 py-2 font-mono text-primary">radius</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">
                    keyof typeof designRadius
                  </td>
                  <td className="px-3 py-2 text-muted-foreground">"md"</td>
                  <td className="px-3 py-2 text-muted-foreground">
                    Outer layout corner radius.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        }
      />

      <AccessibilityCard />
      <DocsPagination />
    </div>
  );
}
