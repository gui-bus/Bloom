"use client";

import { Icon } from "@iconify/react";
import * as React from "react";
import { CodeBlock } from "@/components/core/codeBlock";
import { DocsComponent } from "@/components/core/docsComponent";
import { DocsPagination } from "@/components/core/docsPagination";
import DocsTitle from "@/components/core/docsTitle";
import { ImportSnippet } from "@/components/core/importSnippet";
import { InstallationBlock } from "@/components/core/installationBlock";
import { AudioRecorder } from "@/components/ui/audioRecorder/audioRecorder";
import { audioRecorderCode } from "@/components/ui/audioRecorder/audioRecorder.code";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs/tabs";

export default function AudioRecorderPage() {
  const [recordedAudio, setRecordedAudio] = React.useState<{
    blob: Blob;
    url: string;
  } | null>(null);

  return (
    <div className="space-y-8">
      <DocsTitle
        title="Audio Recorder"
        description="A microphone recording interface that displays a canvas-based live waveform audio visualizer while capturing, allowing user playbacks."
      />

      <ImportSnippet
        importCode={`import { AudioRecorder } from "@/components/ui/audioRecorder/audioRecorder";`}
      />

      <InstallationBlock componentName="audioRecorder" />

      <Tabs defaultValue="audioRecorder">
        <TabsList background={false}>
          <TabsTrigger
            value="audioRecorder"
            startContent={<Icon icon="devicon:react" className="size-5" />}
          >
            audioRecorder.tsx
          </TabsTrigger>
        </TabsList>

        <TabsContent value="audioRecorder">
          <CodeBlock
            code={audioRecorderCode}
            componentName="audioRecorder.tsx"
            description="Core implementation of the Audio Recorder component with HTML5 Web Audio API visualizer, frequency domain calculations, and MediaRecorder bindings."
            tags={[
              "React",
              "Tailwind",
              "Audio",
              "Recorder",
              "Voice",
              "Visualizer",
            ]}
          />
        </TabsContent>
      </Tabs>

      <DocsComponent
        title="Default"
        description="A microphone recording pad. Try recording to see the wave animations."
        preview={
          <div className="w-full max-w-sm">
            <AudioRecorder
              onStop={(blob, url) => setRecordedAudio({ blob, url })}
              placeholder="Record a voice clip"
            />
            {recordedAudio && (
              <div className="mt-4 p-3 border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-950/40 rounded-lg text-xs font-mono text-zinc-500 dark:text-zinc-400">
                <span className="block mb-1">Record Output:</span>
                <span>Type: {recordedAudio.blob.type}</span>
                <span className="block">
                  Size: {(recordedAudio.blob.size / 1024).toFixed(2)} KB
                </span>
              </div>
            )}
          </div>
        }
        code={`const [recorded, setRecorded] = React.useState(null);

<AudioRecorder
  onStop={(blob, url) => setRecorded({ blob, url })}
/>`}
      />

      <DocsComponent
        title="Custom visualizer"
        description="Customize the color of the dynamic wave-bars and the card borders."
        preview={
          <div className="w-full max-w-sm space-y-6">
            <div>
              <span className="text-xs font-mono text-muted-foreground block mb-2">
                visualizerColor="#ec4899" (Pink)
              </span>
              <AudioRecorder visualizerColor="#ec4899" variant="bordered" />
            </div>
            <div>
              <span className="text-xs font-mono text-muted-foreground block mb-2">
                visualizerColor="#10b981" (Emerald)
              </span>
              <AudioRecorder visualizerColor="#10b981" variant="flat" />
            </div>
          </div>
        }
        code={`<AudioRecorder visualizerColor="#ec4899" variant="bordered" />
<AudioRecorder visualizerColor="#10b981" variant="flat" />`}
      />

      <DocsComponent
        title="Constraints"
        description="Configure a maximum recording duration (in seconds)."
        preview={
          <div className="w-full max-w-sm">
            <AudioRecorder maxDuration={10} />
          </div>
        }
        code={`<AudioRecorder maxDuration={10} />`}
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
                  onStop
                </td>
                <td className="px-4 py-3 font-mono text-primary">
                  (blob: Blob, url: string) =&gt; void
                </td>
                <td className="px-4 py-3 font-mono">undefined</td>
                <td className="px-4 py-3">
                  Callback fired when recording finishes and tracks are stopped.
                </td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-mono text-zinc-900 dark:text-zinc-100">
                  visualizerColor
                </td>
                <td className="px-4 py-3 font-mono text-primary">string</td>
                <td className="px-4 py-3 font-mono">"#0ea5e9"</td>
                <td className="px-4 py-3">
                  Color of the active audio canvas bars.
                </td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-mono text-zinc-900 dark:text-zinc-100">
                  maxDuration
                </td>
                <td className="px-4 py-3 font-mono text-primary">number</td>
                <td className="px-4 py-3 font-mono">undefined</td>
                <td className="px-4 py-3">
                  Maximum duration in seconds before recording is automatically
                  stopped.
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
                  Outer layout border/background styling.
                </td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-mono text-zinc-900 dark:text-zinc-100">
                  radius
                </td>
                <td className="px-4 py-3 font-mono text-primary">
                  keyof typeof designRadius
                </td>
                <td className="px-4 py-3 font-mono">"lg"</td>
                <td className="px-4 py-3">
                  Corner radius of the recorder panel.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <DocsPagination
        prev={{ title: "Tour Guide", href: "/components/tour" }}
        next={{ title: "Transfer List", href: "/components/transferList" }}
      />
    </div>
  );
}
