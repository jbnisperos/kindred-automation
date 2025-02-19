import { Locator, Page } from "@playwright/test";
import { products } from "../data/products";

export class InventoryPage {
  readonly page: Page;
  readonly cartIcon: Locator;
  readonly addToCartButtons: Record<string, Locator>;

  constructor(page: Page) {
    this.page = page;
    this.cartIcon = this.page.locator('[data-test="shopping-cart-link"]');
    this.addToCartButtons = {
      backpack: this.page.locator(products.backpack.locator),
      tshirt: this.page.locator(products.tshirt.locator),
      onesie: this.page.locator(products.onesie.locator),
      bikelight: this.page.locator(products.bikelight.locator),
      jacket: this.page.locator(products.jacket.locator),
      redshirt: this.page.locator(products.redshirt.locator),
    };
  }

  async addToCart(product: string) {
    const productLocator = this.addToCartButtons[product];
    await productLocator.click();
  }

  async goToCart() {
    await this.cartIcon.click();
  }
}
