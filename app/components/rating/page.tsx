"use client";

import * as React from "react";
import { CodeBlock } from "@/components/core/codeBlock";
import { DocsComponent } from "@/components/core/docsComponent";
import { DocsPagination } from "@/components/core/docsPagination";
import DocsTitle from "@/components/core/docsTitle";
import { ImportSnippet } from "@/components/core/importSnippet";
import { InstallationBlock } from "@/components/core/installationBlock";
import { Rating } from "@/components/ui/rating/rating";
import { ratingCode } from "@/components/ui/rating/rating.code";

export default function RatingComponentPage() {
  const [val1, setVal1] = React.useState(3.5);
  const [val2, setVal2] = React.useState(4.5);
  const [emojiVal, setEmojiVal] = React.useState(4);

  return (
    <div className="space-y-8">
      <DocsTitle
        title="Rating"
        description="Interactive rating component supporting precise scoring, multiple visual variants, and dynamic emojis feedback."
      />

      <ImportSnippet
        importCode={`import { Rating } from "@/components/ui/rating/rating";`}
      />

      <InstallationBlock componentName="rating" />

      <CodeBlock
        code={ratingCode}
        componentName="rating.tsx"
        description="Core implementation of the Rating component."
        tags={["React", "Rating", "Star", "Emoji", "HalfStar"]}
      />

      <DocsComponent
        title="Default"
        description="Standard 5-star rating control with tooltip score."
        preview={
          <div className="max-w-xs w-full">
            <Rating showTooltip label="Product Review Score" defaultValue={4} />
          </div>
        }
        code={`<Rating showTooltip label="Product Review Score" defaultValue={4} />`}
      />

      <DocsComponent
        title="Variants"
        description="Choose between star and heart shape outlines for different score rating types."
        preview={
          <div className="flex flex-col gap-5 max-w-xs w-full">
            <div className="space-y-1">
              <span className="text-[10px] font-bold uppercase tracking-wider text-zinc-400">
                Default (Star)
              </span>
              <Rating variant="default" defaultValue={3} showTooltip />
            </div>
            <div className="space-y-1">
              <span className="text-[10px] font-bold uppercase tracking-wider text-zinc-400">
                Heart
              </span>
              <Rating variant="heart" defaultValue={4} showTooltip />
            </div>
          </div>
        }
        code={`<Rating variant="default" defaultValue={3} />
<Rating variant="heart" defaultValue={4} />`}
        props={["variant: 'default' | 'heart'"]}
      />

      <DocsComponent
        title="Sizes"
        description="Choose from small, medium, or large rating item dimensions."
        preview={
          <div className="flex flex-col gap-4 max-w-xs w-full">
            <Rating size="sm" defaultValue={4} label="Small (sm)" />
            <Rating size="md" defaultValue={4} label="Medium (md)" />
            <Rating size="lg" defaultValue={4} label="Large (lg)" />
          </div>
        }
        code={`<Rating size="sm" defaultValue={4} />
<Rating size="md" defaultValue={4} />
<Rating size="lg" defaultValue={4} />`}
        props={["size: 'sm' | 'md' | 'lg'"]}
      />

      <DocsComponent
        title="Half"
        description="Enable half-step rating selection using the 'allowHalf' prop on both variants."
        preview={
          <div className="flex flex-col gap-5 max-w-xs w-full">
            <div className="space-y-1">
              <span className="text-[10px] font-bold uppercase tracking-wider text-zinc-400">
                Default (Star)
              </span>
              <Rating
                variant="default"
                allowHalf
                value={val1}
                onValueChange={setVal1}
                showTooltip
              />
            </div>
            <div className="space-y-1">
              <span className="text-[10px] font-bold uppercase tracking-wider text-zinc-400">
                Heart
              </span>
              <Rating
                variant="heart"
                allowHalf
                value={val2}
                onValueChange={setVal2}
                showTooltip
              />
            </div>
          </div>
        }
        code={`<Rating variant="default" allowHalf value={val1} onValueChange={setVal1} />
<Rating variant="heart" allowHalf value={val2} onValueChange={setVal2} />`}
        props={["allowHalf: boolean"]}
      />

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

      <DocsComponent
        title="Props — Rating"
        description="Supported properties for the Rating component."
        preview={
          <div className="overflow-x-auto rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-zinc-200 dark:border-zinc-800 bg-zinc-100 dark:bg-zinc-800/50">
                  <th className="px-4 py-3 text-left font-bold text-zinc-900 dark:text-zinc-100">
                    Prop
                  </th>
                  <th className="px-4 py-3 text-left font-bold text-zinc-900 dark:text-zinc-100">
                    Type
                  </th>
                  <th className="px-4 py-3 text-left font-bold text-zinc-900 dark:text-zinc-100">
                    Default
                  </th>
                  <th className="px-4 py-3 text-left font-bold text-zinc-900 dark:text-zinc-100">
                    Description
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-200 dark:divide-zinc-800">
                <tr>
                  <td className="px-4 py-3 font-mono text-xs text-sky-500">
                    variant
                  </td>
                  <td className="px-4 py-3 text-zinc-600 dark:text-zinc-300">
                    'default' | 'heart'
                  </td>
                  <td className="px-4 py-3 text-zinc-400">'default'</td>
                  <td className="px-4 py-3 text-zinc-600 dark:text-zinc-300">
                    Visual layout shapes pattern (star or heart).
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-mono text-xs text-sky-500">
                    allowHalf
                  </td>
                  <td className="px-4 py-3 text-zinc-600 dark:text-zinc-300">
                    boolean
                  </td>
                  <td className="px-4 py-3 text-zinc-400">false</td>
                  <td className="px-4 py-3 text-zinc-600 dark:text-zinc-300">
                    Allows selecting decimal half scores.
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-mono text-xs text-sky-500">
                    emojiMap
                  </td>
                  <td className="px-4 py-3 text-zinc-600 dark:text-zinc-300">
                    Record&lt;number, string&gt;
                  </td>
                  <td className="px-4 py-3 text-zinc-400">—</td>
                  <td className="px-4 py-3 text-zinc-600 dark:text-zinc-300">
                    Custom emojis dictionary key map.
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
