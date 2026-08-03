import { Icon } from "@iconify/react";
import type { Metadata } from "next";
import { AccessibilityCard } from "@/components/core/accessibilityCard";
import { CodeBlock } from "@/components/core/codeBlock";
import { DocsComponent } from "@/components/core/docsComponent";
import { DocsPagination } from "@/components/core/docsPagination";
import DocsTitle from "@/components/core/docsTitle";
import { ImportSnippet } from "@/components/core/importSnippet";
import { InstallationBlock } from "@/components/core/installationBlock";

export const metadata: Metadata = {
  title: "Aspect Ratio",
  description: "Displays content within a desired aspect ratio constraint.",
};

import { AspectRatio } from "@/components/ui/aspectRatio/aspectRatio";
import { aspectRatioCode } from "@/components/ui/aspectRatio/aspectRatio.code";
import { Separator } from "@/components/ui/separator/separator";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs/tabs";

export default function AspectRatioPage() {
  return (
    <main className="p-5 space-y-8">
      <DocsTitle
        title="Aspect Ratio"
        description="Displays content within a desired aspect ratio, preserving proportions responsively across viewport sizes with ratio presets and skeleton loading placeholders."
      />

      <ImportSnippet
        importCode={`import { AspectRatio } from "@/components/ui/aspectRatio/aspectRatio";`}
      />

      <InstallationBlock componentName="aspectRatio" />

      <Tabs defaultValue="aspectRatio">
        <TabsList background={false}>
          <TabsTrigger
            value="aspectRatio"
            startContent={<Icon icon="devicon:react" className="size-5" />}
          >
            aspectRatio.tsx
          </TabsTrigger>
        </TabsList>

        <TabsContent value="aspectRatio">
          <CodeBlock
            code={aspectRatioCode}
            componentName="aspectRatio.tsx"
            description="Aspect Ratio component powered by Radix Primitives to maintain responsive dimensions."
            tags={["React", "Radix UI", "Tailwind", "UI Component", "Layout"]}
          />
        </TabsContent>
      </Tabs>

      {/* Ratio Presets */}
      <DocsComponent
        title="Preset Ratios (preset)"
        description="Use predefined ratio aliases ('video', 'square', 'golden', 'cinema', 'portrait', 'ultrawide')."
        preview={
          <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <span className="text-xs font-mono text-muted-foreground block mb-2">
                preset="video" (16:9)
              </span>
              <AspectRatio preset="video" className="bg-muted">
                <img
                  src="https://images.unsplash.com/photo-1682687220063-4742bd7fd538?w=800"
                  alt="Video Widescreen"
                  className="size-full object-cover"
                />
              </AspectRatio>
            </div>

            <div>
              <span className="text-xs font-mono text-muted-foreground block mb-2">
                preset="square" (1:1)
              </span>
              <AspectRatio preset="square" className="bg-muted">
                <img
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500"
                  alt="Square Portrait"
                  className="size-full object-cover"
                />
              </AspectRatio>
            </div>

            <div>
              <span className="text-xs font-mono text-muted-foreground block mb-2">
                preset="cinema" (21:9)
              </span>
              <AspectRatio preset="cinema" className="bg-muted">
                <img
                  src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=1000"
                  alt="Cinema Banner"
                  className="size-full object-cover"
                />
              </AspectRatio>
            </div>
          </div>
        }
        code={`<AspectRatio preset="video">...</AspectRatio>
<AspectRatio preset="square">...</AspectRatio>
<AspectRatio preset="cinema">...</AspectRatio>`}
        props={[
          "preset: 'video' | 'square' | 'golden' | 'cinema' | 'portrait' | 'ultrawide'",
        ]}
      />

      {/* Loading Skeleton */}
      <DocsComponent
        title="Loading Skeleton Placeholder (isLoading)"
        description="Display a pulsing skeleton container while high-resolution media is loading."
        preview={
          <div className="w-full max-w-md">
            <AspectRatio preset="video" isLoading>
              <div />
            </AspectRatio>
          </div>
        }
        code={`<AspectRatio preset="video" isLoading>
  <img src="..." alt="Media" />
</AspectRatio>`}
        props={["isLoading: boolean"]}
      />

      {/* Accessibility & ARIA Section */}
      <AccessibilityCard />

      <Separator label={<span className="px-2">API Reference</span>} gradient />

      <DocsComponent
        title="Props — AspectRatio"
        description="Properties for configuring the AspectRatio component."
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
                  <td className="px-3 py-2 font-mono text-primary">preset</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">
                    'video' | 'square' | 'golden' | 'cinema' | 'portrait' |
                    'ultrawide'
                  </td>
                  <td className="px-3 py-2 text-muted-foreground">—</td>
                  <td className="px-3 py-2 text-muted-foreground">
                    Preset aspect ratio alias. Takes precedence over custom
                    numeric ratio.
                  </td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">ratio</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">
                    number
                  </td>
                  <td className="px-3 py-2 text-muted-foreground">16 / 9</td>
                  <td className="px-3 py-2 text-muted-foreground">
                    Desired custom width-to-height numeric ratio (e.g. 16/9,
                    4/3, 1/1).
                  </td>
                </tr>
                <tr>
                  <td className="px-3 py-2 font-mono text-primary">
                    isLoading
                  </td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">
                    boolean
                  </td>
                  <td className="px-3 py-2 text-muted-foreground">false</td>
                  <td className="px-3 py-2 text-muted-foreground">
                    Shows an integrated skeleton loading spinner state inside
                    the container frame.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        }
      />

      <DocsPagination />
    </main>
  );
}
