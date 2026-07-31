"use client";

import { ImportSnippet } from "@/components/core/importSnippet";
import { DocsPagination } from "@/components/core/docsPagination";
import { InstallationBlock } from "@/components/core/installationBlock";
import * as React from "react";
import { Icon } from "@iconify/react";
import { CodeBlock } from "@/components/core/codeBlock";
import { DocsComponent } from "@/components/core/docsComponent";
import DocsTitle from "@/components/core/docsTitle";
import { FileUpload } from "@/components/ui/fileUpload/fileUpload";
import { fileUploadCode } from "@/components/ui/fileUpload/fileUpload.code";
import { Separator } from "@/components/ui/separator/separator";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs/tabs";

export default function FileUploadComponentPage() {
  return (
    <div className="space-y-8">
      <DocsTitle
        title="File Upload"
        description="Interactive drag & drop file upload zone with drop-zone highlight animations, immediate image/video thumbnail previews, and per-file progress tracking with pause/resume controls."
      />

      <ImportSnippet importCode={`import { FileUpload } from "@/components/ui/fileUpload/fileUpload";`} />

      <InstallationBlock componentName="fileUpload" />

      <Tabs defaultValue="fileUpload">
        <TabsList background={false}>
          <TabsTrigger
            value="fileUpload"
            startContent={<Icon icon="devicon:react" className="size-5" />}
          >
            fileUpload.tsx
          </TabsTrigger>
        </TabsList>

        <TabsContent value="fileUpload">
          <CodeBlock
            code={fileUploadCode}
            componentName="fileUpload.tsx"
            description="Core implementation of the FileUpload component."
            tags={["React", "File Upload", "Drag and Drop", "Previews", "Progress"]}
          />
        </TabsContent>
      </Tabs>

      {/* Drag and Drop with Progress */}
      <DocsComponent
        title="Drag & Drop with Animated Progress Tracking"
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

      {/* Image & Video Thumbnails Preview */}
      <DocsComponent
        title="Thumbnails & Immediate Previews (showPreviews)"
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

      {/* Disabled State */}
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

      <Separator label={<span className="px-2">API Reference</span>} gradient />

      {/* Props Table */}
      <DocsComponent
        title="Props — FileUpload"
        description="Supported properties for the FileUpload component."
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
                  <td className="px-3 py-2 font-mono text-primary">showPreviews</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">boolean</td>
                  <td className="px-3 py-2 text-muted-foreground">true</td>
                  <td className="px-3 py-2 text-muted-foreground">Renders thumbnail previews for images and videos.</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">simulateProgress</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">boolean</td>
                  <td className="px-3 py-2 text-muted-foreground">true</td>
                  <td className="px-3 py-2 text-muted-foreground">Enables individual file upload progress tracking with pause/resume controls.</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">multiple</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">boolean</td>
                  <td className="px-3 py-2 text-muted-foreground">false</td>
                  <td className="px-3 py-2 text-muted-foreground">Allows selecting multiple files at once.</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">maxSizeMB</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">number</td>
                  <td className="px-3 py-2 text-muted-foreground">10</td>
                  <td className="px-3 py-2 text-muted-foreground">Maximum allowable file size limit in megabytes.</td>
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
