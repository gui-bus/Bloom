"use client";

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
        description="Drag & drop file upload zone supporting file format restrictions, size limits, multi-file attachments, and staged file item removals."
      />

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
            tags={["React", "File Upload", "Drag and Drop", "Form"]}
          />
        </TabsContent>
      </Tabs>

      {/* Default */}
      <DocsComponent
        title="Default"
        description="Standard single file drag & drop upload zone."
        preview={
          <div className="max-w-md w-full">
            <FileUpload
              label="Upload Profile Avatar"
              description="Drop an image file here or click to browse"
              maxSizeMB={5}
            />
          </div>
        }
        code={`<FileUpload
  label="Upload Profile Avatar"
  description="Drop an image file here or click to browse"
  maxSizeMB={5}
/>`}
      />

      {/* Multiple Files */}
      <DocsComponent
        title="Multiple Files Support"
        description="Allow attaching multiple files using the 'multiple' prop."
        preview={
          <div className="max-w-md w-full">
            <FileUpload
              label="Project Attachments"
              description="Upload PDF documents or images"
              multiple
              maxSizeMB={15}
            />
          </div>
        }
        code={`<FileUpload label="Project Attachments" multiple maxSizeMB={15} />`}
        props={["multiple: boolean"]}
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
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">accept</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">string</td>
                  <td className="px-3 py-2 text-muted-foreground">—</td>
                  <td className="px-3 py-2 text-muted-foreground">MIME types or file extensions filter string (e.g. 'image/*,.pdf').</td>
                </tr>
                <tr>
                  <td className="px-3 py-2 font-mono text-primary">onFilesSelected</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">
                    {"(files: File[]) => void"}
                  </td>
                  <td className="px-3 py-2 text-muted-foreground">—</td>
                  <td className="px-3 py-2 text-muted-foreground">Callback function triggered whenever file list changes.</td>
                </tr>
              </tbody>
            </table>
          </div>
        }
      />
    </div>
  );
}
