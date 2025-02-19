import { Locator, Page } from "@playwright/test";
import logger from "../helper/logger";

export class CartPage {
  readonly page: Page;
  readonly checkoutButton: Locator;
  readonly itemQuantity: Locator;

  constructor(page: Page) {
    this.page = page;
    this.checkoutButton = this.page.locator('[data-test="checkout"]');
    this.itemQuantity = this.page.locator('[data-test="item-quantity"]');
  }

  async proceedToCheckout() {
    logger.info("Proceeding to checkout...");
    await this.checkoutButton.click();
    logger.info("Clicked 'Checkout' button.");
  }

  async getItemQuantity(): Promise<string> {
    const quantity = await this.itemQuantity.innerText();
    logger.info(`Cart item quantity: ${quantity}`);
    return quantity;
  }
}
