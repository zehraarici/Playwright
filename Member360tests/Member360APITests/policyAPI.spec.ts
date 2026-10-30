import { test, expect } from '@playwright/test';

test('Verify policies API',
async ({ request }) => {

    const response =
      await request.get(
       '/api/members/M360-001523/policies'
    );

    expect(
      response.status()
    ).toBe(200);

    const body =
      await response.json();

    expect(
      body.length
    ).toBeGreaterThan(0);
});