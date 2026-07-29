import type { Metadata } from "next";
import { Icon } from "@iconify/react";
import { CodeBlock } from "@/components/core/codeBlock";
import { DocsComponent } from "@/components/core/docsComponent";
import DocsTitle from "@/components/core/docsTitle";

export const metadata: Metadata = {
  title: "File Upload",
  description: "Drag-and-drop file upload zone with preview list and file size limits.",
};

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
    <main className="p-5 space-y-8">
      <DocsTitle
        title="File Upload"
        description="A drag & drop file uploader zone supporting single/multiple file selection, size limits, format restrictions, and removable file list previews."
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
            tags={["React", "Tailwind", "Forms", "UI Component"]}
          />
        </TabsContent>
      </Tabs>

      {/* Basic Usage */}
      <DocsComponent
        title="Basic Usage"
        description="Drag-and-drop zone for uploading files."
        preview={
          <div className="w-full max-w-md">
            <FileUpload label="Attachments" multiple maxSizeMB={15} />
          </div>
        }
        code={`<FileUpload label="Attachments" multiple maxSizeMB={15} />`}
      />

      <Separator label={<span className="px-2">API Reference</span>} gradient />

      <DocsComponent
        title="Props — FileUpload"
        description="Properties to configure the FileUpload component."
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
                  <td className="px-3 py-2 text-muted-foreground">Allows multi-file selection.</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">maxSizeMB</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">number</td>
                  <td className="px-3 py-2 text-muted-foreground">10</td>
                  <td className="px-3 py-2 text-muted-foreground">File size limit in Megabytes.</td>
                </tr>
                <tr>
                  <td className="px-3 py-2 font-mono text-primary">accept</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">string</td>
                  <td className="px-3 py-2 text-muted-foreground">—</td>
                  <td className="px-3 py-2 text-muted-foreground">MIME types or extension patterns accepted (e.g. 'image/*').</td>
                </tr>
              </tbody>
            </table>
          </div>
        }
      />
    </main>
  );
}
