import { test, expect } from '@playwright/test';

test(
    'Verify Contact Information',
    async ({ page }) => {

        await page.goto(
            'http://10.0.19.45:3360'
        );

        await expect(
            page.getByText(
             '540-555-0143'
            )
        ).toBeVisible();

});