import { Command } from "commander";
import * as fs from "fs";
import * as path from "path";
import { execSync } from "child_process";
import { intro, outro, text, confirm, select, spinner, log } from "@clack/prompts";
import pc from "picocolors";

const packageJsonPath = path.join(__dirname, "../package.json");
const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, "utf8"));

const program = new Command();
program
  .name("bloom")
  .description("CLI to manage Bloom UI components in your codebase")
  .version(packageJson.version);

const GITHUB_REGISTRY_BASE = "https://raw.githubusercontent.com/gui-bus/Bloom/main/public/registry";
const LOCAL_REGISTRY_BASE = "http://localhost:3000/registry";

async function getRegistryBase(): Promise<string> {
  try {
    const res = await fetch(`${LOCAL_REGISTRY_BASE}/index.json`, { signal: AbortSignal.timeout(1000) });
    if (res.ok) return LOCAL_REGISTRY_BASE;
  } catch (e) {
    // Ignore and fallback
  }
  return GITHUB_REGISTRY_BASE;
}

function detectPackageManager(): string {
  if (fs.existsSync(path.join(process.cwd(), "pnpm-lock.yaml"))) return "pnpm";
  if (fs.existsSync(path.join(process.cwd(), "yarn.lock"))) return "yarn";
  if (fs.existsSync(path.join(process.cwd(), "bun.lockb"))) return "bun";
  return "npm";
}

