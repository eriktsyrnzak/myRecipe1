import { defineConfig } from "@playwright/test";

export default defineConfig({
  testDir: "./src/test/e2e",
  testMatch: "**/*.spec.js",
  webServer: {
    command: "npm run dev",
    url: "http://localhost:5173",
    reuseExistingServer: true,
  },
});