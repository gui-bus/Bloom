import { exec } from "node:child_process";
import * as fs from "node:fs";
import * as path from "node:path";
import { promisify } from "node:util";
import {
  confirm,
  intro,
  multiselect,
  outro,
  spinner,
  text,
} from "@clack/prompts";
import { Command } from "commander";
import pc from "picocolors";

const execPromise = promisify(exec);

const packageJsonPath = path.join(__dirname, "../package.json");
const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, "utf8"));

const program = new Command();
program
  .name("bloom")
  .description("CLI to manage Bloom UI components in your codebase")
  .version(packageJson.version);

const GITHUB_REGISTRY_BASE =
  "https://raw.githubusercontent.com/gui-bus/Bloom/main/public/registry";
const LOCAL_REGISTRY_BASE = "http://localhost:3000/registry";

async function getRegistryBase(): Promise<string> {
  try {
    const res = await fetch(`${LOCAL_REGISTRY_BASE}/index.json`, {
      signal: AbortSignal.timeout(1000),
    });
    if (res.ok) return LOCAL_REGISTRY_BASE;
  } catch (_e) {}
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
        message:
          "Where would you like to install the components? (Press Enter for default: components/ui)",
        placeholder: "components/ui",
        defaultValue: "components/ui",
      });

      if (typeof componentDirInput === "symbol") return;
      componentDir = componentDirInput;

      const utilsDirInput = await text({
        message:
          "Where would you like to install the utility files (utils/design-system)? (Press Enter for default: lib)",
        placeholder: "lib",
        defaultValue: "lib",
      });

      if (typeof utilsDirInput === "symbol") return;
      utilsDir = utilsDirInput;

      const installDepsInput = await confirm({
        message:
          "Do you want us to install tailwind-merge and clsx if they are missing?",
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

    const configData = {
      componentDir,
      utilsDir,
    };
    fs.writeFileSync(configFile, JSON.stringify(configData, null, 2), "utf8");

    const targetUtilsDir = path.join(process.cwd(), utilsDir);
    if (!fs.existsSync(targetUtilsDir)) {
      fs.mkdirSync(targetUtilsDir, { recursive: true });
    }
    const targetDocsDir = path.join(targetUtilsDir, "docs");
    if (!fs.existsSync(targetDocsDir)) {
      fs.mkdirSync(targetDocsDir, { recursive: true });
    }

    const registryBase = await getRegistryBase();

    try {
      const utilsRes = await fetch(`${registryBase}/utils.json`);
      if (utilsRes.ok) {
        const utilsData = (await utilsRes.json()) as { content: string };
        fs.writeFileSync(
          path.join(targetUtilsDir, "utils.ts"),
          utilsData.content,
          "utf8",
        );
      }

      const dsRes = await fetch(`${registryBase}/design-system.json`);
      if (dsRes.ok) {
        const dsData = (await dsRes.json()) as { content: string };
        fs.writeFileSync(
          path.join(targetUtilsDir, "design-system.ts"),
          dsData.content,
          "utf8",
        );
      }

      const targetRippleDir = path.join(targetUtilsDir, "ripple");
      if (!fs.existsSync(targetRippleDir)) {
        fs.mkdirSync(targetRippleDir, { recursive: true });
      }

      const rippleRes = await fetch(`${registryBase}/ripple.json`);
      if (rippleRes.ok) {
        const rippleData = (await rippleRes.json()) as { content: string };
        fs.writeFileSync(
          path.join(targetRippleDir, "ripple.tsx"),
          rippleData.content,
          "utf8",
        );
      }

      const useRippleRes = await fetch(`${registryBase}/useRipple.json`);
      if (useRippleRes.ok) {
        const useRippleData = (await useRippleRes.json()) as {
          content: string;
        };
        fs.writeFileSync(
          path.join(targetRippleDir, "useRipple.ts"),
          useRippleData.content,
          "utf8",
        );
      }
    } catch (_e) {
      if (!skipPrompts) {
        s.stop("Failed to retrieve setup utility files from registry.");
        outro(
          pc.red("Error downloading utils or design-system configuration."),
        );
      } else {
        console.error(
          "Error downloading utils or design-system configuration from registry.",
        );
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
        sDeps.start(
          `Installing clsx tailwind-merge and lucide-react via ${pkgManager}`,
        );
      } else {
        console.log(`Installing dependencies using ${pkgManager}...`);
      }
      try {
        let installCmd = "";
        if (pkgManager === "pnpm")
          installCmd = "pnpm add clsx tailwind-merge lucide-react";
        else if (pkgManager === "yarn")
          installCmd = "yarn add clsx tailwind-merge lucide-react";
        else if (pkgManager === "bun")
          installCmd = "bun add clsx tailwind-merge lucide-react";
        else installCmd = "npm install clsx tailwind-merge lucide-react";

        await execPromise(installCmd);
        if (!skipPrompts) {
          sDeps.stop("Required dependencies installed");
        } else {
          console.log("Required dependencies installed successfully.");
        }
      } catch (_err) {
        if (!skipPrompts) {
          sDeps.stop(
            "Failed to install dependencies automatically. Please run install manually.",
          );
        } else {
          console.warn(
            "Failed to install dependencies automatically. Please run install manually.",
          );
        }
      }
    }

    if (!skipPrompts) {
      const configureAi = await confirm({
        message:
          "Do you want to configure rules for AI Coding Assistants (e.g. Antigravity, Cursor, Copilot)?",
        initialValue: true,
      });

      if (configureAi && typeof configureAi !== "symbol") {
        const agents = await multiselect({
          message:
            "Select the AI assistants you use (Space to select, Enter to confirm):",
          options: [
            { value: "antigravity", label: "Antigravity (AGENTS.md)" },
            { value: "claude", label: "Claude Code (CLAUDE.md)" },
            { value: "cursor", label: "Cursor (.cursorrules)" },
            { value: "windsurf", label: "Windsurf (.windsurfrules)" },
            {
              value: "copilot",
              label: "GitHub Copilot (.github/copilot-instructions.md)",
            },
            {
              value: "codex",
              label: "VS Code Copilot / Codex (.copilotinstructions)",
            },
            { value: "universal", label: "Universal Context (llms.txt)" },
          ],
          required: false,
        });

        if (typeof agents !== "symbol" && agents.length > 0) {
          await generateAiRules(agents as string[], false);
        }
      }
    }

    if (!skipPrompts) {
      outro(
        pc.green(
          "Bloom UI initialized! You can now add components using: npx bloom add <component>",
        ),
      );
    } else {
      console.log("Bloom UI successfully initialized!");
    }
  });

