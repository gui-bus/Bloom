const fs = require("node:fs");
const path = require("node:path");

const targetDirs = [
  path.join(__dirname, "../components"),
  path.join(__dirname, "../app"),
  path.join(__dirname, "../lib"),
  path.join(__dirname, "../scripts"),
  path.join(__dirname, "../__tests__"),
  path.join(__dirname, "../e2e"),
  path.join(__dirname, "../packages/cli/src"),
];

function stripCommentsFromCode(code, _ext) {
  let cleaned = code;

  cleaned = cleaned.replace(/\{\/\*[\s\S]*?\*\/\}/g, "");

  let result = "";
  let i = 0;
  const len = cleaned.length;

  let inSingleQuote = false;
  let inDoubleQuote = false;
  let inTemplate = false;
  let inBlockComment = false;
  let inLineComment = false;

  while (i < len) {
    const char = cleaned[i];
    const nextChar = cleaned[i + 1];

    if (inLineComment) {
      if (char === "\n") {
        inLineComment = false;
        result += "\n";
      }
      i++;
      continue;
    }

    if (inBlockComment) {
      if (char === "*" && nextChar === "/") {
        inBlockComment = false;
        i += 2;
        continue;
      }
      i++;
      continue;
    }

    if (inSingleQuote) {
      result += char;
      if (char === "\\" && nextChar) {
        result += nextChar;
        i += 2;
        continue;
      }
      if (char === "'") {
        inSingleQuote = false;
      }
      i++;
      continue;
    }

    if (inDoubleQuote) {
      result += char;
      if (char === "\\" && nextChar) {
        result += nextChar;
        i += 2;
        continue;
      }
      if (char === '"') {
        inDoubleQuote = false;
      }
      i++;
      continue;
    }

    if (inTemplate) {
      result += char;
      if (char === "\\" && nextChar) {
        result += nextChar;
        i += 2;
        continue;
      }
      if (char === "`") {
        inTemplate = false;
      }
      i++;
      continue;
    }

    if (char === "'") {
      inSingleQuote = true;
      result += char;
      i++;
      continue;
    }

    if (char === '"') {
      inDoubleQuote = true;
      result += char;
      i++;
      continue;
    }

    if (char === "`") {
      inTemplate = true;
      result += char;
      i++;
      continue;
    }

    if (char === "/" && nextChar === "*") {
      inBlockComment = true;
      i += 2;
      continue;
    }

    if (char === "/" && nextChar === "/") {
      inLineComment = true;
      i += 2;
      continue;
    }

    result += char;
    i++;
  }

  const lines = result.split("\n");
  const nonConsecutiveEmptyLines = [];
  let prevEmpty = false;

  for (const line of lines) {
    const trimmed = line.trim();
    if (trimmed === "") {
      if (!prevEmpty) {
        nonConsecutiveEmptyLines.push("");
        prevEmpty = true;
      }
    } else {
      nonConsecutiveEmptyLines.push(line);
      prevEmpty = false;
    }
  }

  return nonConsecutiveEmptyLines.join("\n");
}

function processDirectory(dirPath) {
  if (!fs.existsSync(dirPath)) return 0;
  let count = 0;

  const entries = fs.readdirSync(dirPath, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dirPath, entry.name);

    if (entry.isDirectory()) {
      if (
        entry.name === "node_modules" ||
        entry.name === ".next" ||
        entry.name === "dist"
      )
        continue;
      count += processDirectory(fullPath);
    } else if (entry.isFile()) {
      const ext = path.extname(entry.name);
      if ([".ts", ".tsx", ".js", ".jsx"].includes(ext)) {
        const originalContent = fs.readFileSync(fullPath, "utf8");
        const stripped = stripCommentsFromCode(originalContent, ext);

        if (originalContent !== stripped) {
          fs.writeFileSync(fullPath, stripped, "utf8");
          console.log(
            `Stripped comments: ${path.relative(path.join(__dirname, ".."), fullPath)}`,
          );
          count++;
        }
      }
    }
  }

  return count;
}

function main() {
  console.log("Starting code comment removal across project...");
  let totalStripped = 0;

  for (const targetDir of targetDirs) {
    totalStripped += processDirectory(targetDir);
  }

  console.log(`\nSuccessfully stripped comments from ${totalStripped} files!`);
}

main();
