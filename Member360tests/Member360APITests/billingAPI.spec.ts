import { test, expect } from '@playwright/test';

test('Verify billing API',
async ({ request }) => {

    const response =
      await request.get(
      '/api/members/M360-001523/billing'
    );

    expect(
      response.status()
    ).toBe(200);

    const body =
      await response.json();

    expect(
      body
    ).toHaveProperty(
      'outstandingBalance'
    );
});