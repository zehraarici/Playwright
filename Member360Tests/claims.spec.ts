import { test, expect } from '@playwright/test';

test(
    'Verify Claims Section',
    async ({ page }) => {

        await page.goto(
          'http://10.0.19.45:3360'
        );

        await expect(
            page.getByText(
                'Claims'
            )
        ).toBeVisible();

        await expect(
            page.getByText(
                'CL-26-074477'
            )
        ).toBeVisible();

});