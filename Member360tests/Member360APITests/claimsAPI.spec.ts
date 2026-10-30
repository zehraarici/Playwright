import { test, expect } from '@playwright/test';

test('Verify claims API',
async ({ request }) => {

    const response =
      await request.get(
      '/api/members/M360-001523/claims'
    );

    expect(
      response.ok()
    ).toBeTruthy();
});