const fs = require("node:fs");
const path = require("node:path");

const projectRoot = path.resolve(__dirname, "../");
const uiComponentsDir = path.join(projectRoot, "components/ui");

function extractAiDocs(compName, pageContent) {
  let description = "";
  const descMatch = pageContent.match(/DocsTitle[^>]*description=(?:"([^"]+)"|{\`([\s\S]*?)\`})/);
  if (descMatch) {
    description = descMatch[1] || descMatch[2];
  }

  let importSnippet = `import { ${compName.charAt(0).toUpperCase() + compName.slice(1)} } from "@/components/ui/${compName}/${compName}";`;
  const importMatch = pageContent.match(/ImportSnippet[^>]*importCode=(?:"([^"]+)"|{\`([\s\S]*?)\`})/);
  if (importMatch) {
    importSnippet = importMatch[1] || importMatch[2];
  }

  const examples = [];
  const codeRegex = /code=(?:"([^"]+)"|{\`([\s\S]*?)\`})/g;
  let match;
  while ((match = codeRegex.exec(pageContent)) !== null) {
    const code = match[1] || match[2];
    if (code && !code.includes("import ") && !code.includes(".css")) {
      examples.push(code.trim());
      if (examples.length >= 2) break;
    }
  }

  let propsTableMarkdown = "";
  const tableMatch = pageContent.match(/<table[\s\S]*?>([\s\S]*?)<\/table>/);
  if (tableMatch) {
    const tableBody = tableMatch[1];
    const rows = [];
    const rowRegex = /<tr[\s\S]*?>([\s\S]*?)<\/tr>/g;
    let rMatch;
    while ((rMatch = rowRegex.exec(tableBody)) !== null) {
      const cells = [];
      const cellRegex = /<td[\s\S]*?>([\s\S]*?)<\/td>/g;
      let cMatch;
      while ((cMatch = cellRegex.exec(rMatch[1])) !== null) {
        const cellText = cMatch[1].replace(/<[^>]*>/g, "").replace(/\s+/g, " ").trim();
        cells.push(cellText);
      }
      if (cells.length > 0) {
        rows.push(`| ${cells.join(" | ")} |`);
      }
    }
    if (rows.length > 0) {
      propsTableMarkdown = `| Prop | Type | Default | Description |\n| --- | --- | --- | --- |\n${rows.join("\n")}`;
    }
  }

  let md = `### ${compName.charAt(0).toUpperCase() + compName.slice(1)}\n${description}\n\n`;
  md += `**Import Path**:\n\`\`\`typescript\n${importSnippet}\n\`\`\`\n\n`;
  if (propsTableMarkdown) {
    md += `**API Reference**:\n${propsTableMarkdown}\n\n`;
  }
  if (examples.length > 0) {
    md += `**Code Examples**:\n`;
    examples.forEach((ex) => {
      md += `\`\`\`tsx\n${ex}\n\`\`\`\n\n`;
    });
  }
  return md;
}

function main() {
  console.log("Synchronizing component code strings...");

  if (!fs.existsSync(uiComponentsDir)) {
    console.error("UI components directory not found.");
    process.exit(1);
  }

  const entries = fs.readdirSync(uiComponentsDir, { withFileTypes: true });

  let updatedCount = 0;

  for (const entry of entries) {
    if (!entry.isDirectory()) continue;

    const compName = entry.name;
    const compDir = path.join(uiComponentsDir, compName);

    const tsxFileName = `${compName}.tsx`;
    const tsxFilePath = path.join(compDir, tsxFileName);

    if (!fs.existsSync(tsxFilePath)) {
      continue;
    }

    const tsxContent = fs.readFileSync(tsxFilePath, "utf8");

    const varName = `${compName}Code`;
    const codeFileName = `${compName}.code.ts`;
    const codeFilePath = path.join(compDir, codeFileName);

    let aiDocs = "";
    const pageFilePath = path.join(projectRoot, `app/components/${compName}/page.tsx`);
    if (fs.existsSync(pageFilePath)) {
      try {
        const pageContent = fs.readFileSync(pageFilePath, "utf8");
        aiDocs = extractAiDocs(compName, pageContent);
      } catch (_e) {}
    }

    const codeFileContent = `export const ${varName} = ${JSON.stringify(tsxContent)};\n\nexport const ${compName}AiDocs = ${JSON.stringify(aiDocs)};\n`;

    fs.writeFileSync(codeFilePath, codeFileContent, "utf8");
    updatedCount++;
  }

  console.log(
    `Successfully synchronized ${updatedCount} component code string files!`,
  );
}

main();
