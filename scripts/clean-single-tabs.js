const fs = require("node:fs");
const path = require("node:path");

function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach((file) => {
    file = path.join(dir, file);
    const stat = fs.statSync(file);
    if (stat?.isDirectory()) {
      results = results.concat(walk(file));
    } else if (file.endsWith("page.tsx")) {
      results.push(file);
    }
  });
  return results;
}

const files = walk("app/components");
let updatedCount = 0;

files.forEach((filePath) => {
  let content = fs.readFileSync(filePath, "utf8");

  const tabsRegex = /<Tabs\s+defaultValue="[^"]*"\s*>([\s\S]*?)<\/Tabs>/g;

  if (tabsRegex.test(content)) {
    let modified = false;
    content = content.replace(tabsRegex, (fullMatch, innerContent) => {
      const triggerCount = (innerContent.match(/<TabsTrigger/g) || []).length;
      // If there is only 1 tab trigger, extract the CodeBlock directly!
      if (triggerCount === 1) {
        const codeBlockMatch = innerContent.match(/<CodeBlock[\s\S]*?\/>/);
        if (codeBlockMatch) {
          modified = true;
          return codeBlockMatch[0];
        }
      }
      return fullMatch;
    });

    if (modified) {
      if (!content.includes("<Tabs")) {
        content = content.replace(
          /import\s*\{\s*Tabs,\s*TabsContent,\s*TabsList,\s*TabsTrigger,?\s*\}\s*from\s*"@\/components\/ui\/tabs\/tabs";\n?/g,
          "",
        );
        content = content.replace(
          /import\s*\{\s*Tabs,\s*TabsContent,\s*TabsList,\s*TabsTrigger,?\s*\}\s*from\s*'@\/components\/ui\/tabs\/tabs';\n?/g,
          "",
        );
      }
      fs.writeFileSync(filePath, content, "utf8");
      updatedCount++;
    }
  }
});

console.log("Successfully updated pages:", updatedCount);
