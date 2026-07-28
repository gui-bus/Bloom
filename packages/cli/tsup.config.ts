import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.ts"],
  format: ["cjs"],
  dts: false,
  clean: true,
  minify: true,
  sourcemap: false,
  banner: {
    js: "#!/usr/bin/env node",
  },
});
