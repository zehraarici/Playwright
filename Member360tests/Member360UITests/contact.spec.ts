import { test, expect } from '@playwright/test';
import { memberData } from '../../test-data/members';

test(
    'Verify Contact Information',
    async ({ page }) => {

        await page.goto(
            '/'
        );

        await expect(
            page.getByText(
             memberData.phone
            )
        ).toBeVisible();

});