async function autoUpdateExistingAiRules() {
  const existingAgents: string[] = [];
  if (fs.existsSync(path.join(process.cwd(), "AGENTS.md")))
    existingAgents.push("antigravity");
  if (fs.existsSync(path.join(process.cwd(), "CLAUDE.md")))
    existingAgents.push("claude");
  if (fs.existsSync(path.join(process.cwd(), ".cursorrules")))
    existingAgents.push("cursor");
  if (fs.existsSync(path.join(process.cwd(), ".windsurfrules")))
    existingAgents.push("windsurf");
  if (
    fs.existsSync(path.join(process.cwd(), ".github/copilot-instructions.md"))
  )
    existingAgents.push("copilot");
  if (fs.existsSync(path.join(process.cwd(), ".copilotinstructions")))
    existingAgents.push("codex");
  if (fs.existsSync(path.join(process.cwd(), "llms.txt")))
    existingAgents.push("universal");

  if (existingAgents.length > 0) {
    await generateAiRules(existingAgents, true);
  }
}

async function generateAiRules(selectedAgents: string[], skipPrompts = false) {
  const configFile = path.join(process.cwd(), "bloom.json");
  let config = { componentDir: "components/ui", utilsDir: "lib" };
  if (fs.existsSync(configFile)) {
    try {
      config = JSON.parse(fs.readFileSync(configFile, "utf8"));
    } catch (_e) {}
  }

  const s = spinner();
  if (!skipPrompts) {
    s.start("Generating AI context rules");
  } else {
    console.log("Generating AI context rules...");
  }

  try {
    const registryBase = await getRegistryBase();
    const installedComponents = new Set<string>();
    const targetComponentDir = path.join(
      process.cwd(),
      config.componentDir || "components/ui",
    );
    if (fs.existsSync(targetComponentDir)) {
      try {
        const dirs = fs.readdirSync(targetComponentDir, {
          withFileTypes: true,
        });
        for (const d of dirs) {
          if (d.isDirectory()) {
            installedComponents.add(d.name.toLowerCase());
          }
        }
      } catch (_e) {}
    }

    let registryComponents: { name: string }[] = [];
    const localIndexPath = path.join(
      process.cwd(),
      "public/registry/index.json",
    );
    const parentLocalIndexPath = path.join(
      process.cwd(),
      "../../public/registry/index.json",
    );
    const devIndexPath = path.join(
      __dirname,
      "../../../public/registry/index.json",
    );
    if (fs.existsSync(localIndexPath)) {
      try {
        registryComponents = JSON.parse(
          fs.readFileSync(localIndexPath, "utf8"),
        );
      } catch (_e) {}
    } else if (fs.existsSync(parentLocalIndexPath)) {
      try {
        registryComponents = JSON.parse(
          fs.readFileSync(parentLocalIndexPath, "utf8"),
        );
      } catch (_e) {}
    } else if (fs.existsSync(devIndexPath)) {
      try {
        registryComponents = JSON.parse(fs.readFileSync(devIndexPath, "utf8"));
      } catch (_e) {}
    } else {
      try {
        const indexRes = await fetch(`${registryBase}/index.json`);
        if (indexRes.ok) {
          registryComponents = (await indexRes.json()) as { name: string }[];
        }
      } catch (_e) {}
    }

    let rulesTemplate = "";
    const localTemplate1 = path.join(
      process.cwd(),
      "public/registry/bloom-rules.md",
    );
    const localTemplate2 = path.join(process.cwd(), "public/registry/llms.txt");
    const parentLocalTemplate1 = path.join(
      process.cwd(),
      "../../public/registry/bloom-rules.md",
    );
    const parentLocalTemplate2 = path.join(
      process.cwd(),
      "../../public/registry/llms.txt",
    );
    const localTemplateRoot = path.join(process.cwd(), "llms.txt");
    const parentLocalTemplateRoot = path.join(process.cwd(), "../../llms.txt");
    const devTemplate1 = path.join(
      __dirname,
      "../../../public/registry/bloom-rules.md",
    );
    const devTemplate2 = path.join(
      __dirname,
      "../../../public/registry/llms.txt",
    );
    const devTemplateRoot = path.join(__dirname, "../../../llms.txt");

    if (fs.existsSync(localTemplate1)) {
      rulesTemplate = fs.readFileSync(localTemplate1, "utf8");
    } else if (fs.existsSync(localTemplate2)) {
      rulesTemplate = fs.readFileSync(localTemplate2, "utf8");
    } else if (fs.existsSync(parentLocalTemplate1)) {
      rulesTemplate = fs.readFileSync(parentLocalTemplate1, "utf8");
    } else if (fs.existsSync(parentLocalTemplate2)) {
      rulesTemplate = fs.readFileSync(parentLocalTemplate2, "utf8");
    } else if (fs.existsSync(devTemplate1)) {
      rulesTemplate = fs.readFileSync(devTemplate1, "utf8");
    } else if (fs.existsSync(devTemplate2)) {
      rulesTemplate = fs.readFileSync(devTemplate2, "utf8");
    } else if (fs.existsSync(localTemplateRoot)) {
      rulesTemplate = fs.readFileSync(localTemplateRoot, "utf8");
    } else if (fs.existsSync(parentLocalTemplateRoot)) {
      rulesTemplate = fs.readFileSync(parentLocalTemplateRoot, "utf8");
    } else if (fs.existsSync(devTemplateRoot)) {
      rulesTemplate = fs.readFileSync(devTemplateRoot, "utf8");
    } else {
      try {
        const rulesRes = await fetch(`${registryBase}/bloom-rules.md`);
        if (rulesRes.ok) {
          rulesTemplate = await rulesRes.text();
        } else {
          const llmsRes = await fetch(`${registryBase}/llms.txt`);
          if (llmsRes.ok) {
            rulesTemplate = await llmsRes.text();
          }
        }
      } catch (_e) {}
    }

    if (!rulesTemplate) {
      if (!skipPrompts) {
        s.stop("Failed to retrieve AI rules template from registry.");
      } else {
        console.error("Failed to retrieve AI rules template from registry.");
      }
      return;
    }

    let content = rulesTemplate;

    const cleanCompDir = (config.componentDir || "components/ui").replace(
      /\\/g,
      "/",
    );
    content = content.replace(/@\/components\/ui/g, `@/${cleanCompDir}`);

    const cleanUtilsDir = (config.utilsDir || "lib").replace(/\\/g, "/");
    content = content.replace(/@\/lib\/utils/g, `@/${cleanUtilsDir}/utils`);
    content = content.replace(
      /@\/lib\/design-system/g,
      `@/${cleanUtilsDir}/design-system`,
    );

    if (registryComponents.length > 0) {
      content = content.replace(
        /###\s+(\d+\.\s+([A-Za-z0-9 &]+))/g,
        (_match, p1, namePart) => {
          const names = namePart
            .split(/\s*&\s*/)
            .map((n: string) => n.trim().toLowerCase());
          const isAnyInstalled = names.some((n: string) =>
            installedComponents.has(n),
          );

          if (isAnyInstalled) {
            return `### ${p1} [Status: INSTALLED]`;
          } else {
            const isAnyInRegistry = names.some((n: string) =>
              registryComponents.some((rc) => rc.name.toLowerCase() === n),
            );
            if (isAnyInRegistry) {
              const registryName =
                names.find((n: string) =>
                  registryComponents.some((rc) => rc.name.toLowerCase() === n),
                ) || names[0];
              return `### ${p1} [Status: AVAILABLE - Run 'npx @bloomui-react/cli add ${registryName}' to install]`;
            }
            return `### ${p1}`;
          }
        },
      );
    }
    const cleanUtilsPath = (config.utilsDir || "lib").replace(/\\/g, "/");
    const installedDocs = `Detailed API references, available props, and code examples for each installed component are saved inside the workspace at:
- **\`${cleanUtilsPath}/docs/[component_name].md\`**

Whenever you are working with an installed component, you MUST read its specific markdown file (e.g. \`${cleanUtilsPath}/docs/button.md\` or \`${cleanUtilsPath}/docs/carousel.md\`) to check the exact props, types, defaults, and code examples before writing or refactoring code.`;

    content = content.replace("[INSTALLED_DOCS_PLACEHOLDER]", installedDocs);
    for (const agent of selectedAgents) {
      let targetPath = "";
      if (agent === "antigravity") {
        targetPath = path.join(process.cwd(), "AGENTS.md");
      } else if (agent === "claude") {
        targetPath = path.join(process.cwd(), "CLAUDE.md");
      } else if (agent === "cursor") {
        targetPath = path.join(process.cwd(), ".cursorrules");
      } else if (agent === "windsurf") {
        targetPath = path.join(process.cwd(), ".windsurfrules");
      } else if (agent === "copilot") {
        const githubDir = path.join(process.cwd(), ".github");
        if (!fs.existsSync(githubDir)) {
          fs.mkdirSync(githubDir, { recursive: true });
        }
        targetPath = path.join(githubDir, "copilot-instructions.md");
      } else if (agent === "codex") {
        targetPath = path.join(process.cwd(), ".copilotinstructions");
      } else if (agent === "universal") {
        targetPath = path.join(process.cwd(), "llms.txt");
      }

      if (targetPath) {
        fs.writeFileSync(targetPath, content, "utf8");
      }
    }

    if (!skipPrompts) {
      s.stop("AI rules files generated successfully!");
    } else {
      console.log("AI rules files generated successfully!");
    }
  } catch (err) {
    if (!skipPrompts) {
      s.stop("Error generating AI rules.");
      console.error(err);
    } else {
      console.error("Error generating AI rules:", err);
    }
  }
}

