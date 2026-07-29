import type { Metadata } from "next";
import { Icon } from "@iconify/react";
import { CodeBlock } from "@/components/core/codeBlock";
import { DocsComponent } from "@/components/core/docsComponent";
import DocsTitle from "@/components/core/docsTitle";

export const metadata: Metadata = {
  title: "Rating",
  description: "Star rating component for user feedback, reviews, and scoring.",
};

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
  return (
    <main className="p-5 space-y-8">
      <DocsTitle
        title="Rating"
        description="An interactive star rating evaluation component supporting hover previews, customizable star counts, color themes, and read-only display states."
      />

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
            tags={["React", "Tailwind", "Forms", "UI Component"]}
          />
        </TabsContent>
      </Tabs>

      {/* Basic Usage */}
      <DocsComponent
        title="Basic Usage"
        description="Standard 5-star rating control."
        preview={
          <div className="flex flex-col gap-2">
            <Rating label="Product Review" defaultValue={4} />
          </div>
        }
        code={`<Rating label="Product Review" defaultValue={4} />`}
      />

      {/* Colors & Sizes */}
      <DocsComponent
        title="Colors & Sizes"
        description="Scale sizes from sm to lg and apply semantic color fills."
        preview={
          <div className="flex flex-col gap-4">
            <Rating size="sm" color="warning" defaultValue={5} label="Small Amber" />
            <Rating size="md" color="primary" defaultValue={4} label="Medium Primary" />
            <Rating size="lg" color="danger" defaultValue={3} label="Large Danger" />
          </div>
        }
        code={`<div className="flex flex-col gap-4">
  <Rating size="sm" color="warning" defaultValue={5} label="Small Amber" />
  <Rating size="md" color="primary" defaultValue={4} label="Medium Primary" />
  <Rating size="lg" color="danger" defaultValue={3} label="Large Danger" />
</div>`}
        props={["size: 'sm' | 'md' | 'lg'", "color: 'default' | 'primary' | 'secondary' | 'accent' | 'warning' | 'danger'"]}
      />

      <Separator label={<span className="px-2">API Reference</span>} gradient />

      <DocsComponent
        title="Props — Rating"
        description="Properties to configure the Rating component."
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
                  <td className="px-3 py-2 font-mono text-primary">max</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">number</td>
                  <td className="px-3 py-2 text-muted-foreground">5</td>
                  <td className="px-3 py-2 text-muted-foreground">Total number of star items.</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">readOnly</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">boolean</td>
                  <td className="px-3 py-2 text-muted-foreground">false</td>
                  <td className="px-3 py-2 text-muted-foreground">Disables user click/hover interaction for static display.</td>
                </tr>
              </tbody>
            </table>
          </div>
        }
      />
    </main>
  );
}
