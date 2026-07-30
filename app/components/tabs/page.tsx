"use client";

import * as React from "react";
import { Icon } from "@iconify/react";
import { CodeBlock } from "@/components/core/codeBlock";
import { DocsComponent } from "@/components/core/docsComponent";
import DocsTitle from "@/components/core/docsTitle";
import {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
} from "@/components/ui/tabs/tabs";
import { tabsCode } from "@/components/ui/tabs/tabs.code";
import { Separator } from "@/components/ui/separator/separator";

export default function TabsComponentPage() {
  return (
    <div className="space-y-8">
      <DocsTitle
        title="Tabs"
        description="Organizes content into multiple panel views with animated transitions, tab variants (contained, pills, underline, bordered), badges, and icons."
      />

      <Tabs defaultValue="tabs">
        <TabsList background={false}>
          <TabsTrigger
            value="tabs"
            startContent={<Icon icon="devicon:react" className="size-5" />}
          >
            tabs.tsx
          </TabsTrigger>
        </TabsList>

        <TabsContent value="tabs">
          <CodeBlock
            code={tabsCode}
            componentName="tabs.tsx"
            description="Core implementation of the Tabs component."
            tags={["React", "Radix UI", "Tabs", "Navigation", "Framer Motion"]}
          />
        </TabsContent>
      </Tabs>

      {/* Default */}
      <DocsComponent
        title="Default"
        description="Standard tab navigation with contained pill background."
        preview={
          <div className="w-full max-w-lg">
            <Tabs defaultValue="account">
              <TabsList>
                <TabsTrigger value="account" variant="contained" color="primary">
                  Account Settings
                </TabsTrigger>
                <TabsTrigger value="password" variant="contained" color="primary">
                  Security
                </TabsTrigger>
                <TabsTrigger value="billing" variant="contained" color="primary">
                  Billing
                </TabsTrigger>
              </TabsList>
              <TabsContent value="account" className="p-4 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 mt-3">
                <h4 className="text-sm font-bold">Account Profile</h4>
                <p className="text-xs text-zinc-500 mt-1">Manage your public display credentials.</p>
              </TabsContent>
              <TabsContent value="password" className="p-4 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 mt-3">
                <h4 className="text-sm font-bold">Security & Password</h4>
                <p className="text-xs text-zinc-500 mt-1">Change your master password and enable 2FA.</p>
              </TabsContent>
              <TabsContent value="billing" className="p-4 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 mt-3">
                <h4 className="text-sm font-bold">Billing & Invoices</h4>
                <p className="text-xs text-zinc-500 mt-1">Update payment cards and download past receipts.</p>
              </TabsContent>
            </Tabs>
          </div>
        }
        code={`<Tabs defaultValue="account">
  <TabsList>
    <TabsTrigger value="account" variant="contained">Account</TabsTrigger>
    <TabsTrigger value="password" variant="contained">Security</TabsTrigger>
  </TabsList>
  <TabsContent value="account">Account Content</TabsContent>
</Tabs>`}
      />

      {/* Underline Variant */}
      <DocsComponent
        title="Underline Variant"
        description="Clean tab line indicator style for header sections."
        preview={
          <div className="w-full max-w-lg">
            <Tabs defaultValue="overview">
              <TabsList background={false}>
                <TabsTrigger value="overview" variant="underline" color="primary">
                  Overview
                </TabsTrigger>
                <TabsTrigger value="analytics" variant="underline" color="primary" badgeContent="NEW">
                  Analytics
                </TabsTrigger>
                <TabsTrigger value="reports" variant="underline" color="primary">
                  Reports
                </TabsTrigger>
              </TabsList>
              <TabsContent value="overview" className="p-4 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 mt-3">
                <p className="text-xs text-zinc-600 dark:text-zinc-300">Overview dashboard data panel.</p>
              </TabsContent>
              <TabsContent value="analytics" className="p-4 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 mt-3">
                <p className="text-xs text-zinc-600 dark:text-zinc-300">Real-time traffic analytics chart.</p>
              </TabsContent>
            </Tabs>
          </div>
        }
        code={`<TabsList background={false}>
  <TabsTrigger value="overview" variant="underline" color="primary">Overview</TabsTrigger>
  <TabsTrigger value="analytics" variant="underline" color="primary" badgeContent="NEW">Analytics</TabsTrigger>
</TabsList>`}
        props={["variant: 'contained' | 'pills' | 'underline' | 'bordered' | 'ghost'"]}
      />

      <Separator label={<span className="px-2">API Reference</span>} gradient />

      {/* Props Table */}
      <DocsComponent
        title="Props — TabsTrigger"
        description="Supported properties for TabsTrigger."
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
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">
                    'default' | 'bordered' | 'ghost' | 'underline' | 'pills' | 'contained'
                  </td>
                  <td className="px-3 py-2 text-muted-foreground">'default'</td>
                  <td className="px-3 py-2 text-muted-foreground">Visual style of the active tab trigger.</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">color</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">
                    'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'danger'
                  </td>
                  <td className="px-3 py-2 text-muted-foreground">'primary'</td>
                  <td className="px-3 py-2 text-muted-foreground">Active highlight color palette.</td>
                </tr>
                <tr>
                  <td className="px-3 py-2 font-mono text-primary">badgeContent</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">string</td>
                  <td className="px-3 py-2 text-muted-foreground">—</td>
                  <td className="px-3 py-2 text-muted-foreground">Notification count or 'NEW' chip label text.</td>
                </tr>
              </tbody>
            </table>
          </div>
        }
      />
    </div>
  );
}
