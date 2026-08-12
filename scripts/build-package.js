const fs = require("node:fs");
const path = require("node:path");

const ROOT_DIR = path.resolve(__dirname, "..");
const UI_DIR = path.join(ROOT_DIR, "components", "ui");
const LIB_DIR = path.join(ROOT_DIR, "lib");
const PKG_DIR = path.join(ROOT_DIR, "packages", "react");
const SRC_DIR = path.join(PKG_DIR, "src");
const PKG_COMPONENTS_DIR = path.join(SRC_DIR, "components");
const PKG_LIB_DIR = path.join(SRC_DIR, "lib");

function ensureDir(dir) {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
}

function copyFolderSync(from, to, extensionFilter = null) {
  ensureDir(to);
  const items = fs.readdirSync(from);
  items.forEach((item) => {
    if (item === "__tests__" || item.endsWith(".test.tsx")) return;
    const fromPath = path.join(from, item);
    const toPath = path.join(to, item);
    const stat = fs.statSync(fromPath);
    if (stat.isDirectory()) {
      copyFolderSync(fromPath, toPath, extensionFilter);
    } else {
      if (!extensionFilter || extensionFilter(item)) {
        fs.copyFileSync(fromPath, toPath);
      }
    }
  });
}

function main() {
  console.log("🚀 Building @bloomui/react package source...");

  ensureDir(SRC_DIR);

  copyFolderSync(UI_DIR, PKG_COMPONENTS_DIR, (filename) => {
    return filename.endsWith(".tsx") && !filename.endsWith(".code.ts");
  });

  copyFolderSync(LIB_DIR, PKG_LIB_DIR);

  const exports = [];
  const compDirs = fs.readdirSync(PKG_COMPONENTS_DIR);

  compDirs.forEach((compName) => {
    const compDirPath = path.join(PKG_COMPONENTS_DIR, compName);
    if (fs.statSync(compDirPath).isDirectory()) {
      const tsxFile = path.join(compDirPath, `${compName}.tsx`);
      if (fs.existsSync(tsxFile)) {
        exports.push(`export * from "./components/${compName}/${compName}";`);
      }
    }
  });

  exports.push(`export * from "./lib/design-system";`);
  exports.push(`export * from "./lib/utils";`);

  const indexContent = `// Auto-generated master exports for @bloomui/react\n${exports.join("\n")}\n`;
  fs.writeFileSync(path.join(SRC_DIR, "index.ts"), indexContent, "utf8");

  console.log(
    `✅ Successfully prepared @bloomui/react src with ${compDirs.length} components!`,
  );
}

if (require.main === module) {
  main();
}

module.exports = { main };
