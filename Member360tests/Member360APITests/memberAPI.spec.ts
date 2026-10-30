import { test, expect } from '@playwright/test';
import { MemberAPI } from '../../API/MemberAPI';
import { memberData } from '../../test-data/members';

test('Get member details',
async ({ request }) => {

    const api =
        new MemberAPI(request);

    const response =
        await api.getMember(
            memberData.memberId
        );

    expect(
        response.status()
    ).toBe(200);

    const body =
        await response.json();

    expect(
        body.memberId
    ).toBe(
        memberData.memberId
    );
});