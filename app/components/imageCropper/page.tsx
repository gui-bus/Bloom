"use client";

import { Icon } from "@iconify/react";
import { CodeBlock } from "@/components/core/codeBlock";
import { DocsComponent } from "@/components/core/docsComponent";
import { DocsPagination } from "@/components/core/docsPagination";
import DocsTitle from "@/components/core/docsTitle";
import { ImportSnippet } from "@/components/core/importSnippet";
import { InstallationBlock } from "@/components/core/installationBlock";
import { ImageCropper } from "@/components/ui/imageCropper/imageCropper";
import { imageCropperCode } from "@/components/ui/imageCropper/imageCropper.code";
import { Separator } from "@/components/ui/separator/separator";
import { AccessibilityCard } from "@/components/core/accessibilityCard";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs/tabs";

export default function ImageCropperPage() {
  return (
    <div className="space-y-8">
      <DocsTitle
        title="Image Cropper"
        description="A drag-and-resize canvas editor to crop selected images, supporting locking ratios, zooming, and output extraction."
      />

      <ImportSnippet
        importCode={`import { ImageCropper } from "@/components/ui/imageCropper/imageCropper";`}
      />

      <InstallationBlock componentName="imageCropper" />

      <Tabs defaultValue="imageCropper">
        <TabsList background={false}>
          <TabsTrigger
            value="imageCropper"
            startContent={<Icon icon="devicon:react" className="size-5" />}
          >
            imageCropper.tsx
          </TabsTrigger>
        </TabsList>

        <TabsContent value="imageCropper">
          <CodeBlock
            code={imageCropperCode}
            componentName="imageCropper.tsx"
            description="HTML5 Canvas image editor with drag and zoom scaling."
            tags={["React", "Canvas", "Cropper", "Editor"]}
          />
        </TabsContent>
      </Tabs>

      <DocsComponent
        title="Default"
        description="A standard cropper with locked 1:1 aspect ratio."
        props={["src: string", "aspectRatio: number", "onCrop: (base64: string) => void"]}
        preview={
          <div className="w-full max-w-xl p-4 bg-zinc-50 dark:bg-zinc-950/40 rounded-xl border border-zinc-200 dark:border-zinc-800">
            <ImageCropper
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=800&auto=format&fit=crop&q=60"
              aspectRatio={1}
              onCrop={(base64) => console.log("Cropped:", base64)}
            />
          </div>
        }
        code={`<ImageCropper
  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e"
  aspectRatio={1}
  onCrop={(base64) => console.log(base64)}
/>`}
      />

      <DocsComponent
        title="Circular Crop"
        description="A crop editor that cuts the selected picture into a circular layout (ideal for profile avatars)."
        props={["circular: boolean"]}
        preview={
          <div className="w-full max-w-xl p-4 bg-zinc-50 dark:bg-zinc-950/40 rounded-xl border border-zinc-200 dark:border-zinc-800">
            <ImageCropper
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=800&auto=format&fit=crop&q=60"
              aspectRatio={1}
              circular={true}
              onCrop={(base64) => console.log("Cropped:", base64)}
            />
          </div>
        }
        code={`<ImageCropper
  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e"
  aspectRatio={1}
  circular={true}
  onCrop={(base64) => console.log(base64)}
/>`}
      />

      <Separator label={<span className="px-2">API Reference</span>} gradient />

      <DocsComponent
        title="Props — ImageCropper"
        description="Props for the ImageCropper component."
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
                  <td className="px-3 py-2 text-muted-foreground">required</td>
                  <td className="px-3 py-2 text-muted-foreground">Source URL path for target picture to edit</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">aspectRatio</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">number</td>
                  <td className="px-3 py-2 text-muted-foreground">1</td>
                  <td className="px-3 py-2 text-muted-foreground">Dimension ratio configuration constraint</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">circular</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">boolean</td>
                  <td className="px-3 py-2 text-muted-foreground">false</td>
                  <td className="px-3 py-2 text-muted-foreground">Renders a round cropping viewport overlay</td>
                </tr>
                <tr>
                  <td className="px-3 py-2 font-mono text-primary">onCrop</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">{"(base64: string) => void"}</td>
                  <td className="px-3 py-2 text-muted-foreground">undefined</td>
                  <td className="px-3 py-2 text-muted-foreground">Extraction hook returning cropped base64 PNG data</td>
                </tr>
              </tbody>
            </table>
          </div>
        }
      />

      <AccessibilityCard />

      <DocsPagination />
    </div>
  );
}
