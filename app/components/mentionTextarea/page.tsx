"use client";

import { useState } from "react";
import { CodeBlock } from "@/components/core/codeBlock";
import { DocsComponent } from "@/components/core/docsComponent";
import { DocsPagination } from "@/components/core/docsPagination";
import DocsTitle from "@/components/core/docsTitle";
import { ImportSnippet } from "@/components/core/importSnippet";
import { InstallationBlock } from "@/components/core/installationBlock";
import { MentionTextarea } from "@/components/ui/mentionTextarea/mentionTextarea";
import { mentionTextareaCode } from "@/components/ui/mentionTextarea/mentionTextarea.code";
import { Separator } from "@/components/ui/separator/separator";

const TEAM_MEMBERS = [
  { id: "1", display: "Alice Johnson", subtitle: "@alice_j" },
  { id: "2", display: "Bob Smith", subtitle: "@bob_developer" },
  { id: "3", display: "Charlie Brown", subtitle: "@charlie_designer" },
  { id: "4", display: "Diana Prince", subtitle: "@diana_wonder" },
  { id: "5", display: "Evan Wright", subtitle: "@evan_manager" },
];

const HASHTAGS = [
  { id: "1", display: "announcement", subtitle: "Important announcements" },
  { id: "2", display: "bugfix", subtitle: "Defect and issue fixes" },
  { id: "3", display: "feature", subtitle: "New functional upgrades" },
  { id: "4", display: "hotfix", subtitle: "Critical production patch" },
  { id: "5", display: "release", subtitle: "Production deployment milestone" },
];

export default function MentionTextareaPage() {
  const [value1, setValue1] = useState("");
  const [value2, setValue2] = useState("");
  const [lastMention, setLastMention] = useState("");
  const [lastHashtag, setLastHashtag] = useState("");

  return (
    <div className="space-y-8">
      <DocsTitle
        title="Mention Textarea"
        description="A rich textarea overlay that parses triggers like '@' or '#' to fetch and display autocomplete suggestion menus with avatar icons."
      />

      <ImportSnippet
        importCode={`import { MentionTextarea } from "@/components/ui/mentionTextarea/mentionTextarea";`}
      />

      <InstallationBlock componentName="mentionTextarea" />

      <CodeBlock
        code={mentionTextareaCode}
        componentName="mentionTextarea.tsx"
        description="Overlay caret calculation coordinates positioning suggestion portal."
        tags={["React", "Input", "Editor", "Mention"]}
      />

      <DocsComponent
        title="User Mentions (@)"
        description="Standard auto-completion trigger triggered by '@' to reference teammates, complete with avatar fallback icons and handles."
        props={[
          "items: MentionItem[]",
          "onMention: (item: MentionItem) => void",
          "placeholder: string",
        ]}
        preview={
          <div className="w-full max-w-lg p-6 bg-white dark:bg-zinc-900 rounded-xl border border-zinc-200 dark:border-zinc-800 space-y-4">
            <div>
              <label className="block text-xs font-semibold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider mb-2">
                Type @ to view teammates list
              </label>
              <MentionTextarea
                value={value1}
                onChange={(e) => setValue1(e.target.value)}
                items={TEAM_MEMBERS}
                onMention={(item) => setLastMention(item.display)}
                placeholder="Mention @Alice here..."
              />
            </div>
            {lastMention && (
              <p className="text-xs text-emerald-600 dark:text-emerald-400 font-medium">
                Last mentioned teammate:{" "}
                <span className="font-mono bg-emerald-50 dark:bg-emerald-950/30 px-1.5 py-0.5 rounded">
                  {lastMention}
                </span>
              </p>
            )}
          </div>
        }
        code={`const TEAM_MEMBERS = [
  { id: "1", display: "Alice Johnson", subtitle: "@alice_j" },
  { id: "2", display: "Bob Smith", subtitle: "@bob_developer" }
];

const [value, setValue] = useState("");

<MentionTextarea
  value={value}
  onChange={(e) => setValue(e.target.value)}
  items={TEAM_MEMBERS}
  onMention={(item) => console.log(item)}
  placeholder="Type @Alice..."
/>`}
      />

      <DocsComponent
        title="Hashtag Triggers (#)"
        description="Configure any trigger string like '#' to autocomplete tags or topics."
        props={["trigger: string", "items: MentionItem[]"]}
        preview={
          <div className="w-full max-w-lg p-6 bg-white dark:bg-zinc-900 rounded-xl border border-zinc-200 dark:border-zinc-800 space-y-4">
            <div>
              <label className="block text-xs font-semibold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider mb-2">
                Type # to autocomplete tags
              </label>
              <MentionTextarea
                trigger="#"
                value={value2}
                onChange={(e) => setValue2(e.target.value)}
                items={HASHTAGS}
                onMention={(item) => setLastHashtag(item.display)}
                placeholder="Add tags using #feature..."
              />
            </div>
            {lastHashtag && (
              <p className="text-xs text-indigo-600 dark:text-indigo-400 font-medium">
                Last selected tag:{" "}
                <span className="font-mono bg-indigo-50 dark:bg-indigo-950/30 px-1.5 py-0.5 rounded">
                  #{lastHashtag}
                </span>
              </p>
            )}
          </div>
        }
        code={`const HASHTAGS = [
  { id: "1", display: "announcement", subtitle: "Important announcements" },
  { id: "2", display: "feature", subtitle: "New functional upgrades" }
];

const [value, setValue] = useState("");

<MentionTextarea
  trigger="#"
  value={value}
  onChange={(e) => setValue(e.target.value)}
  items={HASHTAGS}
  onMention={(item) => console.log(item)}
  placeholder="Type #feature..."
/>`}
      />

      <Separator label={<span className="px-2">API Reference</span>} gradient />

      <DocsComponent
        title="Props — MentionTextarea"
        description="Explore the available props for the MentionTextarea component."
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
                  <td className="px-3 py-2 font-mono text-primary">trigger</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">
                    string
                  </td>
                  <td className="px-3 py-2 text-muted-foreground">'@'</td>
                  <td className="px-3 py-2 text-muted-foreground">
                    Character trigger that triggers suggestion list popup
                  </td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">items</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">
                    MentionItem[]
                  </td>
                  <td className="px-3 py-2 text-muted-foreground">required</td>
                  <td className="px-3 py-2 text-muted-foreground">
                    Autocomplete suggestions metadata list
                  </td>
                </tr>
                <tr>
                  <td className="px-3 py-2 font-mono text-primary">
                    onMention
                  </td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">
                    {"(item: MentionItem) => void"}
                  </td>
                  <td className="px-3 py-2 text-muted-foreground">undefined</td>
                  <td className="px-3 py-2 text-muted-foreground">
                    Callback fired when a user selects a suggestion block
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
