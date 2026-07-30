"use client";

import { ImportSnippet } from "@/components/core/importSnippet";

import { DocsPagination } from "@/components/core/docsPagination";

import { InstallationBlock } from "@/components/core/installationBlock";

import * as React from "react";
import { Icon } from "@iconify/react";
import { CodeBlock } from "@/components/core/codeBlock";
import { DocsComponent } from "@/components/core/docsComponent";
import DocsTitle from "@/components/core/docsTitle";
import { Rating } from "@/components/ui/rating/rating";
import { ratingCode } from "@/components/ui/rating/rating.code";
import { Separator } from "@/components/ui/separator/separator";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs/tabs";

export default function RatingComponentPage() {
  const [val1, setVal1] = React.useState(3.5);

  return (
    <div className="space-y-8">
      <DocsTitle
        title="Rating"
        description="Interactive star rating component supporting full & half star granularity (allowHalf), custom star counts, color themes, and read-only states."
      />

      <ImportSnippet importCode={`import { Rating } from "@/components/ui/rating/rating";`} />

      <InstallationBlock componentName="rating" />

      <Tabs defaultValue="rating">
        <TabsList background={false}>
          <TabsTrigger
            value="rating"
            startContent={<Icon icon="devicon:react" className="size-5" />}
          >
            rating.tsx
          </TabsTrigger>
        </TabsList>

        <TabsContent value="rating">
          <CodeBlock
            code={ratingCode}
            componentName="rating.tsx"
            description="Core implementation of the Rating component."
            tags={["React", "Rating", "Star", "Feedback"]}
          />
        </TabsContent>
      </Tabs>

      {/* Default */}
      <DocsComponent
        title="Default"
        description="Standard 5-star rating control."
        preview={
          <div className="max-w-xs w-full">
            <Rating label="Product Review Score" defaultValue={4} />
          </div>
        }
        code={`<Rating label="Product Review Score" defaultValue={4} />`}
      />

      {/* Half Star Support */}
      <DocsComponent
        title="Half Star Precision (allowHalf)"
        description="Enable 0.5 step star rating selection using the 'allowHalf' prop."
        preview={
          <div className="flex flex-col gap-2 max-w-xs w-full">
            <Rating
              allowHalf
              value={val1}
              onValueChange={setVal1}
              label="Customer Rating (Half Stars Enabled)"
            />
            <span className="text-xs font-mono text-muted-foreground">Current Score: {val1} / 5.0</span>
          </div>
        }
        code={`const [val, setVal] = React.useState(3.5);

<Rating allowHalf value={val} onValueChange={setVal} label="Half Stars Enabled" />`}
        props={["allowHalf: boolean"]}
      />

      {/* Sizes */}
      <DocsComponent
        title="Sizes"
        description="Scale star icon dimensions using the 'size' prop: 'sm', 'md', or 'lg'."
        preview={
          <div className="flex flex-col gap-4 max-w-xs w-full">
            <Rating size="sm" defaultValue={5} label="Small Stars (sm)" />
            <Rating size="md" defaultValue={4} label="Medium Stars (md)" />
            <Rating size="lg" defaultValue={3} label="Large Stars (lg)" />
          </div>
        }
        code={`<Rating size="sm" defaultValue={5} />
<Rating size="md" defaultValue={4} />
<Rating size="lg" defaultValue={3} />`}
        props={["size: 'sm' | 'md' | 'lg'"]}
      />

      {/* Read Only & Colors */}
      <DocsComponent
        title="Read-only & Theme Colors"
        description="Display non-interactive rating displays in different color accents."
        preview={
          <div className="flex flex-col gap-4 max-w-xs w-full">
            <Rating readOnly allowHalf value={4.5} color="warning" label="Warning Gold (4.5)" />
            <Rating readOnly allowHalf value={4.0} color="primary" label="Primary Sky (4.0)" />
            <Rating readOnly allowHalf value={5.0} color="success" label="Success Emerald (5.0)" />
          </div>
        }
        code={`<Rating readOnly allowHalf value={4.5} color="warning" />
<Rating readOnly allowHalf value={4.0} color="primary" />`}
        props={["readOnly: boolean", "color: 'default' | 'primary' | 'secondary' | 'accent' | 'warning' | 'danger'"]}
      />

      <Separator label={<span className="px-2">API Reference</span>} gradient />

      {/* Props Table */}
      <DocsComponent
        title="Props — Rating"
        description="Supported properties for the Rating component."
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
                  <td className="px-3 py-2 font-mono text-primary">allowHalf</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">boolean</td>
                  <td className="px-3 py-2 text-muted-foreground">false</td>
                  <td className="px-3 py-2 text-muted-foreground">Enables 0.5 half-star selection and hovering.</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">value / defaultValue</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">number</td>
                  <td className="px-3 py-2 text-muted-foreground">0</td>
                  <td className="px-3 py-2 text-muted-foreground">Current rating score.</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">max</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">number</td>
                  <td className="px-3 py-2 text-muted-foreground">5</td>
                  <td className="px-3 py-2 text-muted-foreground">Maximum total star count.</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">readOnly</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">boolean</td>
                  <td className="px-3 py-2 text-muted-foreground">false</td>
                  <td className="px-3 py-2 text-muted-foreground">Disables user star hover/click interaction.</td>
                </tr>
                <tr>
                  <td className="px-3 py-2 font-mono text-primary">color</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">
                    'default' | 'primary' | 'secondary' | 'accent' | 'warning' | 'danger'
                  </td>
                  <td className="px-3 py-2 text-muted-foreground">'warning'</td>
                  <td className="px-3 py-2 text-muted-foreground">Filled star color variant.</td>
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
