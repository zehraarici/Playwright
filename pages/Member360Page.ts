import { Page } from '@playwright/test';

export class Member360Page {

    constructor(private page: Page) { }

    async open() {
        await this.page.goto('/');
    }

    async searchMember(member: string) {

        await this.page
            .getByPlaceholder('Find a member')
            .fill(member);

        await this.page
            .getByRole('button', { name: 'Search' })
            .click();
    }

    async clearSearch() {

        await this.page
            .getByRole('button', { name: 'Clear' })
            .click();
    }
}

