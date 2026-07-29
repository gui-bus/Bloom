const fs = require("fs");
const path = require("path");

const projectRoot = path.resolve(__dirname, "../");
const uiComponentsDir = path.join(projectRoot, "components/ui");
const libDir = path.join(projectRoot, "lib");
const outputDir = path.join(projectRoot, "public/registry");

// Registry metadata configuration
const componentsConfig = {
  accordion: {
    dependencies: ["@radix-ui/react-accordion"],
    files: ["accordion.tsx"],
  },
  aspectRatio: {
    dependencies: ["@radix-ui/react-aspect-ratio"],
    files: ["aspectRatio.tsx"],
  },
  avatar: {
    dependencies: ["@radix-ui/react-avatar"],
    files: ["avatar.tsx"],
  },
  avatarGroup: {
    dependencies: [],
    files: ["avatarGroup.tsx"],
  },
  badge: {
    dependencies: ["class-variance-authority"],
    files: ["badge.tsx"],
  },
  button: {
    dependencies: ["@radix-ui/react-slot", "class-variance-authority"],
    files: ["button.tsx"],
  },
  buttonGroup: {
    dependencies: [],
    files: ["buttonGroup.tsx"],
  },
  carousel: {
    dependencies: ["embla-carousel-react"],
    files: ["carousel.tsx"],
  },
  collapsible: {
    dependencies: ["@radix-ui/react-collapsible"],
    files: ["collapsible.tsx"],
  },
  dropdownMenu: {
    dependencies: ["@radix-ui/react-dropdown-menu"],
    files: ["dropdownMenu.tsx"],
  },
  breadcrumb: {
    dependencies: [],
    files: ["breadcrumb.tsx"],
  },
  kbd: {
    dependencies: [],
    files: ["kbd.tsx"],
  },
  pagination: {
    dependencies: [],
    files: ["pagination.tsx"],
  },
  progress: {
    dependencies: ["@radix-ui/react-progress"],
    files: ["progress.tsx"],
  },
  resizable: {
    dependencies: ["react-resizable-panels"],
    files: ["resizable.tsx"],
  },
  scrollArea: {
    dependencies: ["@radix-ui/react-scroll-area"],
    files: ["scrollArea.tsx"],
  },
  separator: {
    dependencies: ["@radix-ui/react-separator"],
    files: ["separator.tsx"],
  },
  skeleton: {
    dependencies: [],
    files: ["skeleton.tsx"],
  },
  spinner: {
    dependencies: [],
    files: ["spinner.tsx"],
  },
  stepper: {
    dependencies: [],
    files: ["stepper.tsx"],
  },
  tabs: {
    dependencies: ["@radix-ui/react-tabs", "framer-motion", "class-variance-authority"],
    files: ["tabs.tsx"],
  },
  card: {
    dependencies: ["class-variance-authority"],
    files: ["card.tsx"],
  },
  codeBlock: {
    dependencies: ["highlight.js", "framer-motion", "@iconify/react"],
    files: ["codeBlock.tsx"],
  },
  image: {
    dependencies: [],
    files: ["image.tsx"],
  },
  typography: {
    dependencies: ["class-variance-authority"],
    files: ["typography.tsx"],
  },
  checkbox: {
    dependencies: ["@radix-ui/react-checkbox", "class-variance-authority"],
    files: ["checkbox.tsx"],
  },
  colorPicker: {
    dependencies: [],
    files: ["colorPicker.tsx"],
  },
  combobox: {
    dependencies: ["lucide-react"],
    files: ["combobox.tsx"],
  },
  datePicker: {
    dependencies: ["lucide-react"],
    files: ["datePicker.tsx"],
  },
  fileUpload: {
    dependencies: ["lucide-react"],
    files: ["fileUpload.tsx"],
  },
  input: {
    dependencies: ["class-variance-authority"],
    files: ["input.tsx"],
  },
  inputOtp: {
    dependencies: ["input-otp"],
    files: ["inputOtp.tsx"],
  },
  numberInput: {
    dependencies: ["lucide-react"],
    files: ["numberInput.tsx"],
  },
  radioGroup: {
    dependencies: ["@radix-ui/react-radio-group"],
    files: ["radioGroup.tsx"],
  },
  rating: {
    dependencies: ["lucide-react"],
    files: ["rating.tsx"],
  },
  select: {
    dependencies: ["@radix-ui/react-select"],
    files: ["select.tsx"],
  },
  slider: {
    dependencies: ["@radix-ui/react-slider"],
    files: ["slider.tsx"],
  },
  switch: {
    dependencies: ["@radix-ui/react-switch"],
    files: ["switch.tsx"],
  },
  textarea: {
    dependencies: ["class-variance-authority"],
    files: ["textarea.tsx"],
  },
  toggle: {
    dependencies: ["@radix-ui/react-toggle", "class-variance-authority"],
    files: ["toggle.tsx"],
  },
  toggleGroup: {
    dependencies: ["@radix-ui/react-toggle-group"],
    files: ["toggleGroup.tsx"],
  },
};

