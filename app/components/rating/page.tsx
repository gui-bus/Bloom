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
  const [emojiVal, setEmojiVal] = React.useState(4);

  return (
    <div className="space-y-8">
      <DocsTitle
        title="Rating"
        description="Interactive rating component supporting half-star precision (allowHalf), custom icons (e.g. hearts), dynamic emojis, and score tooltips."
      />

      <ImportSnippet
        importCode={`import { Rating } from "@/components/ui/rating/rating";`}
      />

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
            tags={["React", "Rating", "Star", "Emoji", "HalfStar"]}
          />
        </TabsContent>
      </Tabs>

      {/* Default */}
      <DocsComponent
        title="Default Star Rating"
        description="Standard 5-star rating control with tooltip score."
        preview={
          <div className="max-w-xs w-full">
            <Rating showTooltip label="Product Review Score" defaultValue={4} />
          </div>
        }
        code={`<Rating showTooltip label="Product Review Score" defaultValue={4} />`}
      />

      {/* Half Star Precision */}
      <DocsComponent
        title="Half Star Precision (allowHalf)"
        description="Enable 0.5 step star rating selection using the 'allowHalf' prop."
        preview={
          <div className="flex flex-col gap-2 max-w-xs w-full">
            <Rating
              allowHalf
              showTooltip
              value={val1}
              onValueChange={setVal1}
              label="Customer Rating (Half Stars Enabled)"
            />
            <span className="text-xs font-mono text-muted-foreground">
              Current Score: {val1} / 5.0
            </span>
          </div>
        }
        code={`const [val, setVal] = React.useState(3.5);

<Rating allowHalf showTooltip value={val} onValueChange={setVal} label="Half Stars Enabled" />`}
        props={["allowHalf: boolean"]}
      />

      {/* Custom Icons (Hearts) */}
      <DocsComponent
        title="Custom Icons (Hearts)"
        description="Pass custom icons like hearts ('hugeicons:favourite') and color themes ('danger')."
        preview={
          <div className="flex flex-col gap-4 max-w-xs w-full">
            <Rating
              icon="hugeicons:favourite"
              color="danger"
              size="lg"
              defaultValue={4}
              label="Favorite Level (Hearts)"
            />
          </div>
        }
        code={`<Rating
  icon="hugeicons:favourite"
  color="danger"
  size="lg"
  defaultValue={4}
  label="Favorite Level"
/>`}
        props={[
          "icon: string (e.g. 'hugeicons:favourite')",
          "color: 'danger' | 'warning' | ...",
        ]}
      />

      {/* Dynamic Emojis */}
      <DocsComponent
        title="Dynamic Emojis Rating"
        description="Pass an emojiMap dictionary to convert numeric ratings into expressive emotional emojis."
        preview={
          <div className="flex flex-col gap-2 max-w-xs w-full">
            <Rating
              size="lg"
              value={emojiVal}
              onValueChange={setEmojiVal}
              emojiMap={{ 1: "😠", 2: "🙁", 3: "😐", 4: "😃", 5: "😍" }}
              label="User Feedback Satisfaction"
            />
            <span className="text-xs font-mono text-muted-foreground">
              Selected Mood: Rating {emojiVal}
            </span>
          </div>
        }
        code={`const [val, setVal] = React.useState(4);

<Rating
  size="lg"
  value={val}
  onValueChange={setVal}
  emojiMap={{ 1: "😠", 2: "🙁", 3: "😐", 4: "😃", 5: "😍" }}
  label="User Feedback Satisfaction"
/>`}
        props={["emojiMap: Record<number, string>"]}
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
                    allowHalf
                  </td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">
                    boolean
                  </td>
                  <td className="px-3 py-2 text-muted-foreground">false</td>
                  <td className="px-3 py-2 text-muted-foreground">
                    Enables 0.5 half-star selection and hovering.
                  </td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">icon</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">
                    string
                  </td>
                  <td className="px-3 py-2 text-muted-foreground">
                    'hugeicons:star'
                  </td>
                  <td className="px-3 py-2 text-muted-foreground">
                    Iconify icon identifier (e.g. 'hugeicons:favourite' for
                    hearts).
                  </td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">emojiMap</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">
                    Record&lt;number, string&gt;
                  </td>
                  <td className="px-3 py-2 text-muted-foreground">—</td>
                  <td className="px-3 py-2 text-muted-foreground">
                    Map of rating scores to dynamic emoji representations.
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