program
  .command("setup-ai")
  .description(
    "Configure rule files for AI Coding Assistants (Antigravity, Cursor, etc.)",
  )
  .option("-y, --yes", "Skip prompts and configure all rule files", false)
  .action(async (options) => {
    const isTTY = process.stdout.isTTY;
    const skipPrompts = options.yes || !isTTY;

    if (!skipPrompts) {
      intro(pc.bgMagenta(pc.black(" Bloom UI — AI Context Setup ")));
    }

    const configFile = path.join(process.cwd(), "bloom.json");
    if (!fs.existsSync(configFile)) {
      console.error(
        pc.red(
          "bloom.json not found. Run 'npx bloom init' first to set up config.",
        ),
      );
      return;
    }

    let selectedAgents: string[] = [
      "antigravity",
      "claude",
      "cursor",
      "windsurf",
      "copilot",
      "codex",
      "universal",
    ];

    if (!skipPrompts) {
      const agents = await multiselect({
        message:
          "Select the AI assistants you use (Space to select, Enter to confirm):",
        options: [
          { value: "antigravity", label: "Antigravity (AGENTS.md)" },
          { value: "claude", label: "Claude Code (CLAUDE.md)" },
          { value: "cursor", label: "Cursor (.cursorrules)" },
          { value: "windsurf", label: "Windsurf (.windsurfrules)" },
          {
            value: "copilot",
            label: "GitHub Copilot (.github/copilot-instructions.md)",
          },
          {
            value: "codex",
            label: "VS Code Copilot / Codex (.copilotinstructions)",
          },
          { value: "universal", label: "Universal Context (llms.txt)" },
        ],
        required: true,
      });

      if (typeof agents === "symbol") return;
      selectedAgents = agents as string[];
    }

    await generateAiRules(selectedAgents, skipPrompts);

    if (!skipPrompts) {
      outro(pc.green("AI context setup completed!"));
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
      console.error(
        pc.red("bloom.json not found. Run 'npx bloom init' first."),
      );
      return;
    }

    const config = JSON.parse(fs.readFileSync(configFile, "utf8"));
    const componentDir = config.componentDir || "components/ui";

    if (!skipPrompts) {
      intro(pc.bgMagenta(pc.black(" Bloom UI — Add Component ")));
    }

    const registryBase = await getRegistryBase();
    let selectedComponents: string[] = [];

    if (componentName) {
      selectedComponents = [componentName];
    } else {
      if (skipPrompts) {
        console.error(
          pc.red(
            "Component name is required in non-interactive/non-TTY environments.",
          ),
        );
        return;
      }

      const installedComponents = new Set<string>();
      const targetComponentDir = path.join(process.cwd(), componentDir);
      if (fs.existsSync(targetComponentDir)) {
        try {
          const dirs = fs.readdirSync(targetComponentDir, {
            withFileTypes: true,
          });
          for (const d of dirs) {
            if (d.isDirectory()) {
              installedComponents.add(d.name.toLowerCase());
            }
          }
        } catch (_e) {}
      }

      const sList = spinner();
      sList.start("Fetching available components");
      let list: { name: string }[] = [];
      try {
        const res = await fetch(`${registryBase}/index.json`);
        if (res.ok) {
          list = (await res.json()) as { name: string }[];
        }
      } catch (_e) {}
      sList.stop("Done fetching");

      if (list.length === 0) {
        outro(
          pc.red(
            "No components found in registry. Make sure you are online or your server is running.",
          ),
        );
        return;
      }

      const selection = await multiselect({
        message: "Select components to add:",
        options: list.map((c) => {
          const isInstalled = installedComponents.has(c.name.toLowerCase());
          return {
            value: c.name,
            label: isInstalled
              ? `${pc.dim(c.name)} ${pc.green("✔ (installed)")}`
              : c.name,
          };
        }),
        required: true,
      });

      if (typeof selection === "symbol") return;
      selectedComponents = selection as string[];
    }

    for (const selectedComponent of selectedComponents) {
      const sAdd = spinner();
      if (!skipPrompts) {
        sAdd.start(`Adding ${selectedComponent} component`);
      } else {
        console.log(`Adding component: ${selectedComponent}...`);
      }

      try {
        const res = await fetch(
          `${registryBase}/components/${selectedComponent}.json`,
        );
        if (!res.ok) {
          if (!skipPrompts) {
            sAdd.stop(`Component ${selectedComponent} not found in registry.`);
          } else {
            console.error(
              `Component ${selectedComponent} not found in registry.`,
            );
          }
          continue;
        }

        interface RegistryComponent {
          name: string;
          dependencies: string[];
          files: { name: string; content: string }[];
          docs?: string;
        }

        const componentData = (await res.json()) as RegistryComponent;

        const targetDir = path.join(
          process.cwd(),
          componentDir,
          selectedComponent,
        );
        if (!fs.existsSync(targetDir)) {
          fs.mkdirSync(targetDir, { recursive: true });
        }

        for (const file of componentData.files) {
          let updatedContent = file.content;

          const fromPath = path.join(componentDir, selectedComponent);
          const toPath = config.utilsDir || "lib";
          let relativeImportPath = path
            .relative(fromPath, toPath)
            .replace(/\\/g, "/");
          if (!relativeImportPath.startsWith(".")) {
            relativeImportPath = `./${relativeImportPath}`;
          }

          updatedContent = updatedContent.replace(
            /@\/lib\/utils/g,
            `${relativeImportPath}/utils`,
          );
          updatedContent = updatedContent.replace(
            /@\/lib\/design-system/g,
            `${relativeImportPath}/design-system`,
          );
          updatedContent = updatedContent.replace(
            /@\/hooks\/ripple/g,
            `../../hooks/ripple`,
          );

          fs.writeFileSync(
            path.join(targetDir, file.name),
            updatedContent,
            "utf8",
          );
        }

        if (componentData.docs) {
          const targetDocsDir = path.join(
            process.cwd(),
            config.utilsDir || "lib",
            "docs",
          );
          if (!fs.existsSync(targetDocsDir)) {
            fs.mkdirSync(targetDocsDir, { recursive: true });
          }
          let updatedDocs = componentData.docs;
          const cleanCompDir = componentDir.replace(/\\/g, "/");
          updatedDocs = updatedDocs.replace(
            /@\/components\/ui/g,
            `@/${cleanCompDir}`,
          );
          fs.writeFileSync(
            path.join(targetDocsDir, `${selectedComponent}.md`),
            updatedDocs,
            "utf8",
          );
        }

        if (!skipPrompts) {
          sAdd.stop(`Added ${selectedComponent} component files`);
        } else {
          console.log(`Added ${selectedComponent} component files.`);
        }

        if (
          componentData.dependencies &&
          componentData.dependencies.length > 0
        ) {
          const pkgManager = detectPackageManager();
          const sDeps = spinner();
          if (!skipPrompts) {
            sDeps.start(
              `Installing dependencies for ${selectedComponent}: ${componentData.dependencies.join(", ")}`,
            );
          } else {
            console.log(
              `Installing dependencies for ${selectedComponent}: ${componentData.dependencies.join(", ")}...`,
            );
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
            await execPromise(installCmd);
            if (!skipPrompts) {
              sDeps.stop("Dependencies installed successfully");
            } else {
              console.log("Dependencies installed successfully.");
            }
          } catch (_err) {
            if (!skipPrompts) {
              sDeps.stop(
                "Failed to install dependencies automatically. Please install them manually.",
              );
            } else {
              console.warn(
                "Failed to install dependencies automatically. Please install them manually.",
              );
            }
          }
        }
      } catch (_e) {
        if (!skipPrompts) {
          sAdd.stop(
            `Failed to download or write ${selectedComponent} component files.`,
          );
        } else {
          console.error(
            `Failed to download or write ${selectedComponent} component files.`,
          );
        }
      }
    }

    await autoUpdateExistingAiRules();

    if (!skipPrompts) {
      outro(pc.green(`Successfully added components to your project!`));
    } else {
      console.log(`Successfully added components to your project!`);
    }
  });

