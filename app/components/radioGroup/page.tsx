"use client";

import { ImportSnippet } from "@/components/core/importSnippet";
import { DocsPagination } from "@/components/core/docsPagination";
import { InstallationBlock } from "@/components/core/installationBlock";
import * as React from "react";
import { Icon } from "@iconify/react";
import { CodeBlock } from "@/components/core/codeBlock";
import { DocsComponent } from "@/components/core/docsComponent";
import DocsTitle from "@/components/core/docsTitle";
import {
  RadioGroup,
  RadioGroupItem,
} from "@/components/ui/radioGroup/radioGroup";
import { radioGroupCode } from "@/components/ui/radioGroup/radioGroup.code";
import { Separator } from "@/components/ui/separator/separator";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs/tabs";

export default function RadioGroupComponentPage() {
  const [selectedPlan, setSelectedPlan] = React.useState("pro");

  return (
    <div className="space-y-8">
      <DocsTitle
        title="Radio Group"
        description="A single-choice selection group featuring animated dot indicators, interactive selection cards, grid layout columns, and custom price badges."
      />

      <ImportSnippet
        importCode={`import { RadioGroup, RadioGroupItem } from "@/components/ui/radioGroup/radioGroup";`}
      />

      <InstallationBlock componentName="radioGroup" />

      <Tabs defaultValue="radioGroup">
        <TabsList background={false}>
          <TabsTrigger
            value="radioGroup"
            startContent={<Icon icon="devicon:react" className="size-5" />}
          >
            radioGroup.tsx
          </TabsTrigger>
        </TabsList>

        <TabsContent value="radioGroup">
          <CodeBlock
            code={radioGroupCode}
            componentName="radioGroup.tsx"
            description="Core implementation of the RadioGroup component."
            tags={["React", "Radix UI", "RadioGroup", "Form", "Cards"]}
          />
        </TabsContent>
      </Tabs>

      {/* Default */}
      <DocsComponent
        title="Default Selection"
        description="Standard radio buttons with smooth CSS indicator scale animations."
        preview={
          <div className="max-w-xs w-full">
            <RadioGroup defaultValue="default">
              <RadioGroupItem
                value="default"
                label="Standard Resolution (1080p)"
              />
              <RadioGroupItem value="high" label="High Definition (4K HDR)" />
              <RadioGroupItem value="compact" label="Bandwidth Saver (720p)" />
            </RadioGroup>
          </div>
        }
        code={`<RadioGroup defaultValue="default">
  <RadioGroupItem value="default" label="Standard Resolution (1080p)" />
  <RadioGroupItem value="high" label="High Definition (4K HDR)" />
</RadioGroup>`}
      />

      {/* Card Selection Mode (isCard) */}
      <DocsComponent
        title="Selectable Card Mode (isCard) with Prices & Badges"
        description="Interactive plan selection cards featuring animated borders, icons, price tags, and badges using 'isCard'."
        preview={
          <div className="w-full max-w-xl">
            <RadioGroup
              columns={2}
              value={selectedPlan}
              onValueChange={setSelectedPlan}
            >
              <RadioGroupItem
                isCard
                value="starter"
                label="Hobby Plan"
                price="Free"
                description="Ideal for individual developers & side projects."
                icon="hugeicons:developer"
              />
              <RadioGroupItem
                isCard
                value="pro"
                label="Pro Team"
                price="$29/mo"
                badge="Popular"
                description="Unlimited team members & 24/7 priority support."
                icon="hugeicons:rocket"
              />
            </RadioGroup>
          </div>
        }
        code={`<RadioGroup columns={2} value={selectedPlan} onValueChange={setSelectedPlan}>
  <RadioGroupItem
    isCard
    value="starter"
    label="Hobby Plan"
    price="Free"
    description="For side projects."
  />
  <RadioGroupItem
    isCard
    value="pro"
    label="Pro Team"
    price="$29/mo"
    badge="Popular"
    description="Unlimited team members."
  />
</RadioGroup>`}
        props={[
          "isCard: boolean",
          "price: string",
          "badge: ReactNode",
          "icon: string",
        ]}
      />

      {/* Grid Layout & Columns */}
      <DocsComponent
        title="Grid Layout & Horizontal Orientation"
        description="Arrange items in grid columns (columns={3}) or horizontal flex row (orientation='horizontal')."
        preview={
          <div className="w-full">
            <RadioGroup
              columns={3}
              defaultValue="monthly"
              label="Billing Frequency"
            >
              <RadioGroupItem
                isCard
                value="monthly"
                label="Monthly Billing"
                price="$12/mo"
              />
              <RadioGroupItem
                isCard
                value="annual"
                label="Annual Billing"
                price="$9/mo"
                badge="Save 25%"
              />
              <RadioGroupItem
                isCard
                value="lifetime"
                label="Lifetime Access"
                price="$299"
              />
            </RadioGroup>
          </div>
        }
        code={`<RadioGroup columns={3} defaultValue="monthly" label="Billing Frequency">
  <RadioGroupItem isCard value="monthly" label="Monthly" price="$12/mo" />
  <RadioGroupItem isCard value="annual" label="Annual" price="$9/mo" badge="Save 25%" />
</RadioGroup>`}
        props={[
          "columns: 1 | 2 | 3 | 4 | 5 | 6",
          "orientation: 'horizontal' | 'vertical'",
        ]}
      />

      <Separator label={<span className="px-2">API Reference</span>} gradient />

      {/* Props Table */}
      <DocsComponent
        title="Props — RadioGroup & RadioGroupItem"
        description="Supported properties for RadioGroup components."
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
                  <td className="px-3 py-2 font-mono text-primary">isCard</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">
                    boolean
                  </td>
                  <td className="px-3 py-2 text-muted-foreground">false</td>
                  <td className="px-3 py-2 text-muted-foreground">
                    Renders radio option as an interactive selection card.
                  </td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">columns</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">
                    1 | 2 | 3 | 4 | 5 | 6
                  </td>
                  <td className="px-3 py-2 text-muted-foreground">—</td>
                  <td className="px-3 py-2 text-muted-foreground">
                    Arranges radio cards into responsive grid columns.
                  </td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">price</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">
                    string
                  </td>
                  <td className="px-3 py-2 text-muted-foreground">—</td>
                  <td className="px-3 py-2 text-muted-foreground">
                    Right-aligned price tag rendered inside card items.
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
