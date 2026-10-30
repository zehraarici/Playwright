import { test, expect } from '@playwright/test';

test(
    'Verify Policies Section',
    async ({ page }) => {

        await page.goto(
            '/'
        );

        await expect(
            page.getByText('Policies')
        ).toBeVisible();

        await expect(
            page.getByText(
              'Commercial Auto'
            ).first()
        ).toBeVisible();

});