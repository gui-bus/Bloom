import fs from "node:fs";
import path from "node:path";
import DocsTitle from "@/components/core/docsTitle";
import { Timeline, TimelineItem } from "@/components/ui/timeline/timeline";

interface ChangeGroup {
  title: string;
  items: string[];
}

interface ReleaseItem {
  version: string;
  date: string;
  groups: ChangeGroup[];
}

function parseChangelog(content: string): ReleaseItem[] {
  const releases: ReleaseItem[] = [];
  const lines = content.split("\n");
  let currentRelease: ReleaseItem | null = null;
  let currentGroup: ChangeGroup | null = null;

  for (let line of lines) {
    line = line.trim();
    if (line.startsWith("## [") || line.startsWith("## ")) {
      const match =
        line.match(/##\s+\[?([0-9.]+)\]?\s*-\s*([0-9-]+)/) ||
        line.match(/##\s+\[?([0-9.]+)\]?/);
      if (match) {
        if (currentRelease) {
          if (currentGroup && currentGroup.items.length > 0) {
            currentRelease.groups.push(currentGroup);
          }
          releases.push(currentRelease);
        }
        currentRelease = {
          version: match[1],
          date: match[2] || "",
          groups: [],
        };
        currentGroup = null;
      }
    } else if (line.startsWith("### ")) {
      if (currentRelease) {
        if (currentGroup && currentGroup.items.length > 0) {
          currentRelease.groups.push(currentGroup);
        }
        currentGroup = {
          title: line.replace("### ", ""),
          items: [],
        };
      }
    } else if (line.startsWith("- ")) {
      if (currentGroup) {
        currentGroup.items.push(line.substring(2));
      } else if (currentRelease) {
        if (!currentGroup) {
          currentGroup = { title: "Changes", items: [] };
        }
        currentGroup.items.push(line.substring(2));
      }
    } else if (
      line.length > 0 &&
      !line.startsWith("# ") &&
      !line.startsWith("---") &&
      !line.startsWith("🇺🇸") &&
      !line.startsWith("All notable") &&
      !line.startsWith("The format")
    ) {
      if (currentGroup && currentGroup.items.length > 0) {
        const lastIdx = currentGroup.items.length - 1;
        currentGroup.items[lastIdx] += " " + line;
      }
    }
  }

  if (currentRelease) {
    if (currentGroup && currentGroup.items.length > 0) {
      currentRelease.groups.push(currentGroup);
    }
    releases.push(currentRelease);
  }

  return releases;
}

function renderMarkdownText(text: string) {
  const tokens = text.split(/(\*\*.*?\*\*|`.*?`)/g);
  return tokens.map((token, index) => {
    if (token.startsWith("**") && token.endsWith("**")) {
      return (
        <strong
          key={index}
          className="font-semibold text-zinc-900 dark:text-zinc-100"
        >
          {token.slice(2, -2)}
        </strong>
      );
    }
    if (token.startsWith("`") && token.endsWith("`")) {
      return (
        <code
          key={index}
          className="text-sky-500 font-mono bg-zinc-150 dark:bg-zinc-800 px-1 py-0.5 rounded text-xs"
        >
          {token.slice(1, -1)}
        </code>
      );
    }
    return token;
  });
}

export default async function ChangelogPage() {
  const filePath = path.join(process.cwd(), "CHANGELOG.en.md");
  let releases: ReleaseItem[] = [];

  try {
    if (fs.existsSync(filePath)) {
      const content = fs.readFileSync(filePath, "utf8");
      releases = parseChangelog(content);
    }
  } catch (error) {
    console.error("Failed to read changelog file:", error);
  }

  return (
    <div className="space-y-8">
      <DocsTitle
        title="Changelog"
        description="See the release history, new components, bug fixes, and improvements in the Bloom UI ecosystem."
      />

      <Timeline variant="flat" color="primary" size="md">
        {releases.map((release) => (
          <TimelineItem
            id={`version-${release.version.replace(/\./g, "-")}`}
            key={release.version}
            title={`Version ${release.version}`}
            time={release.date}
            status={release.version === "1.0.10" ? "active" : "completed"}
            description={
              <div className="grid gap-6 mt-4 text-left">
                <h3 className="sr-only">Version {release.version}</h3>
                {release.groups.map((group, groupIdx) => (
                  <div
                    key={`${release.version}-${groupIdx}`}
                    className="space-y-2"
                  >
                    <h4 className="text-xs font-semibold tracking-wider uppercase text-zinc-400 dark:text-zinc-500">
                      {group.title}
                    </h4>
                    <ul className="space-y-2 list-disc pl-4 text-sm text-zinc-655 dark:text-zinc-345">
                      {group.items.map((item, itemIdx) => (
                        <li key={itemIdx} className="leading-relaxed">
                          {renderMarkdownText(item)}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            }
          />
        ))}
      </Timeline>
    </div>
  );
}
