const fs = require("node:fs");
const path = require("node:path");

const appComponentsDir = path.join(__dirname, "../app/components");

const customShortcutsMap = {
  dialog: [
    { key: "Escape", description: "Closes the modal dialog overlay." },
    {
      key: "Tab",
      description: "Cycles focus trapped inside active dialog container.",
    },
  ],
  dropdownMenu: [
    {
      key: "ArrowDown / ArrowUp",
      description: "Navigates between menu items.",
    },
    {
      key: "Enter / Space",
      description: "Triggers highlighted item action or submenu.",
    },
    { key: "Escape", description: "Closes the open dropdown menu overlay." },
  ],
  select: [
    {
      key: "ArrowDown / ArrowUp",
      description: "Navigates between dropdown options.",
    },
    {
      key: "Enter",
      description: "Selects active option and closes select trigger.",
    },
    { key: "Escape", description: "Dismisses select dropdown popup." },
  ],
  accordion: [
    {
      key: "ArrowDown / ArrowUp",
      description: "Navigates between accordion headers.",
    },
    {
      key: "Space / Enter",
      description: "Expands or collapses selected accordion section.",
    },
    {
      key: "Home / End",
      description: "Jumps focus to first or last accordion item.",
    },
  ],
  tabs: [
    {
      key: "ArrowLeft / ArrowRight",
      description: "Switches active tab selection.",
    },
    { key: "Home / End", description: "Moves focus to first or last tab." },
  ],
  combobox: [
    {
      key: "ArrowDown / ArrowUp",
      description: "Navigates search suggestion list.",
    },
    { key: "Enter", description: "Selects highlighted combobox option." },
    { key: "Escape", description: "Clears query or closes suggestion popup." },
  ],
  command: [
    {
      key: "Ctrl + K / Cmd + K",
      description: "Opens global command palette dialog.",
    },
    { key: "ArrowDown / ArrowUp", description: "Navigates search results." },
    { key: "Enter", description: "Executes selected command action." },
  ],
};

function main() {
  console.log(
    "Injecting AccessibilityCards into component documentation pages...",
  );

  const dirs = fs.readdirSync(appComponentsDir, { withFileTypes: true });
  let updated = 0;

  for (const dir of dirs) {
    if (!dir.isDirectory() || dir.name.startsWith("_")) continue;

    const compFolderName = dir.name;
    const pagePath = path.join(appComponentsDir, compFolderName, "page.tsx");

    if (!fs.existsSync(pagePath)) continue;

    let content = fs.readFileSync(pagePath, "utf8");

    // Check if AccessibilityCard is already rendered in page
    if (content.includes("<AccessibilityCard")) continue;

    // Check if import is present
    if (!content.includes("import { AccessibilityCard }")) {
      content = content.replace(
        /^("use client"|'use client');?\r?\n/m,
        '$&\nimport { AccessibilityCard } from "@/components/core/accessibilityCard";\n',
      );
    }

    const shortcuts = customShortcutsMap[compFolderName];
    const shortcutsJSX = shortcuts
      ? `
      {/* Accessibility & ARIA Section */}
      <AccessibilityCard
        shortcuts={${JSON.stringify(shortcuts)}}
      />
`
      : `
      {/* Accessibility & ARIA Section */}
      <AccessibilityCard />
`;

    // Locate API Reference separator
    const apiRefSeparatorRegex =
      /<Separator\s+label=\{<span className="px-2">API Reference<\/span>\}\s+gradient\s*\/>/;
    const match = content.match(apiRefSeparatorRegex);

    if (match) {
      const matchIndex = match.index;
      content =
        content.slice(0, matchIndex) +
        shortcutsJSX +
        "\n      " +
        content.slice(matchIndex);

      fs.writeFileSync(pagePath, content, "utf8");
      updated++;
      console.log(
        `Injected AccessibilityCard: app/components/${compFolderName}/page.tsx`,
      );
    }
  }

  console.log(
    `Successfully injected AccessibilityCards into ${updated} component pages!`,
  );
}

main();
