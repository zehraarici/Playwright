import { test, expect } from '@playwright/test';

test(
    'Verify Outstanding Balance',
    async ({ page }) => {

        await page.goto(
          '/'
        );

        await expect(
            page.getByText(
                'Outstanding balance'
            )
        ).toBeVisible();

        await expect(
            page.getByText(
                '$0.00'
            )
        ).toBeVisible();

});