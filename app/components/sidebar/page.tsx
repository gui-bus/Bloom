import type { Metadata } from "next";
import { Icon } from "@iconify/react";
import { CodeBlock } from "@/components/core/codeBlock";
import { DocsComponent } from "@/components/core/docsComponent";
import DocsTitle from "@/components/core/docsTitle";

export const metadata: Metadata = {
  title: "Sidebar",
  description: "Collapsible navigation sidebar panel component.",
};

import { UiSidebar } from "@/components/ui/sidebar/sidebar";
import { sidebarCode } from "@/components/ui/sidebar/sidebar.code";
import { Separator } from "@/components/ui/separator/separator";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs/tabs";

export default function SidebarComponentPage() {
  return (
    <main className="p-5 space-y-8">
      <DocsTitle
        title="Sidebar"
        description="A collapsible layout panel component designed for application navigation menus and sidebars."
      />

      <Tabs defaultValue="sidebar">
        <TabsList background={false}>
          <TabsTrigger
            value="sidebar"
            startContent={<Icon icon="devicon:react" className="size-5" />}
          >
            sidebar.tsx
          </TabsTrigger>
        </TabsList>

        <TabsContent value="sidebar">
          <CodeBlock
            code={sidebarCode}
            componentName="sidebar.tsx"
            description="Core implementation of the UiSidebar component."
            tags={["React", "Tailwind", "Layout", "Navigation"]}
          />
        </TabsContent>
      </Tabs>

      {/* Basic Usage */}
      <DocsComponent
        title="Basic Usage"
        description="Collapsible navigation sidebar."
        preview={
          <div className="h-64 border rounded-2xl overflow-hidden bg-background">
            <UiSidebar
              header={<span className="font-bold text-sm">App Logo</span>}
              footer={<span className="text-xs text-muted-foreground">v1.0.0</span>}
            >
              <div className="py-2 text-xs font-semibold">Dashboard</div>
              <div className="py-2 text-xs font-semibold text-muted-foreground">Settings</div>
            </UiSidebar>
          </div>
        }
        code={`<UiSidebar
  header={<span className="font-bold text-sm">App Logo</span>}
  footer={<span className="text-xs text-muted-foreground">v1.0.0</span>}
>
  <div className="py-2 text-xs font-semibold">Dashboard</div>
</UiSidebar>`}
      />

      <Separator label={<span className="px-2">API Reference</span>} gradient />

      <DocsComponent
        title="Props — UiSidebar"
        description="Properties to configure the UiSidebar component."
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
                  <td className="px-3 py-2 font-mono text-primary">collapsible</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">boolean</td>
                  <td className="px-3 py-2 text-muted-foreground">true</td>
                  <td className="px-3 py-2 text-muted-foreground">Enables collapse/expand trigger button.</td>
                </tr>
                <tr>
                  <td className="px-3 py-2 font-mono text-primary">defaultCollapsed</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">boolean</td>
                  <td className="px-3 py-2 text-muted-foreground">false</td>
                  <td className="px-3 py-2 text-muted-foreground">Initial collapsed state.</td>
                </tr>
              </tbody>
            </table>
          </div>
        }
      />
    </main>
  );
}
