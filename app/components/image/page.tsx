"use client";

import { ImportSnippet } from "@/components/core/importSnippet";

import { DocsPagination } from "@/components/core/docsPagination";

import { InstallationBlock } from "@/components/core/installationBlock";

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
  const sampleImage =
    "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800&auto=format&fit=crop&q=80";

  return (
    <div className="space-y-8">
      <DocsTitle
        title="Image"
        description="Enhanced image container with placeholder graphics, loading skeletons, error fallbacks, radius options, zoomable hover effects, and blurred glow backdrop shadow."
      />

      <ImportSnippet
        importCode={`import { Image } from "@/components/ui/image/image";`}
      />

      <InstallationBlock componentName="image" />

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
  src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800&auto=format&fit=crop&q=80"
  alt="Mountain landscape"
  caption="Serene mountain vista at sunrise"
/>`}
      />

      {/* Placeholder Image */}
      <DocsComponent
        title="Placeholder Graphic"
        description="Use the 'placeholder' prop to render a default vector SVG placeholder."
        preview={
          <div className="max-w-md w-full">
            <Image
              placeholder
              alt="Placeholder graphic"
              aspectRatio="video"
              caption="Standard 1200x1200 vector placeholder SVG"
            />
          </div>
        }
        code={`<Image placeholder aspectRatio="video" caption="Standard vector placeholder SVG" />`}
        props={["placeholder: boolean"]}
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
        code={`<Image src="https://images.unsplash.com/..." alt="..." isZoomable />`}
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
        code={`<Image src="https://images.unsplash.com/..." alt="..." isBlurred />`}
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
        code={`<Image src="https://images.unsplash.com/..." aspectRatio="square" />
<Image src="https://images.unsplash.com/..." aspectRatio="video" />`}
        props={["aspectRatio: 'auto' | 'square' | 'video' | '4/3' | '21/9'"]}
      />

      {/* Lightbox Zoom, Blur-up & Fallback */}
      <DocsComponent
        title="Lightbox Zoom Modal, Progressive Blur-up & Fallback URL"
        description="Click an image with 'enableLightbox' to open full-screen lightbox preview, show smooth low-res blur-up placeholders, and recover with 'fallbackSrc' when primary image URL fails."
        preview={
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-xl w-full">
            <Image
              src={sampleImage}
              enableLightbox
              alt="Lightbox landscape"
              caption="Click image to launch full-screen Lightbox modal"
            />
            <Image
              src="https://invalid-broken-domain.com/broken.jpg"
              fallbackSrc={sampleImage}
              alt="Recovered fallback"
              caption="Broken primary URL recovered using fallbackSrc"
            />
          </div>
        }
        code={`<Image src="..." enableLightbox caption="Click for lightbox modal" />
<Image src="broken.jpg" fallbackSrc="https://..." caption="URL Recovery fallback" />`}
        props={[
          "enableLightbox: boolean",
          "fallbackSrc: string",
          "blurUpPlaceholder: string",
        ]}
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
                    enableLightbox
                  </td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">
                    boolean
                  </td>
                  <td className="px-3 py-2 text-muted-foreground">false</td>
                  <td className="px-3 py-2 text-muted-foreground">
                    Opens full-screen lightbox modal on click preview.
                  </td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">
                    fallbackSrc
                  </td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">
                    string
                  </td>
                  <td className="px-3 py-2 text-muted-foreground">—</td>
                  <td className="px-3 py-2 text-muted-foreground">
                    Backup image source loaded automatically if main URL fails.
                  </td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">
                    blurUpPlaceholder
                  </td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">
                    string
                  </td>
                  <td className="px-3 py-2 text-muted-foreground">—</td>
                  <td className="px-3 py-2 text-muted-foreground">
                    Low-res placeholder image URL displayed with blur effect
                    during load.
                  </td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">
                    placeholder
                  </td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">
                    boolean
                  </td>
                  <td className="px-3 py-2 text-muted-foreground">false</td>
                  <td className="px-3 py-2 text-muted-foreground">
                    Renders the default placeholder vector SVG graphic.
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