program
  .command("init")
  .description("Initialize Bloom UI configuration in your project")
  .option("-y, --yes", "Skip prompts and use default configurations", false)
  .action(async (options) => {
    const isTTY = process.stdout.isTTY;
    const skipPrompts = options.yes || !isTTY;

    if (!skipPrompts) {
      intro(pc.bgMagenta(pc.black(" Bloom UI — Initialization ")));
    }

    const configFile = path.join(process.cwd(), "bloom.json");
    if (fs.existsSync(configFile) && !skipPrompts) {
      const overwrite = await confirm({
        message: "bloom.json already exists. Do you want to overwrite it?",
      });
      if (!overwrite || typeof overwrite === "symbol") {
        outro(pc.yellow("Initialization cancelled."));
        return;
      }
    }

    let componentDir = "components/ui";
    let utilsDir = "lib";
    let installDeps = true;

    if (!skipPrompts) {
      const componentDirInput = await text({
        message: "Where would you like to install the components?",
        placeholder: "components/ui",
        defaultValue: "components/ui",
      });

      if (typeof componentDirInput === "symbol") return;
      componentDir = componentDirInput;

      const utilsDirInput = await text({
        message: "Where would you like to install the utility files (utils/design-system)?",
        placeholder: "lib",
        defaultValue: "lib",
      });

      if (typeof utilsDirInput === "symbol") return;
      utilsDir = utilsDirInput;

      const installDepsInput = await confirm({
        message: "Do you want us to install tailwind-merge and clsx if they are missing?",
      });

      if (typeof installDepsInput === "symbol") return;
      installDeps = installDepsInput;
    }

    const s = spinner();
    if (!skipPrompts) {
      s.start("Setting up config and utilities");
    } else {
      console.log("Initializing Bloom UI using default settings...");
    }

    // Write bloom.json
    const configData = {
      componentDir,
      utilsDir,
    };
    fs.writeFileSync(configFile, JSON.stringify(configData, null, 2), "utf8");

    // Create target directories
    const targetUtilsDir = path.join(process.cwd(), utilsDir);
    if (!fs.existsSync(targetUtilsDir)) {
      fs.mkdirSync(targetUtilsDir, { recursive: true });
    }

    const registryBase = await getRegistryBase();

    // Fetch design-system.ts, utils.ts, and ripple utilities
    try {
      const utilsRes = await fetch(`${registryBase}/utils.json`);
      if (utilsRes.ok) {
        const utilsData = await utilsRes.json() as { content: string };
        fs.writeFileSync(path.join(targetUtilsDir, "utils.ts"), utilsData.content, "utf8");
      }

      const dsRes = await fetch(`${registryBase}/design-system.json`);
      if (dsRes.ok) {
        const dsData = await dsRes.json() as { content: string };
        fs.writeFileSync(path.join(targetUtilsDir, "design-system.ts"), dsData.content, "utf8");
      }

      const targetRippleDir = path.join(targetUtilsDir, "ripple");
      if (!fs.existsSync(targetRippleDir)) {
        fs.mkdirSync(targetRippleDir, { recursive: true });
      }

      const rippleRes = await fetch(`${registryBase}/ripple.json`);
      if (rippleRes.ok) {
        const rippleData = await rippleRes.json() as { content: string };
        fs.writeFileSync(path.join(targetRippleDir, "ripple.tsx"), rippleData.content, "utf8");
      }

      const useRippleRes = await fetch(`${registryBase}/useRipple.json`);
      if (useRippleRes.ok) {
        const useRippleData = await useRippleRes.json() as { content: string };
        fs.writeFileSync(path.join(targetRippleDir, "useRipple.ts"), useRippleData.content, "utf8");
      }
    } catch (e) {
      if (!skipPrompts) {
        s.stop("Failed to retrieve setup utility files from registry.");
        outro(pc.red("Error downloading utils or design-system configuration."));
      } else {
        console.error("Error downloading utils or design-system configuration from registry.");
      }
      return;
    }

    if (!skipPrompts) {
      s.stop("Configuration and base utility files created successfully");
    } else {
      console.log("Configuration and base utility files created successfully.");
    }

    if (installDeps) {
      const pkgManager = detectPackageManager();
      const sDeps = spinner();
      if (!skipPrompts) {
        sDeps.start(`Installing clsx tailwind-merge and lucide-react via ${pkgManager}`);
      } else {
        console.log(`Installing dependencies using ${pkgManager}...`);
      }
      try {
        let installCmd = "";
        if (pkgManager === "pnpm") installCmd = "pnpm add clsx tailwind-merge lucide-react";
        else if (pkgManager === "yarn") installCmd = "yarn add clsx tailwind-merge lucide-react";
        else if (pkgManager === "bun") installCmd = "bun add clsx tailwind-merge lucide-react";
        else installCmd = "npm install clsx tailwind-merge lucide-react";

        execSync(installCmd, { stdio: "ignore" });
        if (!skipPrompts) {
          sDeps.stop("Required dependencies installed");
        } else {
          console.log("Required dependencies installed successfully.");
        }
      } catch (err) {
        if (!skipPrompts) {
          sDeps.stop("Failed to install dependencies automatically. Please run install manually.");
        } else {
          console.warn("Failed to install dependencies automatically. Please run install manually.");
        }
      }
    }

    if (!skipPrompts) {
      outro(pc.green("Bloom UI initialized! You can now add components using: npx bloom add <component>"));
    } else {
      console.log("Bloom UI successfully initialized!");
    }
  });