program
  .command("update")
  .argument("[component]", "Name of the component to update")
  .description("Update installed components to the latest version")
  .option("-y, --yes", "Bypass prompts and confirm action", false)
  .action(async (componentName, options) => {
    const isTTY = process.stdout.isTTY;
    const skipPrompts = options.yes || !isTTY;

    const configFile = path.join(process.cwd(), "bloom.json");
    if (!fs.existsSync(configFile)) {
      console.error(
        pc.red("bloom.json not found. Run 'npx bloom init' first."),
      );
      return;
    }

    const config = JSON.parse(fs.readFileSync(configFile, "utf8"));
    const componentDir = config.componentDir || "components/ui";

    if (!skipPrompts) {
      intro(pc.bgMagenta(pc.black(" Bloom UI — Update Components ")));
    }

    const targetComponentDir = path.join(process.cwd(), componentDir);
    const installedComponents: string[] = [];
    if (fs.existsSync(targetComponentDir)) {
      try {
        const dirs = fs.readdirSync(targetComponentDir, {
          withFileTypes: true,
        });
        for (const d of dirs) {
          if (d.isDirectory()) {
            installedComponents.push(d.name.toLowerCase());
          }
        }
      } catch (_e) {}
    }

    if (installedComponents.length === 0) {
      if (!skipPrompts) {
        outro(pc.yellow("No Bloom UI components found to update."));
      } else {
        console.log("No Bloom UI components found to update.");
      }
      return;
    }

    let selectedComponents: string[] = [];
    if (componentName) {
      const lowerComp = componentName.toLowerCase();
      if (!installedComponents.includes(lowerComp)) {
        if (!skipPrompts) {
          outro(
            pc.red(`Component ${componentName} is not currently installed.`),
          );
        } else {
          console.error(
            `Component ${componentName} is not currently installed.`,
          );
        }
        return;
      }
      selectedComponents = [lowerComp];
    } else {
      if (skipPrompts) {
        selectedComponents = installedComponents;
      } else {
        const selection = await multiselect({
          message: "Select components to update:",
          options: installedComponents.map((c) => ({ value: c, label: c })),
          required: true,
        });

        if (typeof selection === "symbol") return;
        selectedComponents = selection as string[];
      }
    }

    const registryBase = await getRegistryBase();

    for (const selectedComponent of selectedComponents) {
      const sAdd = spinner();
      if (!skipPrompts) {
        sAdd.start(`Updating ${selectedComponent} component`);
      } else {
        console.log(`Updating component: ${selectedComponent}...`);
      }

      try {
        const res = await fetch(
          `${registryBase}/components/${selectedComponent}.json`,
        );
        if (!res.ok) {
          if (!skipPrompts) {
            sAdd.stop(`Component ${selectedComponent} not found in registry.`);
          } else {
            console.error(
              `Component ${selectedComponent} not found in registry.`,
            );
          }
          continue;
        }

        interface RegistryComponent {
          name: string;
          dependencies: string[];
          files: { name: string; content: string }[];
          docs?: string;
        }

        const componentData = (await res.json()) as RegistryComponent;

        const targetDir = path.join(
          process.cwd(),
          componentDir,
          selectedComponent,
        );
        if (!fs.existsSync(targetDir)) {
          fs.mkdirSync(targetDir, { recursive: true });
        }

        for (const file of componentData.files) {
          let updatedContent = file.content;

          const fromPath = path.join(componentDir, selectedComponent);
          const toPath = config.utilsDir || "lib";
          let relativeImportPath = path
            .relative(fromPath, toPath)
            .replace(/\\/g, "/");
          if (!relativeImportPath.startsWith(".")) {
            relativeImportPath = `./${relativeImportPath}`;
          }

          updatedContent = updatedContent.replace(
            /@\/lib\/utils/g,
            `${relativeImportPath}/utils`,
          );
          updatedContent = updatedContent.replace(
            /@\/lib\/design-system/g,
            `${relativeImportPath}/design-system`,
          );
          updatedContent = updatedContent.replace(
            /@\/hooks\/ripple/g,
            `../../hooks/ripple`,
          );

          fs.writeFileSync(
            path.join(targetDir, file.name),
            updatedContent,
            "utf8",
          );
        }

        if (componentData.docs) {
          const targetDocsDir = path.join(
            process.cwd(),
            config.utilsDir || "lib",
            "docs",
          );
          if (!fs.existsSync(targetDocsDir)) {
            fs.mkdirSync(targetDocsDir, { recursive: true });
          }
          let updatedDocs = componentData.docs;
          const cleanCompDir = componentDir.replace(/\\/g, "/");
          updatedDocs = updatedDocs.replace(
            /@\/components\/ui/g,
            `@/${cleanCompDir}`,
          );
          fs.writeFileSync(
            path.join(targetDocsDir, `${selectedComponent}.md`),
            updatedDocs,
            "utf8",
          );
        }

        if (!skipPrompts) {
          sAdd.stop(`Updated ${selectedComponent} component files`);
        } else {
          console.log(`Updated ${selectedComponent} component files.`);
        }

        if (
          componentData.dependencies &&
          componentData.dependencies.length > 0
        ) {
          const pkgManager = detectPackageManager();
          const sDeps = spinner();
          if (!skipPrompts) {
            sDeps.start(
              `Installing dependencies for ${selectedComponent}: ${componentData.dependencies.join(", ")}`,
            );
          } else {
            console.log(
              `Installing dependencies for ${selectedComponent}: ${componentData.dependencies.join(", ")}...`,
            );
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
            await execPromise(installCmd);
            if (!skipPrompts) {
              sDeps.stop("Dependencies installed successfully");
            } else {
              console.log("Dependencies installed successfully.");
            }
          } catch (_err) {
            if (!skipPrompts) {
              sDeps.stop(
                "Failed to install dependencies automatically. Please install them manually.",
              );
            } else {
              console.warn(
                "Failed to install dependencies automatically. Please install them manually.",
              );
            }
          }
        }
      } catch (_e) {
        if (!skipPrompts) {
          sAdd.stop(
            `Failed to download or write ${selectedComponent} component files.`,
          );
        } else {
          console.error(
            `Failed to download or write ${selectedComponent} component files.`,
          );
        }
      }
    }

    await autoUpdateExistingAiRules();

    if (!skipPrompts) {
      outro(pc.green(`Successfully updated components in your project!`));
    } else {
      console.log(`Successfully updated components in your project!`);
    }
  });

