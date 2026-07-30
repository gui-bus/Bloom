import { DocsPagination } from "@/components/core/docsPagination";
import { InstallationBlock } from "@/components/core/installationBlock";
import type { Metadata } from "next";
import { Icon } from "@iconify/react";
import { CodeBlock } from "@/components/core/codeBlock";
import { DocsComponent } from "@/components/core/docsComponent";
import DocsTitle from "@/components/core/docsTitle";

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
        description="Displays content within a desired aspect ratio, preserving proportions responsively across viewport sizes."
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

      {/* 16/9 Ratio */}
      <DocsComponent
        title="Default Ratio (16:9)"
        description="Standard widescreen aspect ratio suitable for video embeds and media cards."
        preview={
          <div className="w-full max-w-md">
            <AspectRatio ratio={16 / 9} className="bg-muted rounded-2xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1682687220063-4742bd7fd538?w=800"
                alt="16:9 Widescreen Landscape"
                className="size-full object-cover"
              />
            </AspectRatio>
          </div>
        }
        code={`<div className="w-full max-w-md">
  <AspectRatio ratio={16 / 9} className="bg-muted rounded-2xl overflow-hidden">
    <img
      src="https://images.unsplash.com/photo-1682687220063-4742bd7fd538?w=800"
      alt="16:9 Widescreen Landscape"
      className="size-full object-cover"
    />
  </AspectRatio>
</div>`}
        props={["ratio: number (default: 16 / 9)"]}
      />

      {/* 1/1 Ratio */}
      <DocsComponent
        title="Square Ratio (1:1)"
        description="Perfect 1:1 square ratio commonly used for avatars, product thumbnails, and grid galleries."
        preview={
          <div className="w-48">
            <AspectRatio ratio={1 / 1} className="bg-muted rounded-2xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500"
                alt="1:1 Square Portrait"
                className="size-full object-cover"
              />
            </AspectRatio>
          </div>
        }
        code={`<div className="w-48">
  <AspectRatio ratio={1 / 1} className="bg-muted rounded-2xl overflow-hidden">
    <img
      src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500"
      alt="1:1 Square Portrait"
      className="size-full object-cover"
    />
  </AspectRatio>
</div>`}
      />

      {/* 21/9 Ultrawide Ratio */}
      <DocsComponent
        title="Ultrawide Ratio (21:9)"
        description="Cinematic ultrawide ratio ideal for page headers, hero banners, and cover images."
        preview={
          <div className="w-full max-w-lg">
            <AspectRatio ratio={21 / 9} className="bg-muted rounded-2xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=1000"
                alt="21:9 Ultrawide Banner"
                className="size-full object-cover"
              />
            </AspectRatio>
          </div>
        }
        code={`<div className="w-full max-w-lg">
  <AspectRatio ratio={21 / 9} className="bg-muted rounded-2xl overflow-hidden">
    <img
      src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=1000"
      alt="21:9 Ultrawide Banner"
      className="size-full object-cover"
    />
  </AspectRatio>
</div>`}
      />

      <Separator label={<span className="px-2">API Reference</span>} gradient />

      <DocsComponent
        title="Props — AspectRatio"
        description="Properties for configuring the AspectRatio component."
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
                  <td className="px-3 py-2 font-mono text-primary">ratio</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">number</td>
                  <td className="px-3 py-2 text-muted-foreground">16 / 9</td>
                  <td className="px-3 py-2 text-muted-foreground">
                    Desired width-to-height ratio (e.g. 16/9, 4/3, 1/1, 21/9).
                  </td>
                </tr>
                <tr>
                  <td className="px-3 py-2 font-mono text-primary">className</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">string</td>
                  <td className="px-3 py-2 text-muted-foreground">—</td>
                  <td className="px-3 py-2 text-muted-foreground">
                    Tailwind CSS classes for background styling, rounding, and overflow bounds.
                  </td>
                </tr>
              </tbody>
            </table>
          
      <DocsPagination />
    </div>
        }
      />
    </main>
  );
}
