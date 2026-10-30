import { test, expect } from '@playwright/test';
import { Member360Page } from '../../pages/Member360Page'; // Adjusted path based on directory structure
import { memberData } from '../../test-data/members';

test('Verify member search = TC_P1_010', async ({ page }) => {

    const member360 =
        new Member360Page(page);

    await member360.open();

    await member360.searchMember(
        memberData.memberId
    );

    await expect(
        page.getByText(memberData.memberName)
    ).toBeVisible();
});