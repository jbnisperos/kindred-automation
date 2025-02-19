import { defineConfig, devices } from '@playwright/test';


export default defineConfig({
  testDir: './tests',
  fullyParallel: false,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  
  reporter: [
    ['html', { outputFolder: 'playwright-report' }],
    ['json', { outputFile: 'playwright-report/report.json' }]
  ],

  use: {
      baseURL: 'https://www.saucedemo.com',
      headless: true,
      screenshot: 'only-on-failure',
      trace: 'on-first-retry',
      video: 'retain-on-failure', 
  },

  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },

    // {
    //   name: 'firefox',
    //   use: { ...devices['Desktop Firefox'] },
    // },

    // {
    //   name: 'webkit',
    //   use: { ...devices['Desktop Safari'] },
    // },

    
  ],
});
