"use client";

import { Icon } from "@iconify/react";
import * as React from "react";
import { AccessibilityCard } from "@/components/core/accessibilityCard";
import { CodeBlock } from "@/components/core/codeBlock";
import { DocsComponent } from "@/components/core/docsComponent";
import { DocsPagination } from "@/components/core/docsPagination";
import DocsTitle from "@/components/core/docsTitle";
import { ImportSnippet } from "@/components/core/importSnippet";
import { InstallationBlock } from "@/components/core/installationBlock";
import { Separator } from "@/components/ui/separator/separator";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs/tabs";
import { tabsCode } from "@/components/ui/tabs/tabs.code";

export default function TabsComponentPage() {
  const [closableTabs, setClosableTabs] = React.useState([
    { id: "tab1", title: "Dashboard", content: "Main Dashboard view panel." },
    {
      id: "tab2",
      title: "Settings",
      content: "Application preferences and configuration.",
    },
    {
      id: "tab3",
      title: "Analytics",
      content: "Traffic reports and performance metrics.",
    },
  ]);

  const handleCloseTab = (id: string) => {
    setClosableTabs(closableTabs.filter((t) => t.id !== id));
  };

  const [dynamicTabs, setDynamicTabs] = React.useState([
    { id: "dyn1", title: "Tab 1", content: "Content panel for Tab 1." },
    { id: "dyn2", title: "Tab 2", content: "Content panel for Tab 2." },
  ]);
  const [editingTabId, setEditingTabId] = React.useState<string | null>(null);
  const [editingTitle, setEditingTitle] = React.useState("");

  const handleAddTab = () => {
    const nextNum = dynamicTabs.length + 1;
    const newId = `dyn${Date.now()}`;
    setDynamicTabs([
      ...dynamicTabs,
      {
        id: newId,
        title: `Tab ${nextNum}`,
        content: `Content panel for Tab ${nextNum}`,
      },
    ]);
  };

  const handleStartRename = (
    e: React.MouseEvent,
    id: string,
    currentTitle: string,
  ) => {
    e.stopPropagation();
    setEditingTabId(id);
    setEditingTitle(currentTitle);
  };

  const handleSaveRename = (id: string) => {
    if (editingTitle.trim()) {
      setDynamicTabs(
        dynamicTabs.map((t) =>
          t.id === id ? { ...t, title: editingTitle.trim() } : t,
        ),
      );
    }
    setEditingTabId(null);
  };

  return (
    <div className="space-y-8">
      <DocsTitle
        title="Tabs"
        description="Organizes content into multiple panel views with animated transitions, 6 tab variants (default, contained, pills, underlined, bordered, vertical), scrollable navigation controls, closable tabs, and dynamic editable tabs."
      />

      <ImportSnippet
        importCode={`import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs/tabs";`}
      />

      <InstallationBlock componentName="tabs" />

      <CodeBlock
        code={tabsCode}
        componentName="tabs.tsx"
        description="Core implementation of the Tabs component."
        tags={["React", "Radix UI", "Tabs", "Closable", "Vertical"]}
      />

      <DocsComponent
        title="Default Contained"
        description="Standard tab navigation with contained pill background."
        preview={
          <div className="w-full">
            <Tabs defaultValue="account">
              <TabsList>
                <TabsTrigger
                  value="account"
                  variant="contained"
                  color="primary"
                >
                  Account Settings
                </TabsTrigger>
                <TabsTrigger
                  value="password"
                  variant="contained"
                  color="primary"
                >
                  Security
                </TabsTrigger>
                <TabsTrigger
                  value="billing"
                  variant="contained"
                  color="primary"
                >
                  Billing
                </TabsTrigger>
              </TabsList>
              <TabsContent
                value="account"
                className="p-4 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 mt-3"
              >
                <h4 className="text-sm font-bold">Account Profile</h4>
                <p className="text-xs text-zinc-500 mt-1">
                  Manage your public display credentials.
                </p>
              </TabsContent>
              <TabsContent
                value="password"
                className="p-4 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 mt-3"
              >
                <h4 className="text-sm font-bold">Security & Password</h4>
                <p className="text-xs text-zinc-500 mt-1">
                  Change your master password and enable 2FA.
                </p>
              </TabsContent>
              <TabsContent
                value="billing"
                className="p-4 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 mt-3"
              >
                <h4 className="text-sm font-bold">Billing & Invoices</h4>
                <p className="text-xs text-zinc-500 mt-1">
                  Update payment cards and download past receipts.
                </p>
              </TabsContent>
            </Tabs>
          </div>
        }
        code={`<Tabs defaultValue="account">
  <TabsList>
    <TabsTrigger value="account" variant="contained">Account</TabsTrigger>
    <TabsTrigger value="password" variant="contained">Security</TabsTrigger>
    <TabsTrigger value="billing" variant="contained">Billing</TabsTrigger>
  </TabsList>
  <TabsContent value="account">Account Content</TabsContent>
</Tabs>`}
      />

      <DocsComponent
        title="Closable Tabs (isClosable)"
        description="Enable individual tab closing with 'isClosable' and 'onClose'."
        preview={
          <div className="w-full">
            <Tabs defaultValue={closableTabs[0]?.id || "tab1"}>
              <TabsList>
                {closableTabs.map((t) => (
                  <TabsTrigger
                    key={t.id}
                    value={t.id}
                    isClosable={closableTabs.length > 1}
                    onClose={() => handleCloseTab(t.id)}
                  >
                    {t.title}
                  </TabsTrigger>
                ))}
              </TabsList>
              {closableTabs.map((t) => (
                <TabsContent
                  key={t.id}
                  value={t.id}
                  className="p-4 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 mt-3"
                >
                  <h4 className="text-sm font-bold">{t.title}</h4>
                  <p className="text-xs text-zinc-500 mt-1">{t.content}</p>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        }
        code={`<Tabs defaultValue="tab1">
  <TabsList>
    {tabs.map(t => (
      <TabsTrigger key={t.id} value={t.id} isClosable onClose={() => removeTab(t.id)}>
        {t.title}
      </TabsTrigger>
    ))}
  </TabsList>
</Tabs>`}
        props={["isClosable: boolean", "onClose: (e) => void"]}
      />

      <DocsComponent
        title="Addable & Editable Dynamic Tabs (addable)"
        description="Append new tabs dynamically with 'addable' and double-click or click the edit icon to rename tab titles in real time."
        preview={
          <div className="w-full">
            <Tabs defaultValue={dynamicTabs[0]?.id || "dyn1"}>
              <TabsList addable onAdd={handleAddTab}>
                {dynamicTabs.map((t) => (
                  <TabsTrigger key={t.id} value={t.id}>
                    {editingTabId === t.id ? (
                      <input
                        type="text"
                        value={editingTitle}
                        onChange={(e) => setEditingTitle(e.target.value)}
                        onBlur={() => handleSaveRename(t.id)}
                        onKeyDown={(e) => {
                          if (e.key === "Enter") handleSaveRename(t.id);
                        }}
                        onClick={(e) => e.stopPropagation()}
                        className="bg-transparent border-b border-sky-500 outline-none text-xs font-bold w-20 px-0.5"
                      />
                    ) : (
                      <div
                        className="flex items-center gap-1.5"
                        onDoubleClick={(e) =>
                          handleStartRename(e, t.id, t.title)
                        }
                      >
                        <span>{t.title}</span>
                        <span
                          role="button"
                          tabIndex={0}
                          onClick={(e) => handleStartRename(e, t.id, t.title)}
                          className="opacity-50 hover:opacity-100 p-0.5 rounded hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-opacity"
                        >
                          <Icon
                            icon="hugeicons:pencil-edit-01"
                            className="size-3"
                          />
                        </span>
                      </div>
                    )}
                  </TabsTrigger>
                ))}
              </TabsList>
              {dynamicTabs.map((t) => (
                <TabsContent
                  key={t.id}
                  value={t.id}
                  className="p-4 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 mt-3"
                >
                  <h4 className="text-sm font-bold">{t.title}</h4>
                  <p className="text-xs text-zinc-500 mt-1">{t.content}</p>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        }
        code={`<Tabs defaultValue="dyn1">
  <TabsList addable onAdd={handleAddTab}>
    {tabs.map(t => (
      <TabsTrigger key={t.id} value={t.id}>
        {t.title}
      </TabsTrigger>
    ))}
  </TabsList>
</Tabs>`}
        props={["addable: boolean", "onAdd: () => void"]}
      />

      <DocsComponent
        title="Vertical Orientation (orientation='vertical')"
        description="Stack tabs vertically on the left side with matching vertical panel alignment."
        preview={
          <div className="w-full max-w-xl">
            <Tabs defaultValue="v1" orientation="vertical" variant="vertical">
              <TabsList>
                <TabsTrigger
                  value="v1"
                  startContent={<Icon icon="hugeicons:user-02" />}
                >
                  Profile
                </TabsTrigger>
                <TabsTrigger
                  value="v2"
                  startContent={<Icon icon="hugeicons:notification-01" />}
                >
                  Notifications
                </TabsTrigger>
                <TabsTrigger
                  value="v3"
                  startContent={<Icon icon="hugeicons:security-check" />}
                >
                  Privacy
                </TabsTrigger>
              </TabsList>
              <TabsContent
                value="v1"
                className="p-4 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900"
              >
                <h4 className="text-sm font-bold">Profile Details</h4>
                <p className="text-xs text-zinc-500 mt-1">
                  Manage user avatar and preferences.
                </p>
              </TabsContent>
              <TabsContent
                value="v2"
                className="p-4 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900"
              >
                <h4 className="text-sm font-bold">Notification Channels</h4>
                <p className="text-xs text-zinc-500 mt-1">
                  Configure email and push alert settings.
                </p>
              </TabsContent>
              <TabsContent
                value="v3"
                className="p-4 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900"
              >
                <h4 className="text-sm font-bold">Privacy Settings</h4>
                <p className="text-xs text-zinc-500 mt-1">
                  Control data sharing preferences.
                </p>
              </TabsContent>
            </Tabs>
          </div>
        }
        code={`<Tabs orientation="vertical" variant="vertical">
  <TabsList>
    <TabsTrigger value="v1">Profile</TabsTrigger>
    <TabsTrigger value="v2">Notifications</TabsTrigger>
  </TabsList>
  <TabsContent value="v1">Profile Content</TabsContent>
</Tabs>`}
        props={["orientation: 'horizontal' | 'vertical'"]}
      />

      <DocsComponent
        title="Scrollable Navigation Arrows (isScrollable)"
        description="Enable automatic scroll navigation arrows for overflow tabs on narrow viewports."
        preview={
          <div className="w-full max-w-md">
            <Tabs defaultValue="s1">
              <TabsList isScrollable>
                <TabsTrigger value="s1">Tab 1</TabsTrigger>
                <TabsTrigger value="s2">Tab 2</TabsTrigger>
                <TabsTrigger value="s3">Tab 3</TabsTrigger>
                <TabsTrigger value="s4">Tab 4</TabsTrigger>
                <TabsTrigger value="s5">Tab 5</TabsTrigger>
                <TabsTrigger value="s6">Tab 6</TabsTrigger>
                <TabsTrigger value="s7">Tab 7</TabsTrigger>
              </TabsList>
            </Tabs>
          </div>
        }
        code={`<TabsList isScrollable>
  <TabsTrigger value="s1">Tab 1</TabsTrigger>
  ...
</TabsList>`}
        props={["isScrollable: boolean"]}
      />

      <DocsComponent
        title="Variants (default, contained, pills, underlined, bordered, vertical)"
        description="Comprehensive demonstration of all supported tab variants."
        preview={
          <div className="flex flex-col gap-6 w-full">
            <div>
              <span className="text-xs text-zinc-500 dark:text-zinc-400 block mb-2 font-semibold">
                1. Default Variant
              </span>
              <Tabs defaultValue="def1">
                <TabsList>
                  <TabsTrigger value="def1" variant="default">
                    Default 1
                  </TabsTrigger>
                  <TabsTrigger value="def2" variant="default">
                    Default 2
                  </TabsTrigger>
                </TabsList>
              </Tabs>
            </div>

            <div>
              <span className="text-xs text-zinc-500 dark:text-zinc-400 block mb-2 font-semibold">
                2. Contained Variant
              </span>
              <Tabs defaultValue="c1">
                <TabsList>
                  <TabsTrigger value="c1" variant="contained">
                    Contained 1
                  </TabsTrigger>
                  <TabsTrigger value="c2" variant="contained">
                    Contained 2
                  </TabsTrigger>
                </TabsList>
              </Tabs>
            </div>

            <div>
              <span className="text-xs text-zinc-500 dark:text-zinc-400 block mb-2 font-semibold">
                3. Pills Variant
              </span>
              <Tabs defaultValue="p1">
                <TabsList>
                  <TabsTrigger value="p1" variant="pills">
                    Pill 1
                  </TabsTrigger>
                  <TabsTrigger value="p2" variant="pills">
                    Pill 2
                  </TabsTrigger>
                </TabsList>
              </Tabs>
            </div>

            <div>
              <span className="text-xs text-zinc-500 dark:text-zinc-400 block mb-2 font-semibold">
                4. Underlined Variant
              </span>
              <Tabs defaultValue="u1">
                <TabsList background={false}>
                  <TabsTrigger value="u1" variant="underlined" color="primary">
                    Underline 1
                  </TabsTrigger>
                  <TabsTrigger value="u2" variant="underlined" color="primary">
                    Underline 2
                  </TabsTrigger>
                </TabsList>
              </Tabs>
            </div>

            <div>
              <span className="text-xs text-zinc-500 dark:text-zinc-400 block mb-2 font-semibold">
                5. Bordered Variant
              </span>
              <Tabs defaultValue="b1">
                <TabsList background={false}>
                  <TabsTrigger value="b1" variant="bordered">
                    Bordered 1
                  </TabsTrigger>
                  <TabsTrigger value="b2" variant="bordered">
                    Bordered 2
                  </TabsTrigger>
                </TabsList>
              </Tabs>
            </div>
          </div>
        }
        code={`<TabsTrigger variant="default">Default</TabsTrigger>
<TabsTrigger variant="contained">Contained</TabsTrigger>
<TabsTrigger variant="pills">Pills</TabsTrigger>
<TabsTrigger variant="underlined">Underlined</TabsTrigger>
<TabsTrigger variant="bordered">Bordered</TabsTrigger>`}
        props={[
          "variant: 'default' | 'contained' | 'pills' | 'underlined' | 'bordered' | 'vertical'",
        ]}
      />

      <Separator label={<span className="px-2">API Reference</span>} gradient />

      <DocsComponent
        title="Props — Tabs & TabsTrigger"
        description="Supported properties for Tabs."
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
                    'default' | 'contained' | 'pills' | 'underlined' |
                    'bordered' | 'vertical'
                  </td>
                  <td className="px-3 py-2 text-muted-foreground">'default'</td>
                  <td className="px-3 py-2 text-muted-foreground">
                    Visual style of active tab trigger.
                  </td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">
                    isClosable
                  </td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">
                    boolean
                  </td>
                  <td className="px-3 py-2 text-muted-foreground">false</td>
                  <td className="px-3 py-2 text-muted-foreground">
                    Renders a close ('x') icon button on the trigger.
                  </td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">addable</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">
                    boolean
                  </td>
                  <td className="px-3 py-2 text-muted-foreground">false</td>
                  <td className="px-3 py-2 text-muted-foreground">
                    Renders '+' button to dynamically append new tabs.
                  </td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">
                    isScrollable
                  </td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">
                    boolean
                  </td>
                  <td className="px-3 py-2 text-muted-foreground">false</td>
                  <td className="px-3 py-2 text-muted-foreground">
                    Renders left and right scroll navigation arrows.
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
