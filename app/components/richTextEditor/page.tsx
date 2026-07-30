"use client";

import { ImportSnippet } from "@/components/core/importSnippet";
import { DocsPagination } from "@/components/core/docsPagination";
import { InstallationBlock } from "@/components/core/installationBlock";
import { AccessibilityCard } from "@/components/core/accessibilityCard";
import * as React from "react";
import { Icon } from "@iconify/react";
import { CodeBlock } from "@/components/core/codeBlock";
import { DocsComponent } from "@/components/core/docsComponent";
import DocsTitle from "@/components/core/docsTitle";
import { RichTextEditor } from "@/components/ui/richTextEditor/richTextEditor";
import { richTextEditorCode } from "@/components/ui/richTextEditor/richTextEditor.code";
import { Separator } from "@/components/ui/separator/separator";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs/tabs";

function DefaultDemo() {
  const [html, setHtml] = React.useState(
    "<p>Start editing this <strong>rich text</strong> content. You can add <em>italic</em>, <strong>bold</strong>, and <s>strikethrough</s> formatting.</p>"
  );
  return (
    <div className="w-full max-w-2xl">
      <RichTextEditor value={html} onChange={setHtml} />
    </div>
  );
}

function PlaceholderDemo() {
  return (
    <div className="w-full max-w-2xl">
      <RichTextEditor placeholder="Write your blog post here..." />
    </div>
  );
}

function DisabledDemo() {
  return (
    <div className="w-full max-w-2xl">
      <RichTextEditor
        value="<h2>Read-only Content</h2><p>This editor is in <strong>disabled</strong> mode. The toolbar buttons are inactive and the content cannot be edited.</p>"
        isDisabled
      />
    </div>
  );
}

