"use client";

import * as React from "react";
import { AccessibilityCard } from "@/components/core/accessibilityCard";
import { CodeBlock } from "@/components/core/codeBlock";
import { DocsComponent } from "@/components/core/docsComponent";
import { DocsPagination } from "@/components/core/docsPagination";
import DocsTitle from "@/components/core/docsTitle";
import { ImportSnippet } from "@/components/core/importSnippet";
import { InstallationBlock } from "@/components/core/installationBlock";
import { AudioRecorder } from "@/components/ui/audioRecorder/audioRecorder";
import { audioRecorderCode } from "@/components/ui/audioRecorder/audioRecorder.code";
import { Separator } from "@/components/ui/separator/separator";

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

      <CodeBlock
        code={audioRecorderCode}
        componentName="audioRecorder.tsx"
        description="Core implementation of the Audio Recorder component with HTML5 Web Audio API visualizer, frequency domain calculations, and MediaRecorder bindings."
        tags={["React", "Tailwind", "Audio", "Recorder", "Voice", "Visualizer"]}
      />

      <DocsComponent
        title="Default"
        description="A microphone recording pad. Try recording to see the wave animations."
        props={["onStop: (blob: Blob, url: string) => void"]}
        preview={
          <div className="w-full max-w-sm">
            <AudioRecorder
              onStop={(blob, url) => setRecordedAudio({ blob, url })}
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
        props={[
          "visualizerColor: string",
          "variant: 'default' | 'bordered' | 'flat'",
        ]}
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
        props={["maxDuration: number"]}
        preview={
          <div className="w-full max-w-sm">
            <AudioRecorder maxDuration={10} />
          </div>
        }
        code={`<AudioRecorder maxDuration={10} />`}
      />

      <Separator label={<span className="px-2">API Reference</span>} gradient />

      <DocsComponent
        title="Props — AudioRecorder"
        description="Properties for configuring the AudioRecorder component."
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
                  <td className="px-3 py-2 font-mono text-primary">onStop</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">{`(blob: Blob, url: string) => void`}</td>
                  <td className="px-3 py-2 text-muted-foreground">undefined</td>
                  <td className="px-3 py-2 text-muted-foreground">
                    Callback fired when recording finishes and tracks are
                    stopped.
                  </td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">
                    visualizerColor
                  </td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">
                    string
                  </td>
                  <td className="px-3 py-2 text-muted-foreground">"#0ea5e9"</td>
                  <td className="px-3 py-2 text-muted-foreground">
                    Color of the active audio canvas bars.
                  </td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">
                    maxDuration
                  </td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">
                    number
                  </td>
                  <td className="px-3 py-2 text-muted-foreground">undefined</td>
                  <td className="px-3 py-2 text-muted-foreground">
                    Maximum duration in seconds before recording is
                    automatically stopped.
                  </td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">variant</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">
                    "default" | "bordered" | "flat"
                  </td>
                  <td className="px-3 py-2 text-muted-foreground">"default"</td>
                  <td className="px-3 py-2 text-muted-foreground">
                    Outer layout border/background styling.
                  </td>
                </tr>
                <tr>
                  <td className="px-3 py-2 font-mono text-primary">radius</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">
                    keyof typeof designRadius
                  </td>
                  <td className="px-3 py-2 text-muted-foreground">"lg"</td>
                  <td className="px-3 py-2 text-muted-foreground">
                    Corner radius of the recorder panel.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        }
      />

      <AccessibilityCard />

      <DocsPagination />
    </div>
  );
}
