"use client";

import { Icon } from "@iconify/react";
import * as React from "react";
import { CodeBlock } from "@/components/core/codeBlock";
import { DocsComponent } from "@/components/core/docsComponent";
import { DocsPagination } from "@/components/core/docsPagination";
import DocsTitle from "@/components/core/docsTitle";
import { ImportSnippet } from "@/components/core/importSnippet";
import { InstallationBlock } from "@/components/core/installationBlock";
import { Button } from "@/components/ui/button/button";
import { DiffViewer } from "@/components/ui/diffViewer/diffViewer";
import { diffViewerCode } from "@/components/ui/diffViewer/diffViewer.code";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs/tabs";

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

      <Tabs defaultValue="diffViewer">
        <TabsList background={false}>
          <TabsTrigger
            value="diffViewer"
            startContent={<Icon icon="devicon:react" className="size-5" />}
          >
            diffViewer.tsx
          </TabsTrigger>
        </TabsList>

        <TabsContent value="diffViewer">
          <CodeBlock
            code={diffViewerCode}
            componentName="diffViewer.tsx"
            description="Core implementation of the DiffViewer component comparing strings using a line-by-line longest common subsequence algorithm."
            tags={["React", "Tailwind", "DiffViewer", "Git", "Code Compare"]}
          />
        </TabsContent>
      </Tabs>

      <DocsComponent
        title="Default"
        description="Shows line additions (green) and deletions (red) in a unified inline format."
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

      <div className="pt-4">
        <h2 className="text-xl font-semibold mb-4">API Reference</h2>
        <div className="overflow-x-auto border border-zinc-200 dark:border-zinc-800 rounded-lg">
          <table className="min-w-full divide-y divide-zinc-200 dark:divide-zinc-800 text-sm text-left">
            <thead className="bg-zinc-50 dark:bg-zinc-900 text-zinc-700 dark:text-zinc-300 font-medium">
              <tr>
                <th className="px-4 py-3 border-b border-zinc-200 dark:border-zinc-800">
                  Prop
                </th>
                <th className="px-4 py-3 border-b border-zinc-200 dark:border-zinc-800">
                  Type
                </th>
                <th className="px-4 py-3 border-b border-zinc-200 dark:border-zinc-800">
                  Default
                </th>
                <th className="px-4 py-3 border-b border-zinc-200 dark:border-zinc-800">
                  Description
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-200 dark:divide-zinc-800 text-zinc-600 dark:text-zinc-400">
              <tr>
                <td className="px-4 py-3 font-mono text-zinc-900 dark:text-zinc-100">
                  oldValue
                </td>
                <td className="px-4 py-3 font-mono text-primary">string</td>
                <td className="px-4 py-3 font-mono">""</td>
                <td className="px-4 py-3">
                  The original/previous string block.
                </td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-mono text-zinc-900 dark:text-zinc-100">
                  newValue
                </td>
                <td className="px-4 py-3 font-mono text-primary">string</td>
                <td className="px-4 py-3 font-mono">""</td>
                <td className="px-4 py-3">
                  The modified/new string block to compare against.
                </td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-mono text-zinc-900 dark:text-zinc-100">
                  splitView
                </td>
                <td className="px-4 py-3 font-mono text-primary">boolean</td>
                <td className="px-4 py-3 font-mono">false</td>
                <td className="px-4 py-3">
                  Renders side-by-side columns instead of unified inline list.
                </td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-mono text-zinc-900 dark:text-zinc-100">
                  variant
                </td>
                <td className="px-4 py-3 font-mono text-primary">
                  "default" | "bordered" | "flat"
                </td>
                <td className="px-4 py-3 font-mono">"default"</td>
                <td className="px-4 py-3">The outer layout styling wrapper.</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-mono text-zinc-900 dark:text-zinc-100">
                  radius
                </td>
                <td className="px-4 py-3 font-mono text-primary">
                  keyof typeof designRadius
                </td>
                <td className="px-4 py-3 font-mono">"md"</td>
                <td className="px-4 py-3">Outer layout corner radius.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <DocsPagination
        prev={{ title: "Kanban Board", href: "/components/kanbanBoard" }}
        next={{ title: "Tour", href: "/components/tour" }}
      />
    </div>
  );
}
