"use client";

import { CodeBlock } from "@/components/core/codeBlock";
import { DocsComponent } from "@/components/core/docsComponent";
import { DocsPagination } from "@/components/core/docsPagination";
import DocsTitle from "@/components/core/docsTitle";
import { ImportSnippet } from "@/components/core/importSnippet";
import { InstallationBlock } from "@/components/core/installationBlock";
import { Separator } from "@/components/ui/separator/separator";
import { Typography } from "@/components/ui/typography/typography";
import { typographyCode } from "@/components/ui/typography/typography.code";

export default function TypographyComponentPage() {
  return (
    <div className="space-y-8">
      <DocsTitle
        title="Typography"
        description="Standardized typographic text hierarchy styles including headings, body paragraphs, colors, and inline code elements."
      />

      <ImportSnippet
        importCode={`import { Typography } from "@/components/ui/typography/typography";`}
      />

      <InstallationBlock componentName="typography" />

      <CodeBlock
        code={typographyCode}
        componentName="typography.tsx"
        description="Core implementation of the Typography component."
        tags={["React", "Typography", "Headings", "Text"]}
      />

      <DocsComponent
        title="Default"
        description="Standard paragraph text typography element."
        preview={
          <div className="max-w-md w-full">
            <Typography variant="p">
              Bloom UI is an accessible, customizable, and high-performance
              React component library designed with modern aesthetic tokens.
            </Typography>
          </div>
        }
        code={`<Typography variant="p">
  Bloom UI is an accessible, customizable, and high-performance React component library...
</Typography>`}
      />

      <DocsComponent
        title="Headings Scale"
        description="Typographic hierarchy sizes ranging from H1 to H6 headings."
        preview={
          <div className="space-y-4 w-full">
            <Typography variant="h1">Heading 1 — Display</Typography>
            <Typography variant="h2">Heading 2 — Section Title</Typography>
            <Typography variant="h3">Heading 3 — Subsection Title</Typography>
            <Typography variant="h4">Heading 4 — Card Header</Typography>
            <Typography variant="h5">Heading 5 — Subheading</Typography>
            <Typography variant="h6">Heading 6 — Small Label</Typography>
          </div>
        }
        code={`<Typography variant="h1">Heading 1</Typography>
<Typography variant="h2">Heading 2</Typography>
<Typography variant="h3">Heading 3</Typography>
<Typography variant="h4">Heading 4</Typography>`}
        props={["variant: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'"]}
      />

      <DocsComponent
        props={[
          "color: 'default' | 'muted' | 'primary' | 'secondary' | 'accent' | 'success' | 'warning' | 'danger'",
        ]}
        title="Colors"
        description="Apply theme colors to match the design system color scheme."
        preview={
          <div className="space-y-2 w-full">
            <Typography color="default">Default text color</Typography>
            <Typography color="muted">Muted text color</Typography>
            <Typography color="primary">Primary text color</Typography>
            <Typography color="secondary">Secondary text color</Typography>
            <Typography color="accent">Accent text color</Typography>
            <Typography color="success">Success text color</Typography>
            <Typography color="warning">Warning text color</Typography>
            <Typography color="danger">Danger text color</Typography>
          </div>
        }
        code={`<Typography color="default">Default text</Typography>
<Typography color="muted">Muted text</Typography>
<Typography color="primary">Primary text</Typography>
<Typography color="secondary">Secondary text</Typography>
<Typography color="success">Success text</Typography>
<Typography color="danger">Danger text</Typography>`}
      />

      <DocsComponent
        title="Line Clamping"
        description="Clamp long paragraphs to a max line count."
        preview={
          <div className="max-w-md w-full p-4 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900">
            <Typography clampLines={2} showExpandToggle variant="p">
              Bloom provides a rich collection of modular, accessible components
              designed for modern web applications. Every component adheres
              strictly to dark/light neutral design tokens and provides smooth
              micro-animations, customizable variants, and comprehensive API
              documentation.
            </Typography>
          </div>
        }
        code={`<Typography clampLines={2} showExpandToggle variant="p">
  Bloom provides a rich collection of modular, accessible components...
</Typography>`}
        props={["clampLines: number", "showExpandToggle: boolean"]}
      />

      <Separator label={<span className="px-2">API Reference</span>} gradient />

      <div className="overflow-x-auto rounded-2xl border border-zinc-200 dark:border-zinc-800">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-zinc-200 dark:border-zinc-800 bg-zinc-100 dark:bg-zinc-800/50">
              <th className="px-4 py-3 text-left font-bold text-zinc-900 dark:text-zinc-100">
                Prop
              </th>
              <th className="px-4 py-3 text-left font-bold text-zinc-900 dark:text-zinc-100">
                Type
              </th>
              <th className="px-4 py-3 text-left font-bold text-zinc-900 dark:text-zinc-100">
                Default
              </th>
              <th className="px-4 py-3 text-left font-bold text-zinc-900 dark:text-zinc-100">
                Description
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-zinc-200 dark:divide-zinc-800">
            <tr>
              <td className="px-4 py-3 font-mono text-xs text-sky-500">
                variant
              </td>
              <td className="px-4 py-3 text-zinc-600 dark:text-zinc-300">
                'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'large' |
                'small' | 'muted' | 'code'
              </td>
              <td className="px-4 py-3 text-zinc-400">'p'</td>
              <td className="px-4 py-3">
                Typographic size and HTML tag mapping.
              </td>
            </tr>
            <tr>
              <td className="px-4 py-3 font-mono text-xs text-sky-500">
                color
              </td>
              <td className="px-4 py-3 text-zinc-600 dark:text-zinc-300">
                'default' | 'muted' | 'primary' | 'secondary' | 'accent' |
                'success' | 'warning' | 'danger'
              </td>
              <td className="px-4 py-3 text-zinc-400">'default'</td>
              <td className="px-4 py-3">
                Theme color palette of typography text.
              </td>
            </tr>
            <tr>
              <td className="px-4 py-3 font-mono text-xs text-sky-500">
                clampLines
              </td>
              <td className="px-4 py-3 text-zinc-600 dark:text-zinc-300">
                number
              </td>
              <td className="px-4 py-3 text-zinc-400">—</td>
              <td className="px-4 py-3">
                Limits text to specified number of lines.
              </td>
            </tr>
            <tr>
              <td className="px-4 py-3 font-mono text-xs text-sky-500">
                showExpandToggle
              </td>
              <td className="px-4 py-3 text-zinc-600 dark:text-zinc-300">
                boolean
              </td>
              <td className="px-4 py-3 text-zinc-400">false</td>
              <td className="px-4 py-3">Shows a read-more/show-less button.</td>
            </tr>
          </tbody>
        </table>
      </div>

      <DocsPagination />
    </div>
  );
}
