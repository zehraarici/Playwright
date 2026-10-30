import { test, expect } from '@playwright/test';

test(
    'Verify available roles',
    async ({ page }) => {

        await page.goto(
            '/'
        );

        await expect(
            page.getByText('CSR')
        ).toBeVisible();

        await expect(
            page.getByText('Agent')
        ).toBeVisible();

        await expect(
            page.getByText('Admin')
        ).toBeVisible();
        await expect(
            page.getByText('Underwriter')
        ).toBeVisible();

});