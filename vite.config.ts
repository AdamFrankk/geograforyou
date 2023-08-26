import { fileURLToPath, URL } from "node:url"

import { defineConfig } from "vite"
import EnvironmentPlugin from "vite-plugin-environment"
import tsconfigPaths from "vite-tsconfig-paths"

import vue from "@vitejs/plugin-vue"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), tsconfigPaths(), EnvironmentPlugin("all", { prefix: "VITE_" })],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url))
    }
  },
  base: "./"
})
