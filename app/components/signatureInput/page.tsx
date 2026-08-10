"use client";

import { Icon } from "@iconify/react";
import * as React from "react";
import { CodeBlock } from "@/components/core/codeBlock";
import { DocsComponent } from "@/components/core/docsComponent";
import { DocsPagination } from "@/components/core/docsPagination";
import DocsTitle from "@/components/core/docsTitle";
import { ImportSnippet } from "@/components/core/importSnippet";
import { InstallationBlock } from "@/components/core/installationBlock";
import { SignatureInput } from "@/components/ui/signatureInput/signatureInput";
import { signatureInputCode } from "@/components/ui/signatureInput/signatureInput.code";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs/tabs";

export default function SignatureInputPage() {
  const [signature1, setSignature1] = React.useState<string | null>(null);
  const [_signature2, _setSignature2] = React.useState<string | null>(null);

  return (
    <div className="space-y-8">
      <DocsTitle
        title="Signature Input"
        description="A canvas-based interactive signature capture pad supporting custom styling, undo history, clear options, and base64 export."
      />

      <ImportSnippet
        importCode={`import { SignatureInput } from "@/components/ui/signatureInput/signatureInput";`}
      />

      <InstallationBlock componentName="signatureInput" />

      <Tabs defaultValue="signatureInput">
        <TabsList background={false}>
          <TabsTrigger
            value="signatureInput"
            startContent={<Icon icon="devicon:react" className="size-5" />}
          >
            signatureInput.tsx
          </TabsTrigger>
        </TabsList>

        <TabsContent value="signatureInput">
          <CodeBlock
            code={signatureInputCode}
            componentName="signatureInput.tsx"
            description="Core implementation of the SignatureInput component with drawing controls, pointer events, history undo stack, and clean card styling."
            tags={["React", "Tailwind", "Canvas", "SignatureInput", "Form"]}
          />
        </TabsContent>
      </Tabs>

      <DocsComponent
        title="Default"
        description="A simple signature pad with drawing capabilities, clear, and undo functionality."
        preview={
          <div className="w-full max-w-md space-y-4">
            <SignatureInput
              onChange={setSignature1}
              placeholder="Sign inside this box..."
            />
            {signature1 && (
              <div className="p-3 border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-950/40 rounded-lg">
                <span className="text-xs font-mono text-muted-foreground block mb-2">
                  Export Data URL Preview:
                </span>
                <img
                  src={signature1}
                  alt="Signature preview"
                  className="max-h-20 border border-dashed border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-900 rounded"
                />
              </div>
            )}
          </div>
        }
        code={`const [signature, setSignature] = React.useState<string | null>(null);

<SignatureInput
  onChange={setSignature}
  placeholder="Sign inside this box..."
/>`}
      />

      <DocsComponent
        title="Variants"
        description="Supports different wrapper card variations including default shadow card, bordered card, and flat background card."
        preview={
          <div className="w-full max-w-md space-y-6">
            <div>
              <span className="text-xs font-mono text-muted-foreground block mb-2">
                variant="default"
              </span>
              <SignatureInput
                variant="default"
                placeholder="Default variant..."
              />
            </div>
            <div>
              <span className="text-xs font-mono text-muted-foreground block mb-2">
                variant="bordered"
              </span>
              <SignatureInput
                variant="bordered"
                placeholder="Bordered variant..."
              />
            </div>
            <div>
              <span className="text-xs font-mono text-muted-foreground block mb-2">
                variant="flat"
              </span>
              <SignatureInput variant="flat" placeholder="Flat variant..." />
            </div>
          </div>
        }
        code={`<SignatureInput variant="default" placeholder="Default variant..." />
<SignatureInput variant="bordered" placeholder="Bordered variant..." />
<SignatureInput variant="flat" placeholder="Flat variant..." />`}
      />

      <DocsComponent
        title="Customizations"
        description="Customize pen stroke color, line width, and bounding height."
        preview={
          <div className="w-full max-w-md space-y-6">
            <div>
              <span className="text-xs font-mono text-muted-foreground block mb-2">
                strokeColor="#3b82f6" (Blue) & lineWidth=4
              </span>
              <SignatureInput
                strokeColor="#3b82f6"
                lineWidth={4}
                height={150}
                placeholder="Thick blue pen..."
              />
            </div>
            <div>
              <span className="text-xs font-mono text-muted-foreground block mb-2">
                strokeColor="#ec4899" (Pink) & lineWidth=1.5
              </span>
              <SignatureInput
                strokeColor="#ec4899"
                lineWidth={1.5}
                height={150}
                placeholder="Thin pink pen..."
              />
            </div>
          </div>
        }
        code={`<SignatureInput
  strokeColor="#3b82f6"
  lineWidth={4}
  height={150}
  placeholder="Thick blue pen..."
/>

<SignatureInput
  strokeColor="#ec4899"
  lineWidth={1.5}
  height={150}
  placeholder="Thin pink pen..."
/>`}
      />

      <DocsComponent
        title="Disabled State"
        description="Signature input is rendered non-interactive, preserving any current content."
        preview={
          <div className="w-full max-w-md">
            <SignatureInput
              isDisabled
              placeholder="Signature pad is disabled"
            />
          </div>
        }
        code={`<SignatureInput isDisabled placeholder="Signature pad is disabled" />`}
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
                  width
                </td>
                <td className="px-4 py-3 font-mono text-primary">
                  number | string
                </td>
                <td className="px-4 py-3 font-mono">"100%"</td>
                <td className="px-4 py-3">CSS width of the canvas wrapper.</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-mono text-zinc-900 dark:text-zinc-100">
                  height
                </td>
                <td className="px-4 py-3 font-mono text-primary">
                  number | string
                </td>
                <td className="px-4 py-3 font-mono">200</td>
                <td className="px-4 py-3">
                  CSS height of the canvas drawing area.
                </td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-mono text-zinc-900 dark:text-zinc-100">
                  strokeColor
                </td>
                <td className="px-4 py-3 font-mono text-primary">string</td>
                <td className="px-4 py-3 font-mono">"currentColor"</td>
                <td className="px-4 py-3">
                  Hex or named color of the signature stroke. Uses current font
                  color if "currentColor".
                </td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-mono text-zinc-900 dark:text-zinc-100">
                  lineWidth
                </td>
                <td className="px-4 py-3 font-mono text-primary">number</td>
                <td className="px-4 py-3 font-mono">2.5</td>
                <td className="px-4 py-3">
                  Width/thickness of the drawing line in pixels.
                </td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-mono text-zinc-900 dark:text-zinc-100">
                  variant
                </td>
                <td className="px-4 py-3 font-mono text-primary">
                  "default" | "bordered" | "flat"
                </td>
                <td className="px-4 py-3 font-mono">"default"</td>
                <td className="px-4 py-3">
                  The styling variant of the signature wrapper box.
                </td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-mono text-zinc-900 dark:text-zinc-100">
                  radius
                </td>
                <td className="px-4 py-3 font-mono text-primary">
                  keyof typeof designRadius
                </td>
                <td className="px-4 py-3 font-mono">"md"</td>
                <td className="px-4 py-3">
                  Corner radius of the signature card.
                </td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-mono text-zinc-900 dark:text-zinc-100">
                  onChange
                </td>
                <td className="px-4 py-3 font-mono text-primary">
                  (signature: string | null) =&gt; void
                </td>
                <td className="px-4 py-3 font-mono">undefined</td>
                <td className="px-4 py-3">
                  Callback containing base64 data URL png output of signature
                  when drawing ends, or null when cleared.
                </td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-mono text-zinc-900 dark:text-zinc-100">
                  onClear
                </td>
                <td className="px-4 py-3 font-mono text-primary">
                  () =&gt; void
                </td>
                <td className="px-4 py-3 font-mono">undefined</td>
                <td className="px-4 py-3">
                  Callback fired when the signature is cleared.
                </td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-mono text-zinc-900 dark:text-zinc-100">
                  isDisabled
                </td>
                <td className="px-4 py-3 font-mono text-primary">boolean</td>
                <td className="px-4 py-3 font-mono">false</td>
                <td className="px-4 py-3">
                  Disables all pointer interactions and fades the component out
                  slightly.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <DocsPagination
        prev={{ title: "Tag Input", href: "/components/tagInput" }}
        next={{ title: "Timeline", href: "/components/timeline" }}
      />
    </div>
  );
}
