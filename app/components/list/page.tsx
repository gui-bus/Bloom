"use client";

import { ImportSnippet } from "@/components/core/importSnippet";

import { DocsPagination } from "@/components/core/docsPagination";

import { InstallationBlock } from "@/components/core/installationBlock";

import * as React from "react";
import { Icon } from "@iconify/react";
import { CodeBlock } from "@/components/core/codeBlock";
import { DocsComponent } from "@/components/core/docsComponent";
import DocsTitle from "@/components/core/docsTitle";
import { List, ListItem } from "@/components/ui/list/list";
import { listCode } from "@/components/ui/list/list.code";
import { Separator } from "@/components/ui/separator/separator";
import { Badge } from "@/components/ui/badge/badge";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs/tabs";

export default function ListComponentPage() {
  return (
    <div className="space-y-8">
      <DocsTitle
        title="List"
        description="Clean list component for displaying structured items with icons, badges, borders, hover states, and active selection."
      />

      <ImportSnippet importCode={`import { List } from "@/components/ui/list/list";`} />

      <InstallationBlock componentName="list" />

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
            tags={["React", "Tailwind", "List", "Layout"]}
          />
        </TabsContent>
      </Tabs>

      {/* Default */}
      <DocsComponent
        title="Default"
        description="Standard borderless list layout."
        preview={
          <div className="max-w-md w-full">
            <List>
              <ListItem startContent={<Icon icon="hugeicons:user-02" className="size-4" />}>
                User Account Settings
              </ListItem>
              <ListItem startContent={<Icon icon="hugeicons:notification-01" className="size-4" />}>
                Push Notifications & Alerts
              </ListItem>
              <ListItem startContent={<Icon icon="hugeicons:security-01" className="size-4" />}>
                Security & Two-Factor Authentication
              </ListItem>
            </List>
          </div>
        }
        code={`<List>
  <ListItem startContent={<Icon icon="hugeicons:user-02" />}>
    User Account Settings
  </ListItem>
  <ListItem startContent={<Icon icon="hugeicons:notification-01" />}>
    Notifications & Alerts
  </ListItem>
</List>`}
      />

      {/* Bordered */}
      <DocsComponent
        title="Bordered Variant"
        description="Encapsulated card list container with item dividers using variant='bordered'."
        preview={
          <div className="max-w-md w-full">
            <List variant="bordered">
              <ListItem
                startContent={<Icon icon="hugeicons:mail-01" className="size-4" />}
                endContent={<Badge size="sm">12 Unread</Badge>}
                isHoverable
              >
                Inbox Messages
              </ListItem>
              <ListItem
                startContent={<Icon icon="hugeicons:star" className="size-4" />}
                endContent={<span className="text-xs text-muted-foreground">3</span>}
                isHoverable
              >
                Starred Conversations
              </ListItem>

              <ListItem
                startContent={<Icon icon="hugeicons:delete-02" className="size-4" />}
                isHoverable
              >
                Trash & Archived Files
              </ListItem>
            </List>
          </div>
        }
        code={`<List variant="bordered">
  <ListItem startContent={<Icon icon="..." />} endContent={<Badge>12</Badge>} isHoverable>
    Inbox Messages
  </ListItem>
</List>`}
        props={["variant: 'default' | 'bordered' | 'separated'"]}
      />

      {/* Separated */}
      <DocsComponent
        title="Separated Cards Variant"
        description="Renders list items as decoupled floating card rows with variant='separated'."
        preview={
          <div className="max-w-md w-full">
            <List variant="separated">
              <ListItem
                className="border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 rounded-xl"
                startContent={<Icon icon="hugeicons:checkmark-circle-02" className="size-4 text-emerald-500" />}
                isActive
                isHoverable
              >
                Active Billing Plan — Pro Team
              </ListItem>
              <ListItem
                className="border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 rounded-xl"
                startContent={<Icon icon="hugeicons:alert-circle" className="size-4 text-amber-500" />}
                isHoverable
              >
                Payment Method Expiring Soon
              </ListItem>
            </List>
          </div>
        }
        code={`<List variant="separated">
  <ListItem isActive isHoverable>Active Billing Plan</ListItem>
</List>`}
      />

      <Separator label={<span className="px-2">API Reference</span>} gradient />

      {/* Props Table */}
      <DocsComponent
        title="Props — List & ListItem"
        description="Supported properties for List and ListItem components."
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
                  <td className="px-3 py-2 font-mono text-primary">variant (List)</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">
                    'default' | 'bordered' | 'separated'
                  </td>
                  <td className="px-3 py-2 text-muted-foreground">'default'</td>
                  <td className="px-3 py-2 text-muted-foreground">Container layout style variant.</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">startContent / endContent</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">ReactNode</td>
                  <td className="px-3 py-2 text-muted-foreground">—</td>
                  <td className="px-3 py-2 text-muted-foreground">Leading or trailing icons or badges inside ListItem.</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">isActive</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">boolean</td>
                  <td className="px-3 py-2 text-muted-foreground">false</td>
                  <td className="px-3 py-2 text-muted-foreground">Highlights item as selected/active.</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">isHoverable</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">boolean</td>
                  <td className="px-3 py-2 text-muted-foreground">false</td>
                  <td className="px-3 py-2 text-muted-foreground">Enables hover background highlight.</td>
                </tr>
                <tr>
                  <td className="px-3 py-2 font-mono text-primary">isDisabled</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">boolean</td>
                  <td className="px-3 py-2 text-muted-foreground">false</td>
                  <td className="px-3 py-2 text-muted-foreground">Disables item interactions.</td>
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
