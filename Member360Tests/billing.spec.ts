import { test, expect } from '@playwright/test';

test(
    'Verify Outstanding Balance',
    async ({ page }) => {

        await page.goto(
          'http://10.0.19.45:3360'
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