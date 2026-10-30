import { test, expect } from '@playwright/test';
import { memberData }
from '../../test-data/members.ts';

test(
    'Verify Claims Section',
    async ({ page }) => {

        await page.goto(
          '/'
        );

        await expect(
            page.getByText(
                'Claims'
            )
        ).toBeVisible();

        await expect(
            page.getByText(
                memberData.claimNumber
            )
        ).toBeVisible();

});