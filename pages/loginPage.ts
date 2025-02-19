import { Locator, Page } from '@playwright/test';

export class LoginPage {
    readonly page: Page;
    readonly usernameField: Locator;
    readonly passwordField: Locator;
    readonly loginButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.usernameField = this.page.locator('[data-test="username"]');
        this.passwordField = this.page.locator('[data-test="password"]');
        this.loginButton = this.page.locator('[data-test="login-button"]');
    }

    async login(username: string, password: string) {
        await this.usernameField.fill(username); 
        await this.passwordField.fill(password);
        await this.loginButton.click();     
    }

    async navigate(url: string) {
        await this.page.goto(url);
    }
}
