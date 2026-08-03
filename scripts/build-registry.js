const fs = require("fs");
const path = require("path");

const projectRoot = path.resolve(__dirname, "../");
const uiComponentsDir = path.join(projectRoot, "components/ui");
const libDir = path.join(projectRoot, "lib");
const outputDir = path.join(projectRoot, "public/registry");

// Known external dependencies mapping based on imports if needed
const knownDependencies = {
  accordion: ["@radix-ui/react-accordion"],
  alert: ["lucide-react", "class-variance-authority"],
  alertDialog: ["@radix-ui/react-alert-dialog"],
  aspectRatio: ["@radix-ui/react-aspect-ratio"],
  autocomplete: ["@iconify/react"],
  avatar: ["@radix-ui/react-avatar"],
  badge: ["class-variance-authority"],
  banner: ["lucide-react", "class-variance-authority"],
  button: ["@radix-ui/react-slot", "class-variance-authority"],
  card: ["class-variance-authority"],
  carousel: ["embla-carousel-react"],
  chart: ["recharts"],
  checkbox: ["@radix-ui/react-checkbox", "class-variance-authority"],
  codeBlock: ["highlight.js", "framer-motion", "@iconify/react"],
  collapsible: ["@radix-ui/react-collapsible"],
  combobox: ["lucide-react"],
  command: ["cmdk", "lucide-react"],
  contextMenu: ["@radix-ui/react-context-menu", "lucide-react"],
  dataTable: ["@tanstack/react-table"],
  datePicker: ["lucide-react"],
  dialog: ["@radix-ui/react-dialog", "lucide-react"],
  drawer: ["vaul"],
  dropdownMenu: ["@radix-ui/react-dropdown-menu"],
  fileUpload: ["lucide-react"],
  filterBuilder: ["lucide-react"],
  form: ["react-hook-form"],
  hoverCard: ["@radix-ui/react-hover-card"],
  input: ["class-variance-authority"],
  inputOtp: ["input-otp"],
  label: ["@radix-ui/react-label", "class-variance-authority"],
  link: ["lucide-react", "class-variance-authority"],
  menubar: ["@radix-ui/react-menubar", "lucide-react"],
  multiSelect: ["lucide-react"],
  navigationMenu: [
    "@radix-ui/react-navigation-menu",
    "lucide-react",
    "class-variance-authority",
  ],
  numberInput: ["lucide-react"],
  popover: ["@radix-ui/react-popover"],
  progress: ["@radix-ui/react-progress"],
  radioGroup: ["@radix-ui/react-radio-group"],
  rating: ["lucide-react"],
  resizable: ["react-resizable-panels"],
  richTextEditor: [
    "@tiptap/react",
    "@tiptap/starter-kit",
    "@tiptap/extension-placeholder",
  ],
  scrollArea: ["@radix-ui/react-scroll-area"],
  select: ["@radix-ui/react-select"],
  separator: ["@radix-ui/react-separator"],
  sheet: ["@radix-ui/react-dialog", "lucide-react", "class-variance-authority"],
  slider: ["@radix-ui/react-slider"],
  statCard: ["lucide-react"],
  switch: ["@radix-ui/react-switch"],
  tabs: ["@radix-ui/react-tabs", "framer-motion", "class-variance-authority"],
  textarea: ["class-variance-authority"],
  timePicker: ["lucide-react"],
  timeline: ["lucide-react"],
  toast: ["sonner"],
  toggle: ["@radix-ui/react-toggle", "class-variance-authority"],
  toggleGroup: ["@radix-ui/react-toggle-group"],
  tooltip: ["@radix-ui/react-tooltip"],
  treeView: ["lucide-react"],
  typography: ["class-variance-authority"],
  virtualizedList: [],
};