program
  .command("add")
  .argument("[component]", "Name of the component to add")
  .description("Add a component to your project")
  .option("-y, --yes", "Bypass prompts and confirm action", false)
  .action(async (componentName, options) => {
    const isTTY = process.stdout.isTTY;
    const skipPrompts = options.yes || !isTTY;

    const configFile = path.join(process.cwd(), "bloom.json");
    if (!fs.existsSync(configFile)) {
      console.error(pc.red("bloom.json not found. Run 'npx bloom init' first."));
      return;
    }

    const config = JSON.parse(fs.readFileSync(configFile, "utf8"));
    const componentDir = config.componentDir || "components/ui";

    if (!skipPrompts) {
      intro(pc.bgMagenta(pc.black(" Bloom UI — Add Component ")));
    }

    const registryBase = await getRegistryBase();
    let selectedComponent = componentName;

    if (!selectedComponent) {
      if (skipPrompts) {
        console.error(pc.red("Component name is required in non-interactive/non-TTY environments."));
        return;
      }

      const sList = spinner();
      sList.start("Fetching available components");
      let list: { name: string }[] = [];
      try {
        const res = await fetch(`${registryBase}/index.json`);
        if (res.ok) {
          list = await res.json() as { name: string }[];
        }
      } catch (e) {
        // ignore
      }
      sList.stop("Done fetching");

      if (list.length === 0) {
        outro(pc.red("No components found in registry. Make sure you are online or your server is running."));
        return;
      }

      const selection = await select({
        message: "Select a component to add:",
        options: list.map((c) => ({ value: c.name, label: c.name })),
      });

      if (typeof selection === "symbol") return;
      selectedComponent = selection;
    }

    const sAdd = spinner();
    if (!skipPrompts) {
      sAdd.start(`Adding ${selectedComponent} component`);
    } else {
      console.log(`Adding component: ${selectedComponent}...`);
    }

    try {
      const res = await fetch(`${registryBase}/components/${selectedComponent}.json`);
      if (!res.ok) {
        if (!skipPrompts) {
          sAdd.stop(`Component ${selectedComponent} not found in registry.`);
          outro(pc.red("Download failed."));
        } else {
          console.error(`Component ${selectedComponent} not found in registry. Download failed.`);
        }
        return;
      }

      interface RegistryComponent {
        name: string;
        dependencies: string[];
        files: { name: string; content: string }[];
      }

      const componentData = await res.json() as RegistryComponent;

      const targetDir = path.join(process.cwd(), componentDir, selectedComponent);
      if (!fs.existsSync(targetDir)) {
        fs.mkdirSync(targetDir, { recursive: true });
      }

      // Write files
      for (const file of componentData.files) {
        let updatedContent = file.content;
        
        const fromPath = path.join(componentDir, selectedComponent);
        const toPath = config.utilsDir || "lib";
        let relativeImportPath = path.relative(fromPath, toPath).replace(/\\/g, "/");
        if (!relativeImportPath.startsWith(".")) {
          relativeImportPath = "./" + relativeImportPath;
        }

        updatedContent = updatedContent.replace(/@\/lib\/utils/g, `${relativeImportPath}/utils`);
        updatedContent = updatedContent.replace(/@\/lib\/design-system/g, `${relativeImportPath}/design-system`);
        updatedContent = updatedContent.replace(/@\/hooks\/ripple/g, `../../hooks/ripple`);

        fs.writeFileSync(path.join(targetDir, file.name), updatedContent, "utf8");
      }

      if (!skipPrompts) {
        sAdd.stop(`Added ${selectedComponent} component files`);
      } else {
        console.log(`Added ${selectedComponent} component files.`);
      }

      // Install dependencies if any
      if (componentData.dependencies && componentData.dependencies.length > 0) {
        const pkgManager = detectPackageManager();
        const sDeps = spinner();
        if (!skipPrompts) {
          sDeps.start(`Installing dependencies: ${componentData.dependencies.join(", ")}`);
        } else {
          console.log(`Installing dependencies: ${componentData.dependencies.join(", ")}...`);
        }
        try {
          let installCmd = "";
          if (pkgManager === "pnpm") {
            installCmd = `pnpm add ${componentData.dependencies.join(" ")}`;
          } else if (pkgManager === "yarn") {
            installCmd = `yarn add ${componentData.dependencies.join(" ")}`;
          } else if (pkgManager === "bun") {
            installCmd = `bun add ${componentData.dependencies.join(" ")}`;
          } else {
            installCmd = `npm install ${componentData.dependencies.join(" ")}`;
          }
          execSync(installCmd, { stdio: "ignore" });
          if (!skipPrompts) {
            sDeps.stop("Dependencies installed successfully");
          } else {
            console.log("Dependencies installed successfully.");
          }
        } catch (err) {
          if (!skipPrompts) {
            sDeps.stop("Failed to install dependencies automatically. Please install them manually.");
          } else {
            console.warn("Failed to install dependencies automatically. Please install them manually.");
          }
        }
      }

      if (!skipPrompts) {
        outro(pc.green(`Successfully added ${selectedComponent} component to your project!`));
      } else {
        console.log(`Successfully added ${selectedComponent} component to your project!`);
      }
    } catch (e) {
      if (!skipPrompts) {
        sAdd.stop("Failed to download or write component files.");
        outro(pc.red("Error adding component."));
      } else {
        console.error("Failed to download or write component files. Error adding component.");
      }
    }
  });

program.parse(process.argv);
