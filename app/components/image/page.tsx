import type { Metadata } from "next";
import { Icon } from "@iconify/react";
import { CodeBlock } from "@/components/core/codeBlock";
import { DocsComponent } from "@/components/core/docsComponent";
import DocsTitle from "@/components/core/docsTitle";

export const metadata: Metadata = {
  title: "Image",
  description: "Image component featuring responsive aspect ratios, fallback error handling, zoom animations, and captions.",
};

import { Image } from "@/components/ui/image/image";
import { imageCode } from "@/components/ui/image/image.code";
import { Separator } from "@/components/ui/separator/separator";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs/tabs";

const sampleImageUrl = "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=800&auto=format&fit=crop&q=80";

export default function ImageComponentPage() {
  return (
    <main className="p-5 space-y-8">
      <DocsTitle
        title="Image"
        description="Enhanced image container component with built-in aspect ratio management, skeleton loading states, fallback handling on broken URLs, zoom effects, and captions."
      />

      <Tabs defaultValue="image">
        <TabsList background={false}>
          <TabsTrigger
            value="image"
            startContent={<Icon icon="devicon:react" className="size-5" />}
          >
            image.tsx
          </TabsTrigger>
        </TabsList>

        <TabsContent value="image">
          <CodeBlock
            code={imageCode}
            componentName="image.tsx"
            description="Core implementation of the Image component."
            tags={["React", "Tailwind", "UI Component", "Media"]}
          />
        </TabsContent>
      </Tabs>

      {/* Basic Usage */}
      <DocsComponent
        title="Basic Usage"
        description="Standard image with rounded corners and caption."
        preview={
          <div className="w-full max-w-sm">
            <Image
              src={sampleImageUrl}
              alt="Gradient abstract background"
              radius="2xl"
              caption="Abstract ambient gradient artwork"
            />
          </div>
        }
        code={`<div className="w-full max-w-sm">
  <Image
    src="${sampleImageUrl}"
    alt="Gradient abstract background"
    radius="2xl"
    caption="Abstract ambient gradient artwork"
  />
</div>`}
      />

      {/* Aspect Ratios */}
      <DocsComponent
        title="Aspect Ratios"
        description="Preset ratio containers: square (1:1), video (16:9), and 4/3."
        preview={
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full">
            <Image
              src={sampleImageUrl}
              alt="Square aspect ratio"
              aspectRatio="square"
              radius="xl"
              caption="Square (1:1)"
            />
            <Image
              src={sampleImageUrl}
              alt="Video aspect ratio"
              aspectRatio="video"
              radius="xl"
              caption="Video (16:9)"
            />
            <Image
              src={sampleImageUrl}
              alt="4/3 aspect ratio"
              aspectRatio="4/3"
              radius="xl"
              caption="Standard (4:3)"
            />
          </div>
        }
        code={`<div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full">
  <Image
    src="${sampleImageUrl}"
    alt="Square aspect ratio"
    aspectRatio="square"
    radius="xl"
    caption="Square (1:1)"
  />
  <Image
    src="${sampleImageUrl}"
    alt="Video aspect ratio"
    aspectRatio="video"
    radius="xl"
    caption="Video (16:9)"
  />
  <Image
    src="${sampleImageUrl}"
    alt="4/3 aspect ratio"
    aspectRatio="4/3"
    radius="xl"
    caption="Standard (4:3)"
  />
</div>`}
        props={["aspectRatio: 'auto' | 'square' | 'video' | '4/3' | '21/9'"]}
      />

      {/* Zoomable */}
      <DocsComponent
        title="Zoomable Hover"
        description="Enable smooth zoom animation on hover with isZoomable."
        preview={
          <div className="w-full max-w-sm">
            <Image
              src={sampleImageUrl}
              alt="Zoomable artwork"
              isZoomable
              radius="xl"
              aspectRatio="video"
            />
          </div>
        }
        code={`<div className="w-full max-w-sm">
  <Image
    src="${sampleImageUrl}"
    alt="Zoomable artwork"
    isZoomable
    radius="xl"
    aspectRatio="video"
  />
</div>`}
        props={["isZoomable: boolean"]}
      />

      {/* Fallback */}
      <DocsComponent
        title="Fallback Error Handling"
        description="Gracefully displays fallback component when an image fails to load."
        preview={
          <div className="w-full max-w-sm">
            <Image
              src="https://invalid-domain.com/non-existent-image.jpg"
              alt="Broken image example"
              aspectRatio="video"
              radius="xl"
            />
          </div>
        }
        code={`<div className="w-full max-w-sm">
  <Image
    src="https://invalid-domain.com/non-existent-image.jpg"
    alt="Broken image example"
    aspectRatio="video"
    radius="xl"
  />
</div>`}
        props={["fallback: ReactNode"]}
      />

      <Separator label={<span className="px-2">API Reference</span>} gradient />

      <DocsComponent
        title="Props — Image"
        description="Properties to configure the Image component."
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
                  <td className="px-3 py-2 font-mono text-primary">src</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">string</td>
                  <td className="px-3 py-2 text-muted-foreground">—</td>
                  <td className="px-3 py-2 text-muted-foreground">
                    Image source URL.
                  </td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">alt</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">string</td>
                  <td className="px-3 py-2 text-muted-foreground">—</td>
                  <td className="px-3 py-2 text-muted-foreground">
                    Accessible alternative text description.
                  </td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">radius</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">
                    'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | 'full'
                  </td>
                  <td className="px-3 py-2 text-muted-foreground">'lg'</td>
                  <td className="px-3 py-2 text-muted-foreground">
                    Border radius scale.
                  </td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">aspectRatio</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">
                    'auto' | 'square' | 'video' | '4/3' | '21/9'
                  </td>
                  <td className="px-3 py-2 text-muted-foreground">'auto'</td>
                  <td className="px-3 py-2 text-muted-foreground">
                    Aspect ratio container constraint.
                  </td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">isZoomable</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">boolean</td>
                  <td className="px-3 py-2 text-muted-foreground">false</td>
                  <td className="px-3 py-2 text-muted-foreground">
                    Enables subtle scale transform on hover.
                  </td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">caption</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">string</td>
                  <td className="px-3 py-2 text-muted-foreground">—</td>
                  <td className="px-3 py-2 text-muted-foreground">
                    Optional figure caption text rendered below image.
                  </td>
                </tr>
                <tr>
                  <td className="px-3 py-2 font-mono text-primary">fallback</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">ReactNode</td>
                  <td className="px-3 py-2 text-muted-foreground">—</td>
                  <td className="px-3 py-2 text-muted-foreground">
                    Custom fallback component rendered on loading error.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        }
      />
    </main>
  );
}
