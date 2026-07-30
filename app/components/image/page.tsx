"use client";

import * as React from "react";
import { Icon } from "@iconify/react";
import { CodeBlock } from "@/components/core/codeBlock";
import { DocsComponent } from "@/components/core/docsComponent";
import DocsTitle from "@/components/core/docsTitle";
import { Image } from "@/components/ui/image/image";
import { imageCode } from "@/components/ui/image/image.code";
import { Separator } from "@/components/ui/separator/separator";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs/tabs";

export default function ImageComponentPage() {
  const sampleImage = "https://images.unsplash.com/photo-1682687220063-4742bd7fd538?w=800&auto=format&fit=crop&q=80";

  return (
    <div className="space-y-8">
      <DocsTitle
        title="Image"
        description="Enhanced image container with loading skeletons, error fallback state, radius options, zoomable hover effects, and blurred glow backdrop shadow."
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
            tags={["React", "Tailwind", "Media", "Image"]}
          />
        </TabsContent>
      </Tabs>

      {/* Default */}
      <DocsComponent
        title="Default"
        description="Standard image with rounded-2xl borders and caption."
        preview={
          <div className="max-w-md w-full">
            <Image
              src={sampleImage}
              alt="Mountain landscape"
              caption="Serene mountain vista at sunrise"
            />
          </div>
        }
        code={`<Image
  src="https://images.unsplash.com/..."
  alt="Mountain landscape"
  caption="Serene mountain vista at sunrise"
/>`}
      />

      {/* Zoomable */}
      <DocsComponent
        title="Zoomable Hover Effect"
        description="Enable smooth zoom animation on hover using the 'isZoomable' prop."
        preview={
          <div className="max-w-md w-full">
            <Image
              src={sampleImage}
              alt="Zoomable landscape"
              isZoomable
              caption="Hover over the image to view the zoom transition"
            />
          </div>
        }
        code={`<Image src="..." alt="..." isZoomable />`}
        props={["isZoomable: boolean"]}
      />

      {/* Blurred Glow Backdrop */}
      <DocsComponent
        title="Blurred Glow Backdrop"
        description="Create an ambient colored glow shadow under the image with the 'isBlurred' prop."
        preview={
          <div className="max-w-md w-full py-4">
            <Image
              src={sampleImage}
              alt="Glow landscape"
              isBlurred
              caption="Ambient blurred shadow glow background"
            />
          </div>
        }
        code={`<Image src="..." alt="..." isBlurred />`}
        props={["isBlurred: boolean"]}
      />

      {/* Aspect Ratios */}
      <DocsComponent
        title="Aspect Ratios"
        description="Control container dimensions using the 'aspectRatio' prop: 'square', 'video', '4/3', or '21/9'."
        preview={
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-xl w-full">
            <Image
              src={sampleImage}
              alt="Square"
              aspectRatio="square"
              caption="Square (1:1)"
            />
            <Image
              src={sampleImage}
              alt="Video"
              aspectRatio="video"
              caption="Video (16:9)"
            />
          </div>
        }
        code={`<Image src="..." alt="..." aspectRatio="square" />
<Image src="..." alt="..." aspectRatio="video" />`}
        props={["aspectRatio: 'auto' | 'square' | 'video' | '4/3' | '21/9'"]}
      />

      {/* Error Fallback */}
      <DocsComponent
        title="Error Fallback State"
        description="Gracefully displays a fallback UI when image fails to load."
        preview={
          <div className="max-w-md w-full">
            <Image
              src="https://invalid-domain-image-url.com/broken.jpg"
              alt="Broken image"
              aspectRatio="video"
            />
          </div>
        }
        code={`<Image src="invalid-url.jpg" alt="Broken image" aspectRatio="video" />`}
      />

      <Separator label={<span className="px-2">API Reference</span>} gradient />

      {/* Props Table */}
      <DocsComponent
        title="Props — Image"
        description="Supported properties for the Image component."
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
                  <td className="px-3 py-2 text-muted-foreground">URL source of the image.</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">isZoomable</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">boolean</td>
                  <td className="px-3 py-2 text-muted-foreground">false</td>
                  <td className="px-3 py-2 text-muted-foreground">Enables smooth zoom effect on hover.</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">isBlurred</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">boolean</td>
                  <td className="px-3 py-2 text-muted-foreground">false</td>
                  <td className="px-3 py-2 text-muted-foreground">Renders ambient glow backdrop shadow.</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">radius</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">
                    'none' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full'
                  </td>
                  <td className="px-3 py-2 text-muted-foreground">'2xl'</td>
                  <td className="px-3 py-2 text-muted-foreground">Border radius style variant.</td>
                </tr>
                <tr>
                  <td className="px-3 py-2 font-mono text-primary">aspectRatio</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">
                    'auto' | 'square' | 'video' | '4/3' | '21/9'
                  </td>
                  <td className="px-3 py-2 text-muted-foreground">'auto'</td>
                  <td className="px-3 py-2 text-muted-foreground">Aspect ratio constraint.</td>
                </tr>
              </tbody>
            </table>
          </div>
        }
      />
    </div>
  );
}