export default function RichTextEditorPage() {
  return (
    <div className="space-y-8">
      <DocsTitle
        title="Rich Text Editor"
        description="A WYSIWYG editor built on Tiptap with a styled toolbar for bold, italic, strikethrough, headings, lists, and blockquote formatting. Fully headless and customizable."
      />

      <ImportSnippet importCode={`import { RichTextEditor } from "@/components/ui/richTextEditor/richTextEditor";`} />

      <InstallationBlock componentName="richTextEditor" />

      <Tabs defaultValue="richTextEditor">
        <TabsList background={false}>
          <TabsTrigger
            value="richTextEditor"
            startContent={<Icon icon="devicon:react" className="size-5" />}
          >
            richTextEditor.tsx
          </TabsTrigger>
        </TabsList>

        <TabsContent value="richTextEditor">
          <CodeBlock
            code={richTextEditorCode}
            componentName="richTextEditor.tsx"
            description="WYSIWYG rich text editor with Tiptap, StarterKit, and toolbar controls."
            tags={["React", "Tiptap", "UI Component", "Editor", "WYSIWYG"]}
          />
        </TabsContent>
      </Tabs>

      {/* Default */}
      <DocsComponent
        title="Default"
        description="A rich text editor with pre-filled content and full toolbar controls."
        preview={<DefaultDemo />}
        code={`const [html, setHtml] = React.useState("<p>Start editing this <strong>rich text</strong> content.</p>");

<RichTextEditor value={html} onChange={setHtml} />`}
      />

      {/* With Placeholder */}
      <DocsComponent
        title="With Placeholder"
        description="An empty editor with a custom placeholder text."
        preview={<PlaceholderDemo />}
        code={`<RichTextEditor placeholder="Write your blog post here..." />`}
      />

      {/* Disabled */}
      <DocsComponent
        title="Disabled"
        description="A read-only editor with disabled toolbar buttons and non-editable content."
        preview={<DisabledDemo />}
        code={`<RichTextEditor
  value="<h2>Read-only Content</h2><p>This editor is in <strong>disabled</strong> mode.</p>"
  isDisabled
/>`}
      />

      <Separator label={<span className="px-2">Accessibility</span>} gradient />

      <AccessibilityCard
        keyboardShortcuts={[
          { keys: ["Ctrl/⌘", "B"], description: "Toggle bold formatting" },
          { keys: ["Ctrl/⌘", "I"], description: "Toggle italic formatting" },
          { keys: ["Ctrl/⌘", "Shift", "X"], description: "Toggle strikethrough" },
          { keys: ["Ctrl/⌘", "Shift", "7"], description: "Toggle ordered list" },
          { keys: ["Ctrl/⌘", "Shift", "8"], description: "Toggle bullet list" },
          { keys: ["Ctrl/⌘", "Shift", "B"], description: "Toggle blockquote" },
          { keys: ["Tab"], description: "Indent list item" },
          { keys: ["Shift", "Tab"], description: "Outdent list item" },
        ]}
      />

      <Separator label={<span className="px-2">API Reference</span>} gradient />

      <div className="overflow-x-auto rounded-2xl border border-zinc-200 dark:border-zinc-800">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-zinc-200 dark:border-zinc-800 bg-zinc-100 dark:bg-zinc-800/50">
              <th className="px-4 py-3 text-left font-bold text-zinc-900 dark:text-zinc-100">Prop</th>
              <th className="px-4 py-3 text-left font-bold text-zinc-900 dark:text-zinc-100">Type</th>
              <th className="px-4 py-3 text-left font-bold text-zinc-900 dark:text-zinc-100">Default</th>
              <th className="px-4 py-3 text-left font-bold text-zinc-900 dark:text-zinc-100">Description</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-zinc-200 dark:divide-zinc-800">
            <tr><td className="px-4 py-3 font-mono text-xs text-sky-500">value</td><td className="px-4 py-3 text-zinc-600 dark:text-zinc-300">string</td><td className="px-4 py-3 text-zinc-400">""</td><td className="px-4 py-3 text-zinc-600 dark:text-zinc-300">Initial HTML content for the editor.</td></tr>
            <tr><td className="px-4 py-3 font-mono text-xs text-sky-500">onChange</td><td className="px-4 py-3 text-zinc-600 dark:text-zinc-300">(html: string) =&gt; void</td><td className="px-4 py-3 text-zinc-400">—</td><td className="px-4 py-3 text-zinc-600 dark:text-zinc-300">Callback with HTML output on content change.</td></tr>
            <tr><td className="px-4 py-3 font-mono text-xs text-sky-500">placeholder</td><td className="px-4 py-3 text-zinc-600 dark:text-zinc-300">string</td><td className="px-4 py-3 text-zinc-400">"Start writing..."</td><td className="px-4 py-3 text-zinc-600 dark:text-zinc-300">Placeholder text when editor is empty.</td></tr>
            <tr><td className="px-4 py-3 font-mono text-xs text-sky-500">minHeight</td><td className="px-4 py-3 text-zinc-600 dark:text-zinc-300">string</td><td className="px-4 py-3 text-zinc-400">"150px"</td><td className="px-4 py-3 text-zinc-600 dark:text-zinc-300">Minimum height of the content area.</td></tr>
            <tr><td className="px-4 py-3 font-mono text-xs text-sky-500">isDisabled</td><td className="px-4 py-3 text-zinc-600 dark:text-zinc-300">boolean</td><td className="px-4 py-3 text-zinc-400">false</td><td className="px-4 py-3 text-zinc-600 dark:text-zinc-300">Disables editing and toolbar interaction.</td></tr>
            <tr><td className="px-4 py-3 font-mono text-xs text-sky-500">className</td><td className="px-4 py-3 text-zinc-600 dark:text-zinc-300">string</td><td className="px-4 py-3 text-zinc-400">—</td><td className="px-4 py-3 text-zinc-600 dark:text-zinc-300">Additional CSS classes for the container.</td></tr>
          </tbody>
        </table>
      </div>

      <DocsPagination />
    </div>
  );
}
