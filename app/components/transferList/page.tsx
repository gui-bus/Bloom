"use client";

import { Icon } from "@iconify/react";
import * as React from "react";
import { CodeBlock } from "@/components/core/codeBlock";
import { DocsComponent } from "@/components/core/docsComponent";
import { DocsPagination } from "@/components/core/docsPagination";
import DocsTitle from "@/components/core/docsTitle";
import { ImportSnippet } from "@/components/core/importSnippet";
import { InstallationBlock } from "@/components/core/installationBlock";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs/tabs";
import {
  type TransferItem,
  TransferList,
} from "@/components/ui/transferList/transferList";
import { transferListCode } from "@/components/ui/transferList/transferList.code";

export default function TransferListPage() {
  const [left, setLeft] = React.useState<TransferItem[]>([
    { id: "1", label: "Dashboard Module" },
    { id: "2", label: "Billing Module" },
    { id: "3", label: "API Configuration", disabled: true },
    { id: "4", label: "User Management" },
    { id: "5", label: "Localization Strings" },
  ]);

  const [right, setRight] = React.useState<TransferItem[]>([
    { id: "6", label: "Database Migration Scripts" },
  ]);

  return (
    <div className="space-y-8">
      <DocsTitle
        title="Transfer List"
        description="A dual-list selector box that lets users move active items between an available pool and a selected destination."
      />

      <ImportSnippet
        importCode={`import { TransferList } from "@/components/ui/transferList/transferList";`}
      />

      <InstallationBlock componentName="transferList" />

      <Tabs defaultValue="transferList">
        <TabsList background={false}>
          <TabsTrigger
            value="transferList"
            startContent={<Icon icon="devicon:react" className="size-5" />}
          >
            transferList.tsx
          </TabsTrigger>
        </TabsList>

        <TabsContent value="transferList">
          <CodeBlock
            code={transferListCode}
            componentName="transferList.tsx"
            description="Core implementation of the TransferList component displaying dual panels, multiple/all navigation click controls, and checkbox items."
            tags={["React", "Tailwind", "Form", "Select", "TransferList"]}
          />
        </TabsContent>
      </Tabs>

      <DocsComponent
        title="Default"
        description="Features available, checked, and disabled items that can be transferred left or right."
        preview={
          <div className="w-full">
            <TransferList
              leftItems={left}
              rightItems={right}
              onChange={(newLeft, newRight) => {
                setLeft(newLeft);
                setRight(newRight);
              }}
            />
          </div>
        }
        code={`const [left, setLeft] = React.useState([
  { id: "1", label: "Dashboard Module" },
  { id: "2", label: "Billing Module" },
  { id: "3", label: "API Configuration", disabled: true },
  ...
]);

const [right, setRight] = React.useState([
  { id: "6", label: "Database Migration Scripts" }
]);

<TransferList
  leftItems={left}
  rightItems={right}
  onChange={(newLeft, newRight) => {
    setLeft(newLeft);
    setRight(newRight);
  }}
/>`}
      />

      <DocsComponent
        title="Variants"
        description="Supports default, flat, and bordered container panels."
        preview={
          <div className="w-full space-y-8">
            <div>
              <span className="text-xs font-mono text-muted-foreground block mb-2">
                variant="flat"
              </span>
              <TransferList
                leftItems={left}
                rightItems={right}
                variant="flat"
              />
            </div>
            <div>
              <span className="text-xs font-mono text-muted-foreground block mb-2">
                variant="bordered"
              </span>
              <TransferList
                leftItems={left}
                rightItems={right}
                variant="bordered"
              />
            </div>
          </div>
        }
        code={`<TransferList leftItems={left} rightItems={right} variant="flat" />
<TransferList leftItems={left} rightItems={right} variant="bordered" />`}
      />

      <DocsComponent
        title="Disabled State"
        description="Fades list items and blocks all item checkboxes and movement buttons."
        preview={
          <div className="w-full">
            <TransferList leftItems={left} rightItems={right} isDisabled />
          </div>
        }
        code={`<TransferList leftItems={left} rightItems={right} isDisabled />`}
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
                  leftItems
                </td>
                <td className="px-4 py-3 font-mono text-primary">
                  TransferItem[]
                </td>
                <td className="px-4 py-3 font-mono">[]</td>
                <td className="px-4 py-3">
                  List of elements in the left panel.
                </td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-mono text-zinc-900 dark:text-zinc-100">
                  rightItems
                </td>
                <td className="px-4 py-3 font-mono text-primary">
                  TransferItem[]
                </td>
                <td className="px-4 py-3 font-mono">[]</td>
                <td className="px-4 py-3">
                  List of elements in the right panel.
                </td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-mono text-zinc-900 dark:text-zinc-100">
                  leftTitle
                </td>
                <td className="px-4 py-3 font-mono text-primary">string</td>
                <td className="px-4 py-3 font-mono">"Available Items"</td>
                <td className="px-4 py-3">Header label for left card.</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-mono text-zinc-900 dark:text-zinc-100">
                  rightTitle
                </td>
                <td className="px-4 py-3 font-mono text-primary">string</td>
                <td className="px-4 py-3 font-mono">"Selected Items"</td>
                <td className="px-4 py-3">Header label for right card.</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-mono text-zinc-900 dark:text-zinc-100">
                  onChange
                </td>
                <td className="px-4 py-3 font-mono text-primary">
                  (left: TransferItem[], right: TransferItem[]) =&gt; void
                </td>
                <td className="px-4 py-3 font-mono">undefined</td>
                <td className="px-4 py-3">
                  Callback fired when items are transferred between pools.
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
                <td className="px-4 py-3">
                  The border/background styling of list boxes.
                </td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-mono text-zinc-900 dark:text-zinc-100">
                  radius
                </td>
                <td className="px-4 py-3 font-mono text-primary">
                  keyof typeof designRadius
                </td>
                <td className="px-4 py-3 font-mono">"md"</td>
                <td className="px-4 py-3">Corner radius of list boxes.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <DocsPagination />
    </div>
  );
}