program
  .command("doctor")
  .description("Check the health of Bloom UI workspace files and configuration")
  .action(async () => {
    const s = spinner();
    s.start("Analyzing Bloom UI project health");

    const issues: string[] = [];
    const successes: string[] = [];

    const configFile = path.join(process.cwd(), "bloom.json");
    if (!fs.existsSync(configFile)) {
      s.stop("Verification finished with critical errors.");
      console.log(
        pc.red(
          "✖ Critical: bloom.json not found in the current workspace. Run 'npx bloom init' to initialize.",
        ),
      );
      return;
    }

    try {
      const config = JSON.parse(fs.readFileSync(configFile, "utf8"));
      successes.push("bloom.json manifest exists and is valid JSON.");

      const componentDir = config.componentDir || "components/ui";
      const utilsDir = config.utilsDir || "lib";

      const compPath = path.join(process.cwd(), componentDir);
      if (fs.existsSync(compPath)) {
        successes.push(`Component directory exists at: ${componentDir}`);
      } else {
        issues.push(`Component directory is missing: ${componentDir}`);
      }

      const utilsPath = path.join(process.cwd(), utilsDir);
      if (fs.existsSync(utilsPath)) {
        successes.push(`Utility directory exists at: ${utilsDir}`);

        const requiredUtils = ["utils.ts", "design-system.ts"];
        for (const file of requiredUtils) {
          const filePath = path.join(utilsPath, file);
          if (fs.existsSync(filePath)) {
            successes.push(`Utility file found: ${utilsDir}/${file}`);
          } else {
            issues.push(`Utility file is missing: ${utilsDir}/${file}`);
          }
        }

        const rippleDir = path.join(utilsPath, "ripple");
        if (fs.existsSync(rippleDir)) {
          successes.push(
            `Ripple animations directory found at: ${utilsDir}/ripple`,
          );
        } else {
          issues.push(
            `Ripple animations directory is missing at: ${utilsDir}/ripple`,
          );
        }

        const docsDir = path.join(utilsPath, "docs");
        if (fs.existsSync(docsDir)) {
          successes.push(
            `Local markdown documentation directory found at: ${utilsDir}/docs`,
          );
        } else {
          issues.push(
            `Local markdown documentation directory is missing at: ${utilsDir}/docs`,
          );
        }
      } else {
        issues.push(`Utility directory is missing: ${utilsDir}`);
      }

      const pkgJsonPath = path.join(process.cwd(), "package.json");
      if (fs.existsSync(pkgJsonPath)) {
        try {
          const pkg = JSON.parse(fs.readFileSync(pkgJsonPath, "utf8"));
          const deps = { ...pkg.dependencies, ...pkg.devDependencies };
          const requiredDeps = ["clsx", "tailwind-merge", "lucide-react"];
          for (const dep of requiredDeps) {
            if (deps[dep]) {
              successes.push(`Dependency '${dep}' is installed.`);
            } else {
              issues.push(`Missing peer dependency '${dep}' in package.json.`);
            }
          }
        } catch (_e) {
          issues.push("Could not parse package.json. File may be malformed.");
        }
      } else {
        issues.push("package.json not found in process root.");
      }

      s.stop("Health check complete.");

      console.log(pc.bold("\n--- HEALTH DIAGNOSIS ---"));
      for (const msg of successes) {
        console.log(pc.green(`✔ ${msg}`));
      }

      if (issues.length > 0) {
        console.log(pc.bold(pc.red("\n✖ Found issues in your project:")));
        for (const msg of issues) {
          console.log(pc.red(`  - ${msg}`));
        }
      } else {
        console.log(
          pc.bold(
            pc.green("\n✔ Perfect! Your Bloom UI setup is completely healthy."),
          ),
        );
      }
    } catch (_err) {
      s.stop("Health check failed.");
      console.error(pc.red("An error occurred during diagnosis."));
    }
  });

