const fs = require("node:fs");
const path = require("node:path");

const ua = process.env.npm_config_user_agent || "";
let execManager = "npm";
if (ua.includes("pnpm")) {
  execManager = "pnpm";
} else if (ua.includes("yarn")) {
  execManager = "yarn";
} else if (ua.includes("bun")) {
  execManager = "bun";
}

const cwd = process.cwd();
const hasPnpm = fs.existsSync(path.join(cwd, "pnpm-lock.yaml"));
const hasYarn = fs.existsSync(path.join(cwd, "yarn.lock"));
const hasBun = fs.existsSync(path.join(cwd, "bun.lockb"));

let expectedManager = "";
if (hasPnpm) {
  expectedManager = "pnpm";
} else if (hasYarn) {
  expectedManager = "yarn";
} else if (hasBun) {
  expectedManager = "bun";
}

if (expectedManager && execManager !== expectedManager) {
  console.error(
    `\x1b[31mError: This project uses ${expectedManager} but you are installing with ${execManager}.\x1b[0m`,
  );
  console.error(
    `\x1b[31mPlease run: ${expectedManager === "pnpm" ? "pnpm add" : expectedManager === "yarn" ? "yarn add" : expectedManager === "bun" ? "bun add" : "npm install"} @bloomui-react/components\x1b[0m\n`,
  );
  process.exit(1);
}
