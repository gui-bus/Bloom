"use client";

import { Icon } from "@iconify/react";
import { CodeBlock } from "@/components/core/codeBlock";
import { DocsComponent } from "@/components/core/docsComponent";
import { DocsPagination } from "@/components/core/docsPagination";
import DocsTitle from "@/components/core/docsTitle";
import { ImportSnippet } from "@/components/core/importSnippet";
import { InstallationBlock } from "@/components/core/installationBlock";
import { Badge } from "@/components/ui/badge/badge";
import { List, ListItem } from "@/components/ui/list/list";
import { listCode } from "@/components/ui/list/list.code";

export default function ListComponentPage() {
  return (
    <div className="space-y-8">
      <DocsTitle
        title="List"
        description="Clean list component for displaying structured items with icons, badges, borders, hover states, and active selection."
      />

      <ImportSnippet
        importCode={`import { List } from "@/components/ui/list/list";`}
      />

      <InstallationBlock componentName="list" />

      <CodeBlock
        code={listCode}
        componentName="list.tsx"
        description="Core implementation of the List component."
        tags={["React", "Tailwind", "List", "Layout"]}
      />

      <DocsComponent
        title="Default"
        description="Standard borderless list layout."
        preview={
          <div className="max-w-md w-full">
            <List>
              <ListItem
                startContent={
                  <Icon icon="hugeicons:user-02" className="size-4" />
                }
              >
                User Account Settings
              </ListItem>
              <ListItem
                startContent={
                  <Icon icon="hugeicons:notification-01" className="size-4" />
                }
              >
                Push Notifications & Alerts
              </ListItem>
              <ListItem
                startContent={
                  <Icon icon="hugeicons:security-01" className="size-4" />
                }
              >
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

      <DocsComponent
        title="Variants"
        description="List supports multiple layouts: bordered cards with internal separators, or separated floating items."
        preview={
          <div className="max-w-md w-full space-y-6">
            <div className="space-y-2">
              <span className="text-[10px] font-bold uppercase tracking-wider text-zinc-400 dark:text-zinc-500">
                Bordered
              </span>
              <List variant="bordered">
                <ListItem
                  startContent={
                    <Icon icon="hugeicons:mail-01" className="size-4" />
                  }
                  endContent={<Badge size="sm">12 Unread</Badge>}
                  isHoverable
                >
                  Inbox Messages
                </ListItem>
                <ListItem
                  startContent={
                    <Icon icon="hugeicons:star" className="size-4" />
                  }
                  endContent={
                    <span className="text-xs text-zinc-400 dark:text-zinc-500">
                      3
                    </span>
                  }
                  isHoverable
                >
                  Starred Conversations
                </ListItem>
                <ListItem
                  startContent={
                    <Icon icon="hugeicons:delete-02" className="size-4" />
                  }
                  isHoverable
                >
                  Trash & Archived Files
                </ListItem>
              </List>
            </div>

            <div className="space-y-2">
              <span className="text-[10px] font-bold uppercase tracking-wider text-zinc-400 dark:text-zinc-500">
                Separated
              </span>
              <List variant="separated">
                <ListItem
                  className="border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 rounded-xl"
                  startContent={
                    <Icon
                      icon="hugeicons:checkmark-circle-02"
                      className="size-4 text-emerald-500"
                    />
                  }
                  isActive
                  isHoverable
                >
                  Active Billing Plan — Pro Team
                </ListItem>
                <ListItem
                  className="border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 rounded-xl"
                  startContent={
                    <Icon
                      icon="hugeicons:alert-circle"
                      className="size-4 text-amber-500"
                    />
                  }
                  isHoverable
                >
                  Payment Method Expiring Soon
                </ListItem>
              </List>
            </div>
          </div>
        }
        code={`// Bordered Variant
<List variant="bordered">
  <ListItem startContent={<Icon icon="hugeicons:mail-01" />} isHoverable>
    Inbox Messages
  </ListItem>
</List>

// Separated Variant
<List variant="separated">
  <ListItem className="border rounded-xl" isHoverable>
    Floating Row Item
  </ListItem>
</List>`}
        props={["variant: 'default' | 'bordered' | 'separated'"]}
      />

      <DocsComponent
        title="Props — List & ListItem"
        description="Supported properties for List and ListItem components."
        preview={
          <div className="overflow-x-auto rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-zinc-200 dark:border-zinc-800 bg-zinc-100 dark:bg-zinc-800/50">
                  <th className="px-4 py-3 text-left font-bold text-zinc-900 dark:text-zinc-100">
                    Prop
                  </th>
                  <th className="px-4 py-3 text-left font-bold text-zinc-900 dark:text-zinc-100">
                    Type
                  </th>
                  <th className="px-4 py-3 text-left font-bold text-zinc-900 dark:text-zinc-100">
                    Default
                  </th>
                  <th className="px-4 py-3 text-left font-bold text-zinc-900 dark:text-zinc-100">
                    Description
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-200 dark:divide-zinc-800">
                <tr>
                  <td className="px-4 py-3 font-mono text-xs text-sky-500">
                    variant
                  </td>
                  <td className="px-4 py-3 text-zinc-600 dark:text-zinc-300">
                    'default' | 'bordered' | 'separated'
                  </td>
                  <td className="px-4 py-3 text-zinc-400">'default'</td>
                  <td className="px-4 py-3 text-zinc-600 dark:text-zinc-300">
                    Style variant of the list layout container.
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-mono text-xs text-sky-500">
                    startContent
                  </td>
                  <td className="px-4 py-3 text-zinc-600 dark:text-zinc-300">
                    ReactNode
                  </td>
                  <td className="px-4 py-3 text-zinc-400">—</td>
                  <td className="px-4 py-3 text-zinc-600 dark:text-zinc-300">
                    Element (icon, avatar) rendered on the left of list items.
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-mono text-xs text-sky-500">
                    endContent
                  </td>
                  <td className="px-4 py-3 text-zinc-600 dark:text-zinc-300">
                    ReactNode
                  </td>
                  <td className="px-4 py-3 text-zinc-400">—</td>
                  <td className="px-4 py-3 text-zinc-600 dark:text-zinc-300">
                    Element (badge, indicator) rendered on the right of list
                    items.
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-mono text-xs text-sky-500">
                    isActive
                  </td>
                  <td className="px-4 py-3 text-zinc-600 dark:text-zinc-300">
                    boolean
                  </td>
                  <td className="px-4 py-3 text-zinc-400">false</td>
                  <td className="px-4 py-3 text-zinc-600 dark:text-zinc-300">
                    Marks item as active with colored background.
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-mono text-xs text-sky-500">
                    isHoverable
                  </td>
                  <td className="px-4 py-3 text-zinc-600 dark:text-zinc-300">
                    boolean
                  </td>
                  <td className="px-4 py-3 text-zinc-400">false</td>
                  <td className="px-4 py-3 text-zinc-600 dark:text-zinc-300">
                    Enables hover style feedback and pointer cursor.
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
