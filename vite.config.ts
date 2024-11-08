import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path, { resolve } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const root = resolve(__dirname, "src");
const outDir = resolve(__dirname, "build/pages");
// https://vitejs.dev/config/
// const bundle =
//   import.meta.env.BUNDLE_URL || "../../testable-projects-fcc/v1/bundle.js";
// const projectsPath = process.env.PROJECTS_PATH || './src/projects';
export default defineConfig({
  plugins: [react()],
  root, // Specify the root of your project directory
  build: {
    outDir: outDir, // Specify the output directory
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(root, "index.html"),
        calculator: resolve(
          root,
          "./projects/javascript-calculator",
          "index.html"
        ),
        portifolio: resolve(root, "./projects/portifolio", "index.html"),
      },
    },
  },
});
