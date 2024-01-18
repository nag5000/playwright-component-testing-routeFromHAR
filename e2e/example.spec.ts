import { test, expect } from '@playwright/experimental-ct-vue';
//import { test, expect } from '@playwright/test';

//import App from '@/App.vue';

// See here how to get started:
// https://playwright.dev/docs/intro
// test('visits the app root url', async ({ mount, page }) => {
//   await mount(App);
//   await expect(page.getByText('You did it!')).toBeAttached();
// })

test('test', async ({ page }) => {
  await page.routeFromHAR('./e2e/hars/test-1.har', { update: true })
  await page.goto('https://google.com/')
  await page.waitForTimeout(1000)
})
