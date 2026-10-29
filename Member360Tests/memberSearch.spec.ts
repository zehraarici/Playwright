import { test, expect } from '@playwright/test';

import { Member360Page }
from '../pages/Member360Page';

import { members }
from '../test-data/members';

test(
    'Search Member = TC_P1_010',
    async ({ page }) => {

        const member360 =
            new Member360Page(page);

        await member360.navigate();

        await member360.searchMember(
            members.memberId
        );

        await expect(
            page.getByText(
                members.memberName
            )
        ).toBeVisible();

});