function main() {
  console.log("Building component registry...");

  // Ensure output directories exist
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }
  const compOutputDir = path.join(outputDir, "components");
  if (!fs.existsSync(compOutputDir)) {
    fs.mkdirSync(compOutputDir, { recursive: true });
  }

  const indexRegistry = [];

  // Write UI components
  for (const [name, config] of Object.entries(componentsConfig)) {
    const compDir = path.join(uiComponentsDir, name);
    if (!fs.existsSync(compDir)) {
      console.warn(`Component directory for ${name} does not exist at ${compDir}`);
      continue;
    }

    const filesData = [];

    for (const fileName of config.files) {
      const filePath = path.join(compDir, fileName);
      if (!fs.existsSync(filePath)) {
        console.error(`File ${fileName} not found for component ${name}`);
        continue;
      }

      const content = fs.readFileSync(filePath, "utf8");
      filesData.push({
        name: fileName,
        content: content,
      });
    }

    const componentRegistryData = {
      name,
      dependencies: config.dependencies,
      files: filesData,
    };

    // Save individual component registry JSON
    fs.writeFileSync(
      path.join(compOutputDir, `${name}.json`),
      JSON.stringify(componentRegistryData, null, 2),
      "utf8"
    );

    indexRegistry.push({
      name,
      dependencies: config.dependencies,
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
      "utf8"
    );
    console.log("Registered util: utils.ts");
  }

  const designSystemPath = path.join(libDir, "design-system.ts");
  if (fs.existsSync(designSystemPath)) {
    const dsContent = fs.readFileSync(designSystemPath, "utf8");
    fs.writeFileSync(
      path.join(outputDir, "design-system.json"),
      JSON.stringify({ content: dsContent }, null, 2),
      "utf8"
    );
    console.log("Registered util: design-system.ts");
  }

  const ripplePath = path.join(libDir, "ripple/ripple.tsx");
  if (fs.existsSync(ripplePath)) {
    const rippleContent = fs.readFileSync(ripplePath, "utf8");
    fs.writeFileSync(
      path.join(outputDir, "ripple.json"),
      JSON.stringify({ content: rippleContent }, null, 2),
      "utf8"
    );
    console.log("Registered util: ripple.tsx");
  }

  const useRipplePath = path.join(libDir, "ripple/useRipple.ts");
  if (fs.existsSync(useRipplePath)) {
    const useRippleContent = fs.readFileSync(useRipplePath, "utf8");
    fs.writeFileSync(
      path.join(outputDir, "useRipple.json"),
      JSON.stringify({ content: useRippleContent }, null, 2),
      "utf8"
    );
    console.log("Registered util: useRipple.ts");
  }

  // Save index registry
  fs.writeFileSync(
    path.join(outputDir, "index.json"),
    JSON.stringify(indexRegistry, null, 2),
    "utf8"
  );

  console.log("Component registry built successfully!");
}

main();
