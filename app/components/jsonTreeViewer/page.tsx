"use client";

import { CodeBlock } from "@/components/core/codeBlock";
import { DocsComponent } from "@/components/core/docsComponent";
import { DocsPagination } from "@/components/core/docsPagination";
import DocsTitle from "@/components/core/docsTitle";
import { ImportSnippet } from "@/components/core/importSnippet";
import { InstallationBlock } from "@/components/core/installationBlock";
import { JsonTreeViewer } from "@/components/ui/jsonTreeViewer/jsonTreeViewer";
import { jsonTreeViewerCode } from "@/components/ui/jsonTreeViewer/jsonTreeViewer.code";
import { Separator } from "@/components/ui/separator/separator";

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

      <CodeBlock
        code={jsonTreeViewerCode}
        componentName="jsonTreeViewer.tsx"
        description="Nested collapsible list recursively formatting JS objects."
        tags={["React", "Tree", "JSON", "Viewer"]}
      />

      <DocsComponent
        title="Default"
        description="Standard JSON object viewer with color highlighting."
        props={["data: any", "expandDepth: number"]}
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

      <Separator label={<span className="px-2">API Reference</span>} gradient />

      <DocsComponent
        title="Props — JsonTreeViewer"
        description="Available properties for the JsonTreeViewer component."
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
                  <td className="px-3 py-2 font-mono text-primary">data</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">
                    any
                  </td>
                  <td className="px-3 py-2 text-muted-foreground">required</td>
                  <td className="px-3 py-2 text-muted-foreground">
                    The JavaScript object/array source data to parse and display
                  </td>
                </tr>
                <tr>
                  <td className="px-3 py-2 font-mono text-primary">
                    expandDepth
                  </td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">
                    number
                  </td>
                  <td className="px-3 py-2 text-muted-foreground">1</td>
                  <td className="px-3 py-2 text-muted-foreground">
                    Maximum hierarchy depth nodes are automatically expanded to
                    by default
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
