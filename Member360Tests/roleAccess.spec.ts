import { test, expect } from '@playwright/test';

test(
    'Verify Role Buttons',
    async ({ page }) => {

        await page.goto(
            'http://10.0.19.45:3360'
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

});