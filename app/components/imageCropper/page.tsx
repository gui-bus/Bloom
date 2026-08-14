"use client";

import { useState } from "react";
import { CodeBlock } from "@/components/core/codeBlock";
import { DocsComponent } from "@/components/core/docsComponent";
import { DocsPagination } from "@/components/core/docsPagination";
import DocsTitle from "@/components/core/docsTitle";
import { ImportSnippet } from "@/components/core/importSnippet";
import { InstallationBlock } from "@/components/core/installationBlock";
import { FileUpload } from "@/components/ui/fileUpload/fileUpload";
import { ImageCropper } from "@/components/ui/imageCropper/imageCropper";
import { imageCropperCode } from "@/components/ui/imageCropper/imageCropper.code";
import { Separator } from "@/components/ui/separator/separator";

export default function ImageCropperPage() {
  const [uploadedSrc, setUploadedSrc] = useState<string | null>(null);

  const handleFilesSelected = (files: File[]) => {
    if (files?.[0]) {
      const file = files[0];
      const reader = new FileReader();
      reader.onload = (e) => {
        if (e.target?.result) {
          setUploadedSrc(e.target.result as string);
        }
      };
      reader.readAsDataURL(file);
    }
  };

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

      <CodeBlock
        code={imageCropperCode}
        componentName="imageCropper.tsx"
        description="Core implementation of the ImageCropper component."
        tags={["React", "Canvas", "Cropper", "Editor"]}
      />

      <DocsComponent
        title="Default"
        description="A standard cropper with locked 1:1 aspect ratio."
        props={[
          "src: string",
          "aspectRatio: number",
          "onCrop: (base64: string) => void",
        ]}
        preview={
          <div className="w-full max-w-xl">
            <ImageCropper
              src="/utils/image-cropper.webp"
              aspectRatio={1}
              onCrop={(base64) => console.log("Cropped:", base64)}
            />
          </div>
        }
        code={`<ImageCropper
  src="/utils/image-cropper.webp"
  aspectRatio={1}
  onCrop={(base64) => console.log(base64)}
/>`}
      />

      <DocsComponent
        title="Crop Format"
        description="Selectable crop layout shapes. Choose between circular (default) and square formats."
        props={["circular: boolean"]}
        preview={
          <div className="w-full flex flex-col md:flex-row gap-8 items-start">
            <div className="flex-1 w-full">
              <h4 className="text-sm font-semibold mb-3 text-zinc-500 uppercase tracking-wider">
                Circular (Default)
              </h4>
              <ImageCropper
                src="/utils/image-cropper.webp"
                aspectRatio={1}
                circular={true}
                onCrop={(base64) => console.log("Cropped circular:", base64)}
              />
            </div>
            <div className="flex-1 w-full">
              <h4 className="text-sm font-semibold mb-3 text-zinc-500 uppercase tracking-wider">
                Square
              </h4>
              <ImageCropper
                src="/utils/image-cropper.webp"
                aspectRatio={1}
                circular={false}
                onCrop={(base64) => console.log("Cropped square:", base64)}
              />
            </div>
          </div>
        }
        code={`
<ImageCropper
  src="/utils/image-cropper.webp"
  aspectRatio={1}
  circular={true}
/>

<ImageCropper
  src="/utils/image-cropper.webp"
  aspectRatio={1}
  circular={false}
/>`}
      />

      <DocsComponent
        props={[
          "src: any",
          "utils: any",
          "image-cropper-banner: any",
          "webp: any",
          "width: any",
          "height: any",
          "defaultZoom: any",
          "onCrop: any",
          "base64: any",
        ]}
        title="Aspect Ratios & Banners"
        description="Configure crop boxes for specific width and height pixel dimensions (such as 4K resolution 3840x2160). When width and height are provided, circular and square overlays are automatically disabled."
        preview={
          <div className="w-full">
            <ImageCropper
              src="/utils/image-cropper-banner.webp"
              width={3840}
              height={2160}
              defaultZoom={55}
              onCrop={(base64) => console.log("Cropped 4K banner:", base64)}
            />
          </div>
        }
        code={`<ImageCropper
  src="/utils/image-cropper-banner.webp"
  width={3840}
  height={2160}
  defaultZoom={55}
  onCrop={(base64) => console.log(base64)}
/>`}
      />

      <DocsComponent
        props={[
          "accept: any",
          "image: any",
          "showPreviews: any",
          "false: any",
          "simulateProgress: any",
          "onFilesSelected: any",
          "handleFilesSelected: any",
          "src: any",
          "uploadedSrc: any",
          "aspectRatio: any",
          "circular: any",
        ]}
        title="Interactive Upload Flow"
        description="Upload your own picture using FileUpload first, then crop it using the ImageCropper."
        preview={
          <div className="w-full max-w-xl space-y-6">
            {!uploadedSrc ? (
              <FileUpload
                label="Profile Picture Upload"
                accept="image/*"
                showPreviews={false}
                simulateProgress={false}
                onFilesSelected={handleFilesSelected}
              />
            ) : (
              <div className="space-y-4">
                <ImageCropper
                  src={uploadedSrc}
                  aspectRatio={1}
                  circular
                  onCrop={(base64) => console.log("Cropped uploaded:", base64)}
                />
                <button
                  onClick={() => setUploadedSrc(null)}
                  className="px-4 py-2 text-sm font-semibold text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 hover:bg-zinc-100 dark:hover:bg-zinc-900 rounded-xl transition-colors"
                >
                  Upload a different image
                </button>
              </div>
            )}
          </div>
        }
        code={`const [uploadedSrc, setUploadedSrc] = useState(null);

const handleFilesSelected = (files) => {
  if (files && files[0]) {
    const file = files[0];
    const reader = new FileReader();
    reader.onload = (e) => {
      if (e.target?.result) setUploadedSrc(e.target.result);
    };
    reader.readAsDataURL(file);
  }
};

return (
  <div>
    {!uploadedSrc ? (
      <FileUpload
        label="Profile Picture Upload"
        accept="image/*"
        showPreviews={false}
        simulateProgress={false}
        onFilesSelected={handleFilesSelected}
      />
    ) : (
      <div>
        <ImageCropper src={uploadedSrc} aspectRatio={1} circular />
        <button onClick={() => setUploadedSrc(null)}>Upload different</button>
      </div>
    )}
  </div>
);`}
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
                  <td className="px-3 py-2 font-mono text-primary">src</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">
                    string
                  </td>
                  <td className="px-3 py-2 text-muted-foreground">required</td>
                  <td className="px-3 py-2 text-muted-foreground">
                    Source URL path for target picture to edit
                  </td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">
                    aspectRatio
                  </td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">
                    number
                  </td>
                  <td className="px-3 py-2 text-muted-foreground">1</td>
                  <td className="px-3 py-2 text-muted-foreground">
                    Dimension ratio configuration constraint
                  </td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">circular</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">
                    boolean
                  </td>
                  <td className="px-3 py-2 text-muted-foreground">true</td>
                  <td className="px-3 py-2 text-muted-foreground">
                    Renders a round cropping viewport overlay
                  </td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">
                    showCropButton
                  </td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">
                    boolean
                  </td>
                  <td className="px-3 py-2 text-muted-foreground">true</td>
                  <td className="px-3 py-2 text-muted-foreground">
                    If false, hides the built-in Crop button and results section
                    (useful for custom external action flows)
                  </td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">width</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">
                    number
                  </td>
                  <td className="px-3 py-2 text-muted-foreground">undefined</td>
                  <td className="px-3 py-2 text-muted-foreground">
                    Custom output crop box width in pixels. If set with height,
                    circular/square presets are disabled.
                  </td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">height</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">
                    number
                  </td>
                  <td className="px-3 py-2 text-muted-foreground">undefined</td>
                  <td className="px-3 py-2 text-muted-foreground">
                    Custom output crop box height in pixels. If set with width,
                    circular/square presets are disabled.
                  </td>
                </tr>
                <tr>
                  <td className="px-3 py-2 font-mono text-primary">onCrop</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">
                    {"(base64: string) => void"}
                  </td>
                  <td className="px-3 py-2 text-muted-foreground">undefined</td>
                  <td className="px-3 py-2 text-muted-foreground">
                    Extraction hook returning cropped base64 PNG data
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
