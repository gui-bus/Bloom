const fs = require("node:fs");
const path = require("node:path");

function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach((file) => {
    file = path.join(dir, file);
    const stat = fs.statSync(file);
    if (stat?.isDirectory()) {
      if (
        !file.includes("node_modules") &&
        !file.includes(".next") &&
        !file.includes(".git")
      ) {
        results = results.concat(walk(file));
      }
    } else if (
      file.endsWith(".ts") ||
      file.endsWith(".tsx") ||
      file.endsWith(".js") ||
      file.endsWith(".jsx")
    ) {
      results.push(file);
    }
  });
  return results;
}

function removeCommentsFromFile(filePath) {
  let content = fs.readFileSync(filePath, "utf8");

  content = content.replace(/\{\/\*[\s\S]*?\*\/\}/g, "");

  content = content.replace(/(^|[^:"'\\])\/\/(?![^\n]*['"])[^\n]*/g, "$1");

  content = content.replace(/\/\*[\s\S]*?\*\//g, "");

  content = content.replace(/\n\s*\n\s*\n/g, "\n\n");

  fs.writeFileSync(filePath, content, "utf8");
}

function main() {
  const dirs = ["app", "components", "lib"];
  let totalProcessed = 0;

  dirs.forEach((dir) => {
    if (fs.existsSync(dir)) {
      const files = walk(dir);
      files.forEach((file) => {
        removeCommentsFromFile(file);
        totalProcessed++;
      });
    }
  });

  console.log(`Successfully cleaned comments from ${totalProcessed} files!`);
}

if (require.main === module) {
  main();
}

module.exports = { removeCommentsFromFile };
