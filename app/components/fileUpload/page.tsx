"use client";

import { CodeBlock } from "@/components/core/codeBlock";
import { DocsComponent } from "@/components/core/docsComponent";
import { DocsPagination } from "@/components/core/docsPagination";
import DocsTitle from "@/components/core/docsTitle";
import { ImportSnippet } from "@/components/core/importSnippet";
import { InstallationBlock } from "@/components/core/installationBlock";
import { FileUpload } from "@/components/ui/fileUpload/fileUpload";
import { fileUploadCode } from "@/components/ui/fileUpload/fileUpload.code";

export default function FileUploadComponentPage() {
  return (
    <div className="space-y-8">
      <DocsTitle
        title="File Upload"
        description="Interactive drag & drop file upload zone with drop-zone highlight animations, immediate image/video thumbnail previews, image crop & rotation modal, clipboard image pasting, resolution/aspect ratio validation, and per-file progress tracking."
      />

      <ImportSnippet
        importCode={`import { FileUpload } from "@/components/ui/fileUpload/fileUpload";`}
      />

      <InstallationBlock componentName="fileUpload" />

      <CodeBlock
        code={fileUploadCode}
        componentName="fileUpload.tsx"
        description="Core implementation of the FileUpload component supporting image cropping/rotation, clipboard pasting, and file validation rules."
        tags={[
          "React",
          "File Upload",
          "Drag and Drop",
          "Image Crop",
          "Validation",
        ]}
      />

      <DocsComponent
        title="Default"
        description="Interactive drop zone featuring live progress bars per file with pause, resume, and cancellation buttons."
        preview={
          <div className="max-w-md w-full">
            <FileUpload
              label="Project Assets & Media"
              description="Drag and drop images, videos or documents here"
              multiple
              showPreviews
              simulateProgress
              maxSizeMB={25}
            />
          </div>
        }
        code={`<FileUpload
  label="Project Assets & Media"
  multiple
  showPreviews
  simulateProgress
  maxSizeMB={25}
/>`}
        props={["simulateProgress: boolean", "showPreviews: boolean"]}
      />

      <DocsComponent
        title="Variants"
        description="Choose between default, bordered, flat, filled, glow, glassmorphism, gradient-border, and underlined styles."
        preview={
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-3xl">
            <FileUpload
              label="Default"
              variant="default"
              description="Default style"
              simulateProgress={false}
              showPreviews={false}
            />
            <FileUpload
              label="Bordered"
              variant="bordered"
              description="Bordered style"
              simulateProgress={false}
              showPreviews={false}
            />
            <FileUpload
              label="Flat"
              variant="flat"
              description="Flat style"
              simulateProgress={false}
              showPreviews={false}
            />
            <FileUpload
              label="Filled"
              variant="filled"
              description="Filled style"
              simulateProgress={false}
              showPreviews={false}
            />
            <FileUpload
              label="Glow"
              variant="glow"
              description="Glow style"
              simulateProgress={false}
              showPreviews={false}
            />
            <FileUpload
              label="Glassmorphism"
              variant="glassmorphism"
              description="Glassmorphism style"
              simulateProgress={false}
              showPreviews={false}
            />
            <FileUpload
              label="Gradient Border"
              variant="gradient-border"
              description="Gradient border style"
              simulateProgress={false}
              showPreviews={false}
            />
            <FileUpload
              label="Underlined"
              variant="underlined"
              description="Underlined style"
              simulateProgress={false}
              showPreviews={false}
            />
          </div>
        }
        code={`<FileUpload variant="default" label="Default" />
<FileUpload variant="bordered" label="Bordered" />
<FileUpload variant="flat" label="Flat" />
<FileUpload variant="filled" label="Filled" />
<FileUpload variant="glow" label="Glow" />
<FileUpload variant="glassmorphism" label="Glassmorphism" />
<FileUpload variant="gradient-border" label="Gradient Border" />
<FileUpload variant="underlined" label="Underlined" />`}
        props={[
          "variant: 'default' | 'bordered' | 'flat' | 'filled' | 'glow' | 'glassmorphism' | 'gradient-border' | 'underlined'",
        ]}
      />

      <DocsComponent
        title="Thumbnails & Immediate Previews"
        description="Renders instant preview thumbnails for uploaded images, videos, and document file types."
        preview={
          <div className="max-w-md w-full">
            <FileUpload
              label="Avatar & Cover Photo"
              accept="image/*"
              showPreviews
              maxSizeMB={5}
              description="Drop an avatar image to see immediate preview"
            />
          </div>
        }
        code={`<FileUpload
  label="Avatar & Cover Photo"
  accept="image/*"
  showPreviews
  maxSizeMB={5}
/>`}
        props={["showPreviews: boolean", "accept: string"]}
      />

      <DocsComponent
        title="Disabled State"
        description="Disable file upload zone interactions with the 'disabled' prop."
        preview={
          <div className="max-w-md w-full">
            <FileUpload
              label="Archived Attachments"
              description="Uploads are currently closed for this ticket"
              disabled
            />
          </div>
        }
        code={`<FileUpload label="Archived Attachments" disabled />`}
        props={["disabled: boolean"]}
      />

      <DocsComponent
        title="Image Cropping & Rotation Preview Modal"
        description="Pass 'enableCrop' to allow users to rotate (90° steps) and zoom/crop uploaded images inside a dedicated interactive modal."
        preview={
          <div className="max-w-md w-full">
            <FileUpload
              label="Profile Photo (Crop & Rotate Enabled)"
              accept="image/*"
              enableCrop
              description="Upload an image to trigger the crop & rotation preview modal"
            />
          </div>
        }
        code={`<FileUpload
  label="Profile Photo"
  accept="image/*"
  enableCrop
/>`}
        props={["enableCrop: boolean"]}
      />

      <DocsComponent
        title="Paste from Clipboard"
        description="Pass 'allowPaste' to intercept global Ctrl+V image clipboard events and automatically upload captured screenshots or copied images."
        preview={
          <div className="max-w-md w-full">
            <FileUpload
              label="Paste Screenshots"
              allowPaste
              description="Copy any image to clipboard and press Ctrl+V on this page"
            />
          </div>
        }
        code={`<FileUpload
  label="Paste Screenshots"
  allowPaste
/>`}
        props={["allowPaste: boolean"]}
      />

      <DocsComponent
        title="File Size & Type Validation"
        description="Limit allowed uploads by specifying multiple comma-separated format extensions (using 'accept' like '.pdf,.docx,.xlsx') and maximum file size (using 'maxSizeMB'). Files violating these constraints will display immediate validation error status cards."
        preview={
          <div className="max-w-md w-full">
            <FileUpload
              label="Documents & Reports"
              accept=".pdf,.docx,.xlsx"
              maxSizeMB={5}
              description="Only PDF, DOCX or XLSX files up to 5MB are accepted."
            />
          </div>
        }
        code={`<FileUpload
  label="Documents & Reports"
  accept=".pdf,.docx,.xlsx"
  maxSizeMB={5}
  description="Only PDF, DOCX or XLSX files up to 5MB are accepted."
/>`}
        props={["accept: string", "maxSizeMB: number"]}
      />

      <DocsComponent
        title="Resolution & Aspect Ratio Validation Rules"
        description="Pass 'validationRules' to enforce minimum/maximum pixel dimensions or required aspect ratios (e.g. 1:1 square, 16:9 widescreen)."
        preview={
          <div className="max-w-md w-full">
            <FileUpload
              label="Banner Upload (Required 16:9 Aspect Ratio)"
              accept="image/*"
              validationRules={{
                minWidth: 400,
                minHeight: 200,
                aspectRatio: 1.7778,
              }}
              description="Upload a 16:9 image (min 400x200px)"
            />
          </div>
        }
        code={`<FileUpload
  label="Banner Upload (Required 16:9)"
  accept="image/*"
  validationRules={{
    minWidth: 400,
    minHeight: 200,
    aspectRatio: 1.7778,
  }}
/>`}
        props={["validationRules: FileValidationRules"]}
      />

      <DocsComponent
        title="Required State"
        description="Displays an asterisk next to the label indicating that uploading a file is mandatory."
        preview={
          <div className="max-w-md w-full">
            <FileUpload isRequired label="Invoice Document" />
          </div>
        }
        code={`<FileUpload isRequired label="Invoice Document" />`}
        props={["isRequired: boolean"]}
      />

      <DocsComponent
        title="Props — FileUpload"
        description="Supported properties for the FileUpload component."
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
                    enableCrop
                  </td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">
                    boolean
                  </td>
                  <td className="px-3 py-2 text-muted-foreground">false</td>
                  <td className="px-3 py-2 text-muted-foreground">
                    Opens interactive image crop and rotation modal before
                    uploading.
                  </td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">
                    allowPaste
                  </td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">
                    boolean
                  </td>
                  <td className="px-3 py-2 text-muted-foreground">true</td>
                  <td className="px-3 py-2 text-muted-foreground">
                    Allows pasting images directly from the clipboard via Ctrl+V
                    shortcut.
                  </td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">
                    validationRules
                  </td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">
                    FileValidationRules
                  </td>
                  <td className="px-3 py-2 text-muted-foreground">—</td>
                  <td className="px-3 py-2 text-muted-foreground">
                    Validation object enforcing min/max pixel resolution or
                    aspect ratio.
                  </td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">
                    showPreviews
                  </td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">
                    boolean
                  </td>
                  <td className="px-3 py-2 text-muted-foreground">true</td>
                  <td className="px-3 py-2 text-muted-foreground">
                    Renders thumbnail previews for images and videos.
                  </td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">
                    simulateProgress
                  </td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">
                    boolean
                  </td>
                  <td className="px-3 py-2 text-muted-foreground">true</td>
                  <td className="px-3 py-2 text-muted-foreground">
                    Enables individual file upload progress tracking with
                    pause/resume controls.
                  </td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">
                    maxSizeMB
                  </td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">
                    number
                  </td>
                  <td className="px-3 py-2 text-muted-foreground">10</td>
                  <td className="px-3 py-2 text-muted-foreground">
                    Maximum allowable file size limit in megabytes.
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
