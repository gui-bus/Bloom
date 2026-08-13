"use client";

import * as React from "react";
import { AccessibilityCard } from "@/components/core/accessibilityCard";
import { CodeBlock } from "@/components/core/codeBlock";
import { DocsComponent } from "@/components/core/docsComponent";
import { DocsPagination } from "@/components/core/docsPagination";
import DocsTitle from "@/components/core/docsTitle";
import { ImportSnippet } from "@/components/core/importSnippet";
import { InstallationBlock } from "@/components/core/installationBlock";
import {
  RadioGroup,
  RadioGroupItem,
} from "@/components/ui/radioGroup/radioGroup";
import { radioGroupCode } from "@/components/ui/radioGroup/radioGroup.code";
import { Separator } from "@/components/ui/separator/separator";

function RadioGroupVariantsDemo() {
  return (
    <div className="flex flex-col gap-6 w-full max-w-xl">
      <div className="flex flex-col gap-2">
        <span className="text-xs font-semibold text-zinc-500">
          Default & Bordered
        </span>
        <RadioGroup columns={2} defaultValue="a" variant="default">
          <RadioGroupItem
            isCard
            value="a"
            label="Default Option A"
            description="Standard style"
          />
          <RadioGroupItem
            isCard
            value="b"
            variant="bordered"
            label="Bordered Option B"
            description="Bordered style override"
          />
        </RadioGroup>
      </div>
      <div className="flex flex-col gap-2">
        <span className="text-xs font-semibold text-zinc-500">
          Flat & Filled
        </span>
        <RadioGroup columns={2} defaultValue="c" variant="flat">
          <RadioGroupItem
            isCard
            value="c"
            label="Flat Option C"
            description="Flat style"
          />
          <RadioGroupItem
            isCard
            value="d"
            variant="filled"
            label="Filled Option D"
            description="Filled style override"
          />
        </RadioGroup>
      </div>
      <div className="flex flex-col gap-2">
        <span className="text-xs font-semibold text-zinc-500">
          Glow & Glassmorphism
        </span>
        <RadioGroup columns={2} defaultValue="e" variant="glow">
          <RadioGroupItem
            isCard
            value="e"
            label="Glow Option E"
            description="Glow style"
          />
          <RadioGroupItem
            isCard
            value="f"
            variant="glassmorphism"
            label="Glassmorphism Option F"
            description="Glassmorphism override"
          />
        </RadioGroup>
      </div>
      <div className="flex flex-col gap-2">
        <span className="text-xs font-semibold text-zinc-500">
          Gradient Border & Underlined
        </span>
        <RadioGroup columns={2} defaultValue="g" variant="gradient-border">
          <RadioGroupItem
            isCard
            value="g"
            label="Gradient Option G"
            description="Gradient style"
          />
          <RadioGroupItem
            isCard
            value="h"
            variant="underlined"
            label="Underlined Option H"
            description="Underlined style override"
          />
        </RadioGroup>
      </div>
    </div>
  );
}

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

      <CodeBlock
        code={radioGroupCode}
        componentName="radioGroup.tsx"
        description="Core implementation of the RadioGroup component."
        tags={["React", "Radix UI", "RadioGroup", "Form", "Cards"]}
      />

      <DocsComponent
        title="Default"
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

      <DocsComponent
        title="Variants"
        description="Defines the visual appearance of the radio group items when used as selection cards."
        preview={<RadioGroupVariantsDemo />}
        code={`<RadioGroup variant="default">
  <RadioGroupItem isCard value="a" label="Default" />
</RadioGroup>

<RadioGroup variant="bordered">
  <RadioGroupItem isCard value="b" label="Bordered" />
</RadioGroup>`}
      />

      <DocsComponent
        title="Selectable Card Mode with Prices and Badges"
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

      <AccessibilityCard />

      <Separator label={<span className="px-2">API Reference</span>} gradient />

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
