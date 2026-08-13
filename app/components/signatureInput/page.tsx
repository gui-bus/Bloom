"use client";

import * as React from "react";
import { CodeBlock } from "@/components/core/codeBlock";
import { DocsComponent } from "@/components/core/docsComponent";
import { DocsPagination } from "@/components/core/docsPagination";
import DocsTitle from "@/components/core/docsTitle";
import { ImportSnippet } from "@/components/core/importSnippet";
import { InstallationBlock } from "@/components/core/installationBlock";
import { Separator } from "@/components/ui/separator/separator";
import { SignatureInput } from "@/components/ui/signatureInput/signatureInput";
import { signatureInputCode } from "@/components/ui/signatureInput/signatureInput.code";

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

      <CodeBlock
        code={signatureInputCode}
        componentName="signatureInput.tsx"
        description="Core implementation of the SignatureInput component with drawing controls, pointer events, history undo stack, and clean card styling."
        tags={["React", "Tailwind", "Canvas", "SignatureInput", "Form"]}
      />

      <DocsComponent
        title="Default"
        description="A simple signature pad with drawing capabilities, clear, and undo functionality."
        props={[
          "onChange: (signature: string | null) => void",
          "placeholder: string",
        ]}
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
        props={["variant: 'default' | 'bordered' | 'flat'"]}
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
        props={[
          "strokeColor: string",
          "lineWidth: number",
          "height: number | string",
        ]}
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
        props={["isDisabled: boolean"]}
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

      <Separator label={<span className="px-2">API Reference</span>} gradient />

      <DocsComponent
        title="Props — SignatureInput"
        description="Properties for configuring the signature input."
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
                  <td className="px-3 py-2 font-mono text-primary">width</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">
                    number | string
                  </td>
                  <td className="px-3 py-2 text-muted-foreground">"100%"</td>
                  <td className="px-3 py-2 text-muted-foreground">
                    CSS width of the canvas wrapper.
                  </td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">height</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">
                    number | string
                  </td>
                  <td className="px-3 py-2 text-muted-foreground">200</td>
                  <td className="px-3 py-2 text-muted-foreground">
                    CSS height of the canvas drawing area.
                  </td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">
                    strokeColor
                  </td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">
                    string
                  </td>
                  <td className="px-3 py-2 text-muted-foreground">
                    "currentColor"
                  </td>
                  <td className="px-3 py-2 text-muted-foreground">
                    Hex or named color of the signature stroke. Uses current
                    font color if "currentColor".
                  </td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">
                    lineWidth
                  </td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">
                    number
                  </td>
                  <td className="px-3 py-2 text-muted-foreground">2.5</td>
                  <td className="px-3 py-2 text-muted-foreground">
                    Width/thickness of the drawing line in pixels.
                  </td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">variant</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">
                    "default" | "bordered" | "flat"
                  </td>
                  <td className="px-3 py-2 text-muted-foreground">"default"</td>
                  <td className="px-3 py-2 text-muted-foreground">
                    The styling variant of the signature wrapper box.
                  </td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">radius</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">
                    keyof typeof designRadius
                  </td>
                  <td className="px-3 py-2 text-muted-foreground">"md"</td>
                  <td className="px-3 py-2 text-muted-foreground">
                    Corner radius of the signature card.
                  </td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">onChange</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">{`(signature: string | null) => void`}</td>
                  <td className="px-3 py-2 text-muted-foreground">-</td>
                  <td className="px-3 py-2 text-muted-foreground">
                    Callback containing base64 data URL png output of signature
                    when drawing ends, or null when cleared.
                  </td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">onClear</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">{`() => void`}</td>
                  <td className="px-3 py-2 text-muted-foreground">-</td>
                  <td className="px-3 py-2 text-muted-foreground">
                    Callback fired when the signature is cleared.
                  </td>
                </tr>
                <tr>
                  <td className="px-3 py-2 font-mono text-primary">
                    isDisabled
                  </td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">
                    boolean
                  </td>
                  <td className="px-3 py-2 text-muted-foreground">false</td>
                  <td className="px-3 py-2 text-muted-foreground">
                    Disables all pointer interactions and fades the component
                    out slightly.
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
