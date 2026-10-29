import { test, expect } from '@playwright/test';

test(
    'Verify Policies Section',
    async ({ page }) => {

        await page.goto(
            'http://10.0.19.45:3360'
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