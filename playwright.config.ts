import { defineConfig, devices } from "@playwright/test";

export default defineConfig({
  testDir: "./tests",
  fullyParallel: true, // Run tests in parallel for faster execution
  forbidOnly: !!process.env.CI, // Prevent accidental committed .only tests in CI
  retries: process.env.CI ? 2 : 1, // Retry twice in CI, once locally for flaky tests
  workers: process.env.CI ? 2 : 4, // Optimize CI runs; increase for local execution

  timeout: 30000, // Global test timeout (30s per test)

  reporter: [
    ["html", { outputFolder: "playwright-report" }],
    ["json", { outputFile: "playwright-report/report.json" }],
  ],

  use: {
    baseURL: "https://www.saucedemo.com",
    headless: true,
    screenshot: "only-on-failure",
    trace: "retain-on-failure",
    video: "retain-on-failure",
    actionTimeout: 5000,
    navigationTimeout: 10000,
  },

  projects: [
    {
      name: "chromium",
      use: { ...devices["Desktop Chrome"] },
    },
  ],
});
