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

      <div className="pt-4">
        <h2 className="text-xl font-semibold mb-4">API Reference</h2>
        <div className="overflow-x-auto border border-zinc-200 dark:border-zinc-800 rounded-lg">
          <table className="min-w-full divide-y divide-zinc-200 dark:divide-zinc-800 text-sm text-left">
            <thead className="bg-zinc-50 dark:bg-zinc-900 text-zinc-700 dark:text-zinc-300 font-medium">
              <tr>
                <th className="px-4 py-3 border-b border-zinc-200 dark:border-zinc-800">
                  Prop
                </th>
                <th className="px-4 py-3 border-b border-zinc-200 dark:border-zinc-800">
                  Type
                </th>
                <th className="px-4 py-3 border-b border-zinc-200 dark:border-zinc-800">
                  Default
                </th>
                <th className="px-4 py-3 border-b border-zinc-200 dark:border-zinc-800">
                  Description
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-200 dark:divide-zinc-800 text-zinc-600 dark:text-zinc-400">
              <tr>
                <td className="px-4 py-3 font-mono text-zinc-900 dark:text-zinc-100">
                  src
                </td>
                <td className="px-4 py-3 font-mono text-primary">string</td>
                <td className="px-4 py-3 font-mono">required</td>
                <td className="px-4 py-3">
                  Source URL path for target picture to edit.
                </td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-mono text-zinc-900 dark:text-zinc-100">
                  aspectRatio
                </td>
                <td className="px-4 py-3 font-mono text-primary">number</td>
                <td className="px-4 py-3 font-mono">1</td>
                <td className="px-4 py-3">
                  Dimension ratio configuration constraint.
                </td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-mono text-zinc-900 dark:text-zinc-100">
                  circular
                </td>
                <td className="px-4 py-3 font-mono text-primary">boolean</td>
                <td className="px-4 py-3 font-mono">false</td>
                <td className="px-4 py-3">
                  Renders a round cropping viewport overlay.
                </td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-mono text-zinc-900 dark:text-zinc-100">
                  onCrop
                </td>
                <td className="px-4 py-3 font-mono text-primary">
                  {"(base64: string) => void"}
                </td>
                <td className="px-4 py-3 font-mono">undefined</td>
                <td className="px-4 py-3">
                  Extraction hook returning cropped base64 PNG data.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <DocsPagination
        prev={{ title: "Hover Card", href: "/components/hoverCard" }}
        next={{ title: "Input", href: "/components/input" }}
      />
    </div>
  );
}
