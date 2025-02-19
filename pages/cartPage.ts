import { Locator, Page } from '@playwright/test';

export class CartPage {
    readonly page: Page;
    readonly checkoutButton: Locator;
    readonly itemQuantity: Locator;

    constructor(page: Page) {
        this.page = page
        this.checkoutButton = this.page.locator('[data-test="checkout"]');
        this.itemQuantity = this.page.locator('[data-test="item-quantity"]');
    }

    async proceedToCheckout() {
        await this.checkoutButton.click();
    }

    async getItemQuantity(): Promise<string> {
    return await this.itemQuantity.innerText();
  }
}
