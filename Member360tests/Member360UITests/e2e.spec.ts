import { test, expect } from '@playwright/test';

test(
    'Validate Complete Member360 Profile',
    async ({ page }) => {

        await page.goto(
            '/'
        );

        await expect(
            page.getByText(
                'Martin & Sons Lumber'
            )
        ).toBeVisible();

        await expect(
            page.getByText(
                'Policies'
            )
        ).toBeVisible();

        await expect(
            page.getByText(
                'Claims'
            )
        ).toBeVisible();

        await expect(
            page.getByText(
                'Billing'
            )
        ).toBeVisible();

        await expect(
            page.getByText(
                'Agency'
            )
        ).toBeVisible();

        await expect(
            page.getByText(
                'Contact & preferences'
            )
        ).toBeVisible();
    });