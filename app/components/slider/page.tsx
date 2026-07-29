import type { Metadata } from "next";
import { Icon } from "@iconify/react";
import { CodeBlock } from "@/components/core/codeBlock";
import { DocsComponent } from "@/components/core/docsComponent";
import DocsTitle from "@/components/core/docsTitle";

export const metadata: Metadata = {
  title: "Slider",
  description: "An input control for selecting a single numeric value or a range of values by sliding a thumb.",
};

import { Slider } from "@/components/ui/slider/slider";
import { sliderCode } from "@/components/ui/slider/slider.code";
import { Separator } from "@/components/ui/separator/separator";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs/tabs";

export default function SliderComponentPage() {
  return (
    <main className="p-5 space-y-8">
      <DocsTitle
        title="Slider"
        description="A fluid slider control built on Radix UI Slider primitive. Supports single values or ranges, numeric preview badges, scale sizes, and semantic color themes."
      />

      <Tabs defaultValue="slider">
        <TabsList background={false}>
          <TabsTrigger
            value="slider"
            startContent={<Icon icon="devicon:react" className="size-5" />}
          >
            slider.tsx
          </TabsTrigger>
        </TabsList>

        <TabsContent value="slider">
          <CodeBlock
            code={sliderCode}
            componentName="slider.tsx"
            description="Core implementation of the Slider component."
            tags={["React", "Radix UI", "Tailwind", "Forms"]}
          />
        </TabsContent>
      </Tabs>

      {/* Basic Usage */}
      <DocsComponent
        title="Basic Usage"
        description="Standard single value slider."
        preview={
          <div className="w-full max-w-sm">
            <Slider label="Volume" showValue defaultValue={[60]} max={100} step={1} />
          </div>
        }
        code={`<div className="w-full max-w-sm">
  <Slider label="Volume" showValue defaultValue={[60]} max={100} step={1} />
</div>`}
      />

      {/* Range Slider */}
      <DocsComponent
        title="Range Selection"
        description="Pass multiple values in an array to create a range slider."
        preview={
          <div className="w-full max-w-sm">
            <Slider label="Price Range" showValue defaultValue={[20, 80]} max={100} step={1} />
          </div>
        }
        code={`<div className="w-full max-w-sm">
  <Slider label="Price Range" showValue defaultValue={[20, 80]} max={100} step={1} />
</div>`}
      />

      {/* Colors */}
      <DocsComponent
        title="Colors"
        description="Customize the active range track color."
        preview={
          <div className="flex flex-col gap-5 w-full max-w-sm">
            <Slider color="primary" defaultValue={[70]} label="Primary" />
            <Slider color="success" defaultValue={[85]} label="Success" />
            <Slider color="warning" defaultValue={[40]} label="Warning" />
            <Slider color="danger" defaultValue={[25]} label="Danger" />
          </div>
        }
        code={`<div className="flex flex-col gap-5 w-full max-w-sm">
  <Slider color="primary" defaultValue={[70]} label="Primary" />
  <Slider color="success" defaultValue={[85]} label="Success" />
  <Slider color="warning" defaultValue={[40]} label="Warning" />
  <Slider color="danger" defaultValue={[25]} label="Danger" />
</div>`}
        props={["color: 'default' | 'primary' | 'secondary' | 'accent' | 'success' | 'warning' | 'danger'"]}
      />

      <Separator label={<span className="px-2">API Reference</span>} gradient />

      <DocsComponent
        title="Props — Slider"
        description="Properties to configure the Slider component."
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
                  <td className="px-3 py-2 font-mono text-primary">color</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">
                    'default' | 'primary' | 'secondary' | 'accent' | 'success' | 'warning' | 'danger'
                  </td>
                  <td className="px-3 py-2 text-muted-foreground">'primary'</td>
                  <td className="px-3 py-2 text-muted-foreground">Range track fill color theme.</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">showValue</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">boolean</td>
                  <td className="px-3 py-2 text-muted-foreground">false</td>
                  <td className="px-3 py-2 text-muted-foreground">Displays formatted numeric value header.</td>
                </tr>
              </tbody>
            </table>
          </div>
        }
      />
    </main>
  );
}