program
  .command("uninstall")
  .description("Uninstall Bloom UI and delete all generated files")
  .option("-y, --yes", "Bypass prompts and confirm action", false)
  .action(async (options) => {
    const isTTY = process.stdout.isTTY;
    const skipPrompts = options.yes || !isTTY;

    if (!skipPrompts) {
      intro(pc.bgRed(pc.black(" Bloom UI — Uninstall ")));
      const confirmUninstall = await confirm({
        message:
          "Are you sure you want to uninstall Bloom UI and delete all related files?",
        initialValue: false,
      });

      if (typeof confirmUninstall === "symbol" || !confirmUninstall) {
        outro(pc.yellow("Uninstall cancelled."));
        return;
      }
    }

    const configFile = path.join(process.cwd(), "bloom.json");
    if (!fs.existsSync(configFile)) {
      if (!skipPrompts) {
        outro(
          pc.yellow(
            "No bloom.json found. Bloom UI is not initialized in this project.",
          ),
        );
      } else {
        console.log(
          "No bloom.json found. Bloom UI is not initialized in this project.",
        );
      }
      return;
    }

    try {
      const config = JSON.parse(fs.readFileSync(configFile, "utf8"));
      const componentDir = config.componentDir;
      const utilsDir = config.utilsDir;

      const s = spinner();
      if (!skipPrompts) {
        s.start("Uninstalling Bloom UI and removing files");
      }

      if (utilsDir) {
        const utilsPath = path.join(process.cwd(), utilsDir);
        const filesToDelete = ["utils.ts", "design-system.ts"];
        for (const file of filesToDelete) {
          const filePath = path.join(utilsPath, file);
          if (fs.existsSync(filePath)) {
            fs.unlinkSync(filePath);
          }
        }

        const rippleDir = path.join(utilsPath, "ripple");
        if (fs.existsSync(rippleDir)) {
          fs.rmSync(rippleDir, { recursive: true, force: true });
        }

        const docsDir = path.join(utilsPath, "docs");
        if (fs.existsSync(docsDir)) {
          fs.rmSync(docsDir, { recursive: true, force: true });
        }
      }

      if (componentDir) {
        const compPath = path.join(process.cwd(), componentDir);
        if (fs.existsSync(compPath)) {
          try {
            const dirs = fs.readdirSync(compPath, { withFileTypes: true });
            for (const d of dirs) {
              if (d.isDirectory()) {
                const innerFiles = fs.readdirSync(path.join(compPath, d.name));
                const isBloomComponent = innerFiles.some(
                  (f) => f.endsWith(".code.ts") || f === `${d.name}.tsx`,
                );
                if (isBloomComponent) {
                  fs.rmSync(path.join(compPath, d.name), {
                    recursive: true,
                    force: true,
                  });
                }
              }
            }
          } catch (_e) {}
        }
      }

      const rulesFiles = [
        "AGENTS.md",
        "CLAUDE.md",
        ".cursorrules",
        ".windsurfrules",
        ".github/copilot-instructions.md",
        ".copilotinstructions",
        "llms.txt",
      ];
      for (const ruleFile of rulesFiles) {
        const filePath = path.join(process.cwd(), ruleFile);
        if (fs.existsSync(filePath)) {
          fs.unlinkSync(filePath);
        }
      }

      if (fs.existsSync(configFile)) {
        fs.unlinkSync(configFile);
      }

      if (!skipPrompts) {
        s.stop("All Bloom UI files removed successfully");
        outro(pc.green("Bloom UI uninstalled successfully."));
      } else {
        console.log("Bloom UI uninstalled successfully.");
      }
    } catch (e) {
      if (!skipPrompts) {
        outro(pc.red("An error occurred during uninstallation."));
      } else {
        console.error("An error occurred during uninstallation:", e);
      }
    }
  });

program.parse(process.argv);
