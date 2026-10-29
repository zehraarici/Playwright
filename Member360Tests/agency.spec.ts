import { test, expect } from '@playwright/test';

test(
    'Verify Agency Information',
    async ({ page }) => {

        await page.goto(
          'http://10.0.19.45:3360'
        );

        await expect(
            page.getByText(
             'Shenandoah Valley Insurance'
            )
        ).toBeVisible();

        await expect(
            page.getByText(
              'AG4119'
            )
        ).toBeVisible();

});