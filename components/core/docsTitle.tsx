"use client";

import { Icon } from "@iconify/react";
import * as React from "react";
import { toast } from "@/components/ui/toast/toast";

interface DocsTitleProps {
  title: string;
  description: string;
}

const DocsTitle = ({ title, description }: DocsTitleProps) => {
  const [copied, setCopied] = React.useState(false);

  React.useEffect(() => {
    if (title) {
      document.title = `Bloom UI — ${title} | React Component Library`;
    }
  }, [title]);

  const handleCopyMarkdown = () => {
    let markdown = `# ${title}\n\n${description}\n\n`;

    const cliCode =
      document.querySelector("code")?.textContent ||
      `npx @bloomui-react/cli add ${title.toLowerCase().replace(/\s+/g, "")}`;
    if (cliCode?.includes("npx @bloomui-react/cli")) {
      markdown += `## CLI Installation\n\`\`\`bash\n${cliCode.trim()}\n\`\`\`\n\n`;
    }

    const codeBlocks = Array.from(document.querySelectorAll("pre code"));

    if (codeBlocks && codeBlocks.length > 0) {
      markdown += `## Code Implementation & Examples\n\n`;
      codeBlocks.forEach((codeEl, i) => {
        const text = codeEl.textContent?.trim();
        if (text && !text.startsWith("npx @bloomui-react/cli")) {
          markdown += `### Example ${i + 1}\n\`\`\`tsx\n${text}\n\`\`\`\n\n`;
        }
      });
    }

    navigator.clipboard.writeText(markdown);
    setCopied(true);
    toast.success("Copied as Markdown!", {
      description:
        "Full component documentation copied to clipboard for AI prompts.",
    });
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-2 border-b border-zinc-200/60 dark:border-zinc-800/60">
      <div className="w-full max-w-3xl">
        <h1 className="text-3xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-100">
          {title}
        </h1>
        <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-1 leading-relaxed">
          {description}
        </p>
      </div>

      <div className="shrink-0">
        <button
          type="button"
          onClick={handleCopyMarkdown}
          className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100 hover:border-sky-500/50 hover:bg-sky-500/5 text-xs font-bold transition-all duration-200 shadow-xs cursor-pointer active:scale-95 select-none"
        >
          <Icon
            icon={
              copied ? "hugeicons:checkmark-circle-02" : "hugeicons:copy-01"
            }
            className={`size-4 transition-transform duration-200 ${copied ? "text-sky-500 scale-110" : "text-sky-500"}`}
          />
          <span>{copied ? "Copied!" : "Copy Markdown"}</span>
        </button>
      </div>
    </div>
  );
};

export default DocsTitle;
