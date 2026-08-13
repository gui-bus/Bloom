"use client";

import * as React from "react";
import { CodeBlock } from "@/components/core/codeBlock";
import { DocsComponent } from "@/components/core/docsComponent";
import { DocsPagination } from "@/components/core/docsPagination";
import DocsTitle from "@/components/core/docsTitle";
import { ImportSnippet } from "@/components/core/importSnippet";
import { InstallationBlock } from "@/components/core/installationBlock";
import { FileInput } from "@/components/ui/fileInput/fileInput";
import { fileInputCode } from "@/components/ui/fileInput/fileInput.code";
import { Separator } from "@/components/ui/separator/separator";

export default function FileInputComponentPage() {
  const [progress, setProgress] = React.useState(0);
  const [isLoading, setIsLoading] = React.useState(false);

  React.useEffect(() => {
    if (isLoading) {
      const interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            setIsLoading(false);
            return 100;
          }
          return prev + 10;
        });
      }, 300);
      return () => clearInterval(interval);
    }
  }, [isLoading]);

  const handleStartSimulatedUpload = () => {
    setProgress(0);
    setIsLoading(true);
  };

  return (
    <div className="space-y-8">
      <DocsTitle
        title="File Input"
        description="A lightweight and modular file attachment component styled to look like a standard input field, supporting visual variants, progress bars, loading indicators, size scales, and multiple selections."
      />

      <ImportSnippet
        importCode={`import { FileInput } from "@/components/ui/fileInput/fileInput";`}
      />

      <InstallationBlock componentName="fileInput" />

      <CodeBlock
        code={fileInputCode}
        componentName="fileInput.tsx"
        description="Core implementation of the FileInput component."
        tags={["React", "FileInput", "Forms", "Upload"]}
      />

      <DocsComponent
        title="Default"
        description="Standard file input with browse trigger, helper description, and attachment icon."
        preview={
          <div className="max-w-md w-full">
            <FileInput
              label="Upload Documents"
              description="PDF, DOCX, or TXT up to 10MB."
              placeholder="No document selected"
            />
          </div>
        }
        code={`<FileInput
  label="Upload Documents"
  description="PDF, DOCX, or TXT up to 10MB."
  placeholder="No document selected"
/>`}
      />

      <DocsComponent
        title="Variants"
        description="Choose between default, bordered, flat, filled, glow, glassmorphism, gradient-border, and underlined styles."
        preview={
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-3xl">
            <FileInput label="Default" variant="default" />
            <FileInput label="Bordered" variant="bordered" />
            <FileInput label="Flat" variant="flat" />
            <FileInput label="Filled" variant="filled" />
            <FileInput label="Glow" variant="glow" />
            <FileInput label="Glassmorphism" variant="glassmorphism" />
            <FileInput label="Gradient Border" variant="gradient-border" />
            <FileInput label="Underlined" variant="underlined" />
          </div>
        }
        code={`<FileInput variant="default" label="Default" />
<FileInput variant="bordered" label="Bordered" />
<FileInput variant="flat" label="Flat" />
<FileInput variant="filled" label="Filled" />
<FileInput variant="glow" label="Glow" />
<FileInput variant="glassmorphism" label="Glassmorphism" />
<FileInput variant="gradient-border" label="Gradient Border" />
<FileInput variant="underlined" label="Underlined" />`}
      />

      <DocsComponent
        title="Simulated Upload Progress & Loading"
        description="Display upload loading states and simulated progress indicator bars at the bottom edge."
        preview={
          <div className="max-w-md w-full space-y-4">
            <FileInput
              label="Resume / Cover Letter"
              isLoading={isLoading}
              progress={isLoading ? progress : undefined}
              placeholder="Choose file to upload..."
              description="Click browse to select a file, then click the trigger below to start upload simulation."
            />
            <button
              type="button"
              onClick={handleStartSimulatedUpload}
              disabled={isLoading}
              className="px-4 py-2 bg-sky-600 hover:bg-sky-500 text-white text-xs font-semibold rounded-xl transition-all disabled:opacity-50 cursor-pointer"
            >
              {isLoading ? `Uploading (${progress}%)` : "Simulate Upload"}
            </button>
          </div>
        }
        code={`const [progress, setProgress] = React.useState(0);
const [isLoading, setIsLoading] = React.useState(false);

<FileInput
  label="Resume / Cover Letter"
  isLoading={isLoading}
  progress={isLoading ? progress : undefined}
/>`}
      />

      <DocsComponent
        title="Sizes"
        description="Supported in small (sm), medium (md), and large (lg) dimensions."
        preview={
          <div className="flex flex-col gap-5 w-full max-w-md">
            <FileInput size="sm" label="Small (sm)" />
            <FileInput size="md" label="Medium (md) - Default" />
            <FileInput size="lg" label="Large (lg)" />
          </div>
        }
        code={`<FileInput size="sm" label="Small (sm)" />
<FileInput size="md" label="Medium (md) - Default" />
<FileInput size="lg" label="Large (lg)" />`}
      />

      <DocsComponent
        title="Validation Feedback"
        description="Toggle red indicator borders and feedback messages with 'isInvalid' and 'errorMessage'."
        preview={
          <div className="max-w-md w-full">
            <FileInput
              isInvalid
              label="ID Identity Document"
              errorMessage="Only PDF format is allowed for validation."
            />
          </div>
        }
        code={`<FileInput
  isInvalid
  label="ID Identity Document"
  errorMessage="Only PDF format is allowed for validation."
/>`}
      />

      <DocsComponent
        title="Automatic File Type & Size Validation"
        description="Set allowed format extensions by specifying multiple comma-separated formats (using 'accept' like '.pdf,.docx,.xlsx') and limit maximum sizes (using 'maxSizeMB'). If selected files violate these rules, error messages are automatically displayed and the input enters invalid state."
        preview={
          <div className="max-w-md w-full">
            <FileInput
              label="Tax Documents"
              accept=".pdf,.docx,.xlsx"
              maxSizeMB={2.5}
              placeholder="No document selected"
              description="Only PDF, DOCX or XLSX files up to 2.5MB are allowed."
            />
          </div>
        }
        code={`<FileInput
  label="Tax Documents"
  accept=".pdf,.docx,.xlsx"
  maxSizeMB={2.5}
  placeholder="No document selected"
  description="Only PDF, DOCX or XLSX files up to 2.5MB are allowed."
/>`}
        props={["accept: string", "maxSizeMB: number"]}
      />

      <DocsComponent
        title="Multiple File Selection"
        description="Allows selecting multiple documents from browser file dialog, separating names with commas."
        preview={
          <div className="max-w-md w-full">
            <FileInput
              multiple
              label="Project Attachments"
              placeholder="No files selected"
            />
          </div>
        }
        code={`<FileInput
  multiple
  label="Project Attachments"
  placeholder="No files selected"
/>`}
      />

      <DocsComponent
        title="Removable Badge Tags"
        description="Display selected files as individual removable Badges below the input field, allowing users to remove items individually by clicking the close handle."
        preview={
          <div className="max-w-md w-full">
            <FileInput
              multiple
              showBadges
              label="Attach Document Files"
              placeholder="Select files to list as badges..."
            />
          </div>
        }
        code={`<FileInput
  multiple
  showBadges
  label="Attach Document Files"
  placeholder="Select files to list as badges..."
/>`}
        props={["showBadges: boolean"]}
      />

      <Separator label={<span className="px-2">API Reference</span>} gradient />

      <DocsComponent
        title="Props — FileInput"
        description="Supported properties for the FileInput component."
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
                  <td className="px-3 py-2 font-mono text-primary">variant</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">
                    'default' | 'bordered' | 'flat' | 'underlined' | 'filled' |
                    'glassmorphism' | 'gradient-border' | 'glow'
                  </td>
                  <td className="px-3 py-2 text-muted-foreground">'default'</td>
                  <td className="px-3 py-2 text-muted-foreground">
                    Visual appearance theme of the input wrapper.
                  </td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">size</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">
                    'sm' | 'md' | 'lg'
                  </td>
                  <td className="px-3 py-2 text-muted-foreground">'md'</td>
                  <td className="px-3 py-2 text-muted-foreground">
                    Dimensional layout size scale.
                  </td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">progress</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">
                    number
                  </td>
                  <td className="px-3 py-2 text-muted-foreground">—</td>
                  <td className="px-3 py-2 text-muted-foreground">
                    Percentage upload progress value (0-100) to render a
                    progress bar.
                  </td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">
                    isLoading
                  </td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">
                    boolean
                  </td>
                  <td className="px-3 py-2 text-muted-foreground">false</td>
                  <td className="px-3 py-2 text-muted-foreground">
                    Replaces browse trigger with a loading/spinning icon.
                  </td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">
                    isClearable
                  </td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">
                    boolean
                  </td>
                  <td className="px-3 py-2 text-muted-foreground">true</td>
                  <td className="px-3 py-2 text-muted-foreground">
                    Enables a clear button to remove selected files.
                  </td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">
                    showBadges
                  </td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">
                    boolean
                  </td>
                  <td className="px-3 py-2 text-muted-foreground">false</td>
                  <td className="px-3 py-2 text-muted-foreground">
                    Renders selected attachments as individual removable Badges
                    below the input.
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
