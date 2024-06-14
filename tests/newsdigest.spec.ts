import { test, expect } from '@playwright/test';

test('Candidate card appears', async ({ page }) => {
  await page.goto('https://incidentdatabase.ai/apps/newsdigest/');

  await expect(page.locator('[data-cy="candidate-card"]')).toBeVisible()
});

