import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],

  test: {
    environment: "happy-dom",
    globals: true,
    setupFiles: "./tests/setup.ts",
    exclude: [
      "**/node_modules/**",
      "**/dist/**",
      "**/e2e/**",
      "**/cypress/**",
      "**/.next/**",
    ],
    alias: {
      "@": path.resolve(__dirname, "./"),
    },
    fileParallelism: false,
    isolate: true,
    pool: "forks",
    clearMocks: true,
    restoreMocks: true,
    unstubGlobals: true,
  },
});