// Helper function to extract imports from content if not explicitly mapped
function detectDependencies(content) {
  const deps = new Set();
  const importRegex = /import\s+.*?from\s+["']([^"']+)["']/g;
  let match;
  while ((match = importRegex.exec(content)) !== null) {
    const importPath = match[1];
    if (
      importPath.startsWith("@radix-ui/") ||
      importPath.startsWith("@tanstack/") ||
      importPath.startsWith("@tiptap/") ||
      importPath === "lucide-react" ||
      importPath === "framer-motion" ||
      importPath === "cmdk" ||
      importPath === "recharts" ||
      importPath === "vaul" ||
      importPath === "sonner" ||
      importPath === "input-otp" ||
      importPath === "embla-carousel-react" ||
      importPath === "highlight.js" ||
      importPath === "@iconify/react" ||
      importPath === "class-variance-authority"
    ) {
      deps.add(importPath);
    }
  }
  return Array.from(deps);
}

function main() {
  console.log("Building component registry (dynamic scan)...");

  // Ensure output directories exist
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }
  const compOutputDir = path.join(outputDir, "components");
  if (!fs.existsSync(compOutputDir)) {
    fs.mkdirSync(compOutputDir, { recursive: true });
  }

  const indexRegistry = [];

  const compDirs = fs.readdirSync(uiComponentsDir, { withFileTypes: true });

  for (const entry of compDirs) {
    if (!entry.isDirectory()) continue;
    const name = entry.name;
    const compDir = path.join(uiComponentsDir, name);

    // Find all tsx files in component folder
    const files = fs
      .readdirSync(compDir)
      .filter((f) => f.endsWith(".tsx") && !f.includes(".test."));

    if (files.length === 0) continue;

    const filesData = [];
    const allDeps = new Set(knownDependencies[name] || []);

    for (const fileName of files) {
      const filePath = path.join(compDir, fileName);
      const content = fs.readFileSync(filePath, "utf8");
      filesData.push({
        name: fileName,
        content: content,
      });

      // Auto-detect dependencies if not explicitly mapped
      if (!knownDependencies[name]) {
        const detected = detectDependencies(content);
        detected.forEach((d) => allDeps.add(d));
      }
    }

    const dependenciesList = Array.from(allDeps);

    const componentRegistryData = {
      name,
      dependencies: dependenciesList,
      files: filesData,
    };

    // Save individual component registry JSON
    fs.writeFileSync(
      path.join(compOutputDir, `${name}.json`),
      JSON.stringify(componentRegistryData, null, 2),
      "utf8",
    );

    indexRegistry.push({
      name,
      dependencies: dependenciesList,
    });

    console.log(`Registered component: ${name}`);
  }

  // Write base utility files to registry for init step
  const utilsPath = path.join(libDir, "utils.ts");
  if (fs.existsSync(utilsPath)) {
    const utilsContent = fs.readFileSync(utilsPath, "utf8");
    fs.writeFileSync(
      path.join(outputDir, "utils.json"),
      JSON.stringify({ content: utilsContent }, null, 2),
      "utf8",
    );
    console.log("Registered util: utils.ts");
  }

  const designSystemPath = path.join(libDir, "design-system.ts");
  if (fs.existsSync(designSystemPath)) {
    const dsContent = fs.readFileSync(designSystemPath, "utf8");
    fs.writeFileSync(
      path.join(outputDir, "design-system.json"),
      JSON.stringify({ content: dsContent }, null, 2),
      "utf8",
    );
    console.log("Registered util: design-system.ts");
  }

  const ripplePath = path.join(libDir, "ripple/ripple.tsx");
  if (fs.existsSync(ripplePath)) {
    const rippleContent = fs.readFileSync(ripplePath, "utf8");
    fs.writeFileSync(
      path.join(outputDir, "ripple.json"),
      JSON.stringify({ content: rippleContent }, null, 2),
      "utf8",
    );
    console.log("Registered util: ripple.tsx");
  }

  const useRipplePath = path.join(libDir, "ripple/useRipple.ts");
  if (fs.existsSync(useRipplePath)) {
    const useRippleContent = fs.readFileSync(useRipplePath, "utf8");
    fs.writeFileSync(
      path.join(outputDir, "useRipple.json"),
      JSON.stringify({ content: useRippleContent }, null, 2),
      "utf8",
    );
    console.log("Registered util: useRipple.ts");
  }

  // Save index registry
  fs.writeFileSync(
    path.join(outputDir, "index.json"),
    JSON.stringify(indexRegistry, null, 2),
    "utf8",
  );

  console.log(
    `Component registry built successfully! Total components registered: ${indexRegistry.length}`,
  );
}

main();
