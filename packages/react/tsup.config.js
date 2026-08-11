module.exports = {
  entry: ["src/index.ts"],
  format: ["cjs", "esm"],
  dts: false,
  clean: true,
  minify: true,
  sourcemap: true,
  external: ["react", "react-dom"],
  banner: {
    js: '"use client";',
  },
  esbuildOptions(options) {
    options.jsx = "automatic";
  },
};
