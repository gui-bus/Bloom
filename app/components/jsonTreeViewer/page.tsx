"use client";

import { Icon } from "@iconify/react";
import { CodeBlock } from "@/components/core/codeBlock";
import { DocsComponent } from "@/components/core/docsComponent";
import { DocsPagination } from "@/components/core/docsPagination";
import DocsTitle from "@/components/core/docsTitle";
import { ImportSnippet } from "@/components/core/importSnippet";
import { InstallationBlock } from "@/components/core/installationBlock";
import { JsonTreeViewer } from "@/components/ui/jsonTreeViewer/jsonTreeViewer";
import { jsonTreeViewerCode } from "@/components/ui/jsonTreeViewer/jsonTreeViewer.code";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs/tabs";

export default function JsonTreeViewerPage() {
  const sampleData = {
    name: "John Doe",
    age: 30,
    isActive: true,
    skills: ["React", "TypeScript", "TailwindCSS"],
    settings: {
      theme: "dark",
      notifications: {
        email: true,
        push: false,
      },
    },
  };

  return (
    <div className="space-y-8">
      <DocsTitle
        title="JSON Tree Viewer"
        description="A collapsible tree rendering complex JavaScript structures with type highlighting, expansion hooks, and node copying."
      />

      <ImportSnippet
        importCode={`import { JsonTreeViewer } from "@/components/ui/jsonTreeViewer/jsonTreeViewer";`}
      />

      <InstallationBlock componentName="jsonTreeViewer" />

      <Tabs defaultValue="jsonTreeViewer">
        <TabsList background={false}>
          <TabsTrigger
            value="jsonTreeViewer"
            startContent={<Icon icon="devicon:react" className="size-5" />}
          >
            jsonTreeViewer.tsx
          </TabsTrigger>
        </TabsList>

        <TabsContent value="jsonTreeViewer">
          <CodeBlock
            code={jsonTreeViewerCode}
            componentName="jsonTreeViewer.tsx"
            description="Nested collapsible list recursively formatting JS objects."
            tags={["React", "Tree", "JSON", "Viewer"]}
          />
        </TabsContent>
      </Tabs>

      <DocsComponent
        title="Default"
        description="Standard JSON object viewer with color highlighting."
        preview={
          <div className="w-full max-w-xl p-4 bg-zinc-50 dark:bg-zinc-950/40 rounded-xl border border-zinc-200 dark:border-zinc-800">
            <JsonTreeViewer data={sampleData} />
          </div>
        }
        code={`const data = {
  name: "John Doe",
  age: 30,
  isActive: true,
  settings: {
    theme: "dark"
  }
};

<JsonTreeViewer data={data} />`}
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
                  data
                </td>
                <td className="px-4 py-3 font-mono text-primary">any</td>
                <td className="px-4 py-3 font-mono">required</td>
                <td className="px-4 py-3">
                  The JavaScript object/array source data to parse and display.
                </td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-mono text-zinc-900 dark:text-zinc-100">
                  expandDepth
                </td>
                <td className="px-4 py-3 font-mono text-primary">number</td>
                <td className="px-4 py-3 font-mono">1</td>
                <td className="px-4 py-3">
                  Maximum hierarchy depth nodes are automatically expanded to by
                  default.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <DocsPagination
        prev={{ title: "Interactive Map", href: "/components/interactiveMap" }}
        next={{ title: "Kanban Board", href: "/components/kanbanBoard" }}
      />
    </div>
  );
}
