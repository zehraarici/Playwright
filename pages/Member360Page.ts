import { Page, Locator } from '@playwright/test';

export class Member360Page {

    readonly page: Page;

    readonly searchInput: Locator;
    readonly searchButton: Locator;
    readonly clearButton: Locator;

    constructor(page: Page) {

        this.page = page;

        this.searchInput =
            page.getByPlaceholder('Find a member');

        this.searchButton =
            page.getByRole('button', { name: 'Search' });

        this.clearButton =
            page.getByRole('button', { name: 'Clear' });
    }

    async navigate() {

        await this.page.goto(
            'http://10.0.19.45:3360'
        );
    }

    async searchMember(member: string) {

        await this.searchInput.fill(member);

        await this.searchButton.click();
    }

    async clearSearch() {

        await this.clearButton.click();
    }
}