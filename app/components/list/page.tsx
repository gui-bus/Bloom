import type { Metadata } from "next";
import { Icon } from "@iconify/react";
import { CodeBlock } from "@/components/core/codeBlock";
import { DocsComponent } from "@/components/core/docsComponent";
import DocsTitle from "@/components/core/docsTitle";

export const metadata: Metadata = {
  title: "List",
  description: "Stylized list container and item components.",
};

import { List, ListItem } from "@/components/ui/list/list";
import { listCode } from "@/components/ui/list/list.code";
import { Separator } from "@/components/ui/separator/separator";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs/tabs";

export default function ListComponentPage() {
  return (
    <main className="p-5 space-y-8">
      <DocsTitle
        title="List"
        description="A list container component supporting bordered styles, icon bullets, and active item highlight states."
      />

      <Tabs defaultValue="list">
        <TabsList background={false}>
          <TabsTrigger
            value="list"
            startContent={<Icon icon="devicon:react" className="size-5" />}
          >
            list.tsx
          </TabsTrigger>
        </TabsList>

        <TabsContent value="list">
          <CodeBlock
            code={listCode}
            componentName="list.tsx"
            description="Core implementation of the List component."
            tags={["React", "Tailwind", "Data", "List"]}
          />
        </TabsContent>
      </Tabs>

      {/* Basic Usage */}
      <DocsComponent
        title="Basic Usage"
        description="Bordered list container."
        preview={
          <div className="w-full max-w-sm">
            <List variant="bordered">
              <ListItem isActive>Profile Settings</ListItem>
              <ListItem>Account Security</ListItem>
              <ListItem>Notifications</ListItem>
            </List>
          </div>
        }
        code={`<List variant="bordered">
  <ListItem isActive>Profile Settings</ListItem>
  <ListItem>Account Security</ListItem>
</List>`}
      />

      <Separator label={<span className="px-2">API Reference</span>} gradient />

      <DocsComponent
        title="Props — List"
        description="Properties to configure the List component."
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
                  <td className="px-3 py-2 font-mono text-primary">variant</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">'default' | 'bordered' | 'separated'</td>
                  <td className="px-3 py-2 text-muted-foreground">'default'</td>
                  <td className="px-3 py-2 text-muted-foreground">List frame layout variant.</td>
                </tr>
              </tbody>
            </table>
          </div>
        }
      />
    </main>
  );
}
