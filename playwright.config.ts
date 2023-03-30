import { defineConfig } from '@playwright/test';
import { MyFixtures } from './fixture/testFixture';

export default defineConfig<MyFixtures>({
  use: {
    headless: true,
    viewport: { width: 1280, height: 720 },
    ignoreHTTPSErrors: true,
    video: 'on',
    trace: 'on',
    screenshot: 'on'
  },
  reporter:[['html'], ['allure-playwright']]
});