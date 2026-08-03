const fs = require("fs");
const path = require("path");

const projectRoot = path.resolve(__dirname, "../");
const uiComponentsDir = path.join(projectRoot, "components/ui");

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

    // Primary tsx file
    const tsxFileName = `${compName}.tsx`;
    const tsxFilePath = path.join(compDir, tsxFileName);

    if (!fs.existsSync(tsxFilePath)) {
      continue;
    }

    const tsxContent = fs.readFileSync(tsxFilePath, "utf8");

    // Construct export variable name: e.g. buttonCode, avatarGroupCode
    const varName = `${compName}Code`;
    const codeFileName = `${compName}.code.ts`;
    const codeFilePath = path.join(compDir, codeFileName);

    const codeFileContent = `export const ${varName} = ${JSON.stringify(tsxContent)};\n`;

    fs.writeFileSync(codeFilePath, codeFileContent, "utf8");
    updatedCount++;
  }

  console.log(
    `Successfully synchronized ${updatedCount} component code string files!`,
  );
}

main();
