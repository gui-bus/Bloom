"use client";

import { useEffect, useState } from "react";
import { CircularProgress } from "@/components/ui/circularProgress/circularProgress";
import { circularProgressCode } from "@/components/ui/circularProgress/circularProgress.code";

export default function CircularProgressPage() {
  const [value, setValue] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setValue((v) => (v >= 100 ? 0 : v + 10));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="p-8 space-y-8">
      <h1 className="text-3xl font-bold">Circular Progress</h1>
      <p className="text-zinc-500">
        A circular progress indicator built with SVG.
      </p>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Example</h2>
        <div className="p-6 border border-zinc-200 dark:border-zinc-800 rounded-lg flex justify-center gap-8 items-center flex-wrap">
          <CircularProgress
            value={value}
            size={80}
            strokeWidth={8}
            color="text-blue-500"
          />
          <CircularProgress
            value={value}
            size={120}
            strokeWidth={12}
            gradient={{ start: "#10b981", end: "#3b82f6" }}
          />
          <CircularProgress
            value={75}
            size={100}
            strokeWidth={10}
            color="text-rose-500"
            showValue={false}
          />
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Code</h2>
        <pre className="p-4 bg-zinc-900 text-zinc-100 rounded-lg overflow-x-auto text-sm">
          <code>{circularProgressCode}</code>
        </pre>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Props</h2>
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-zinc-200 dark:border-zinc-800">
              <th className="py-2">Prop</th>
              <th className="py-2">Type</th>
              <th className="py-2">Default</th>
              <th className="py-2">Description</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-zinc-200 dark:border-zinc-800">
              <td className="py-2">value</td>
              <td className="py-2 text-zinc-500">number</td>
              <td className="py-2">-</td>
              <td className="py-2">The progress value (0 to 100).</td>
            </tr>
            <tr className="border-b border-zinc-200 dark:border-zinc-800">
              <td className="py-2">size</td>
              <td className="py-2 text-zinc-500">number</td>
              <td className="py-2">100</td>
              <td className="py-2">Width and height in pixels.</td>
            </tr>
            <tr className="border-b border-zinc-200 dark:border-zinc-800">
              <td className="py-2">strokeWidth</td>
              <td className="py-2 text-zinc-500">number</td>
              <td className="py-2">10</td>
              <td className="py-2">Thickness of the circle's stroke.</td>
            </tr>
            <tr className="border-b border-zinc-200 dark:border-zinc-800">
              <td className="py-2">showValue</td>
              <td className="py-2 text-zinc-500">boolean</td>
              <td className="py-2">true</td>
              <td className="py-2">
                Whether to display the text percentage inside.
              </td>
            </tr>
            <tr className="border-b border-zinc-200 dark:border-zinc-800">
              <td className="py-2">color</td>
              <td className="py-2 text-zinc-500">string</td>
              <td className="py-2">"text-blue-500"</td>
              <td className="py-2">
                Tailwind text color class for the stroke.
              </td>
            </tr>
            <tr className="border-b border-zinc-200 dark:border-zinc-800">
              <td className="py-2">trackColor</td>
              <td className="py-2 text-zinc-500">string</td>
              <td className="py-2">"text-zinc-200 dark:text-zinc-800"</td>
              <td className="py-2">
                Tailwind text color class for the background track.
              </td>
            </tr>
            <tr className="border-b border-zinc-200 dark:border-zinc-800">
              <td className="py-2">gradient</td>
              <td className="py-2 text-zinc-500">{`{ start: string, end: string }`}</td>
              <td className="py-2">undefined</td>
              <td className="py-2">
                Gradient start and end hex colors (overrides color).
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
