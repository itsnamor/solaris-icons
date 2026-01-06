import { join } from "node:path";

await Bun.build({
  entrypoints: [join(import.meta.dirname, "..", "main.ts")],
  outdir: "./dist",
  target: "browser",
  external: ["react", "react-dom", "react/jsx-runtime"],
  minify: true,

  jsx: {
    development: false,
    runtime: "automatic",
  },

  define: {
    "process.env.NODE_ENV": "production",
  },
});
