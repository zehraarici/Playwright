import { test, expect } from '@playwright/test';
import { memberData }
from '../../test-data/members.ts';

test(
    'Verify Agency Information',
    async ({ page }) => {

        await page.goto(
          '/'
        );

        await expect(
            page.getByText(
             memberData.agency
            )
        ).toBeVisible();

        await expect(
            page.getByText(
              'AG4119'
            )
        ).toBeVisible();

});