"use client";

import { ImportSnippet } from "@/components/core/importSnippet";

import { DocsPagination } from "@/components/core/docsPagination";

import { InstallationBlock } from "@/components/core/installationBlock";

import * as React from "react";
import { Icon } from "@iconify/react";
import { CodeBlock } from "@/components/core/codeBlock";
import { DocsComponent } from "@/components/core/docsComponent";
import DocsTitle from "@/components/core/docsTitle";
import { Textarea } from "@/components/ui/textarea/textarea";
import { textareaCode } from "@/components/ui/textarea/textarea.code";
import { Separator } from "@/components/ui/separator/separator";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs/tabs";

export default function TextareaComponentPage() {
  return (
    <div className="space-y-8">
      <DocsTitle
        title="Textarea"
        description="Multi-line text input field supporting character limits, auto-expanding heights, error validation, variants, and label placements."
      />

      <ImportSnippet
        importCode={`import { Textarea } from "@/components/ui/textarea/textarea";`}
      />

      <InstallationBlock componentName="textarea" />

      <Tabs defaultValue="textarea">
        <TabsList background={false}>
          <TabsTrigger
            value="textarea"
            startContent={<Icon icon="devicon:react" className="size-5" />}
          >
            textarea.tsx
          </TabsTrigger>
        </TabsList>

        <TabsContent value="textarea">
          <CodeBlock
            code={textareaCode}
            componentName="textarea.tsx"
            description="Core implementation of the Textarea component."
            tags={["React", "Textarea", "Input", "Form"]}
          />
        </TabsContent>
      </Tabs>

      {/* Default */}
      <DocsComponent
        title="Default"
        description="Standard multi-line text input field with top label."
        preview={
          <div className="max-w-md w-full">
            <Textarea
              label="Bio & Description"
              placeholder="Tell us a little bit about yourself and your background..."
            />
          </div>
        }
        code={`<Textarea label="Bio" placeholder="Tell us about yourself..." />`}
      />

      {/* Character Counter & Auto Resize */}
      <DocsComponent
        title="Character Counter & Auto Resize"
        description="Tracks character limits and expands container height automatically as content grows."
        preview={
          <div className="max-w-md w-full space-y-4">
            <Textarea
              label="Project Summary"
              placeholder="Write a detailed summary..."
              maxCount={250}
              autoResize
              minRows={3}
              description="Keep summaries concise for team reviews."
            />
          </div>
        }
        code={`<Textarea
  label="Project Summary"
  placeholder="Write a summary..."
  maxCount={250}
  autoResize
  minRows={3}
/>`}
        props={["maxCount: number", "autoResize: boolean", "minRows: number"]}
      />

      {/* Invalid State */}
      <DocsComponent
        title="Invalid State"
        description="Renders high-visibility error message and border highlights."
        preview={
          <div className="max-w-md w-full">
            <Textarea
              isInvalid
              label="Feedback"
              defaultValue="Too short"
              errorMessage="Feedback message must be at least 20 characters long."
            />
          </div>
        }
        code={`<Textarea
  isInvalid
  label="Feedback"
  errorMessage="Feedback must be at least 20 characters long."
/>`}
        props={["isInvalid: boolean", "errorMessage: ReactNode"]}
      />

      <Separator label={<span className="px-2">API Reference</span>} gradient />

      {/* Props Table */}
      <DocsComponent
        title="Props — Textarea"
        description="Supported properties for Textarea."
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
                    autoResize
                  </td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">
                    boolean
                  </td>
                  <td className="px-3 py-2 text-muted-foreground">false</td>
                  <td className="px-3 py-2 text-muted-foreground">
                    Automatically resizes height as user types.
                  </td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">maxCount</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">
                    number
                  </td>
                  <td className="px-3 py-2 text-muted-foreground">—</td>
                  <td className="px-3 py-2 text-muted-foreground">
                    Maximum character length counter.
                  </td>
                </tr>
                <tr>
                  <td className="px-3 py-2 font-mono text-primary">
                    isInvalid
                  </td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">
                    boolean
                  </td>
                  <td className="px-3 py-2 text-muted-foreground">false</td>
                  <td className="px-3 py-2 text-muted-foreground">
                    Renders red error validation borders.
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
