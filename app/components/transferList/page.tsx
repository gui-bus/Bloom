"use client";

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

      <CodeBlock
        code={transferListCode}
        componentName="transferList.tsx"
        description="Core implementation of the TransferList component displaying dual panels, multiple/all navigation click controls, and checkbox items."
        tags={["React", "Tailwind", "Form", "Select", "TransferList"]}
      />

      <DocsComponent
        title="Default"
        description="Features available, checked, and disabled items that can be transferred left or right."
        props={[
          "leftItems: TransferItem[]",
          "rightItems: TransferItem[]",
          "onChange: (left: TransferItem[], right: TransferItem[]) => void",
        ]}
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
        props={["variant: 'default' | 'bordered' | 'flat'"]}
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
        props={["isDisabled: boolean"]}
        preview={
          <div className="w-full">
            <TransferList leftItems={left} rightItems={right} isDisabled />
          </div>
        }
        code={`<TransferList leftItems={left} rightItems={right} isDisabled />`}
      />

      <Separator label={<span className="px-2">API Reference</span>} gradient />

      <DocsComponent
        title="Props — TransferList"
        description="Properties for configuring the TransferList component."
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
                  <td className="px-3 py-2 font-mono text-primary">
                    leftItems
                  </td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">
                    TransferItem[]
                  </td>
                  <td className="px-3 py-2 text-muted-foreground">[]</td>
                  <td className="px-3 py-2 text-muted-foreground">
                    List of elements in the left panel.
                  </td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">
                    rightItems
                  </td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">
                    TransferItem[]
                  </td>
                  <td className="px-3 py-2 text-muted-foreground">[]</td>
                  <td className="px-3 py-2 text-muted-foreground">
                    List of elements in the right panel.
                  </td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">
                    leftTitle
                  </td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">
                    string
                  </td>
                  <td className="px-3 py-2 text-muted-foreground">
                    &ldquo;Available Items&rdquo;
                  </td>
                  <td className="px-3 py-2 text-muted-foreground">
                    Header label for the left panel.
                  </td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">
                    rightTitle
                  </td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">
                    string
                  </td>
                  <td className="px-3 py-2 text-muted-foreground">
                    &ldquo;Selected Items&rdquo;
                  </td>
                  <td className="px-3 py-2 text-muted-foreground">
                    Header label for the right panel.
                  </td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">onChange</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">
                    {"(left: TransferItem[], right: TransferItem[]) => void"}
                  </td>
                  <td className="px-3 py-2 text-muted-foreground">undefined</td>
                  <td className="px-3 py-2 text-muted-foreground">
                    Callback fired when items are transferred between pools.
                  </td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">variant</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">
                    &lsquo;default&rsquo; | &lsquo;bordered&rsquo; |
                    &lsquo;flat&rsquo;
                  </td>
                  <td className="px-3 py-2 text-muted-foreground">
                    &lsquo;default&rsquo;
                  </td>
                  <td className="px-3 py-2 text-muted-foreground">
                    The border/background styling of list boxes.
                  </td>
                </tr>
                <tr>
                  <td className="px-3 py-2 font-mono text-primary">radius</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">
                    keyof typeof designRadius
                  </td>
                  <td className="px-3 py-2 text-muted-foreground">
                    &lsquo;md&rsquo;
                  </td>
                  <td className="px-3 py-2 text-muted-foreground">
                    Corner radius of list boxes.
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
