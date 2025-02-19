import { Locator, Page } from "@playwright/test";

export class CheckoutPage {
  readonly page: Page;
  readonly firstNameField: Locator;
  readonly lastNameField: Locator;
  readonly postalCodeField: Locator;
  readonly continueButton: Locator;
  readonly finishButton: Locator;
  readonly paymentInfoLabel: Locator;
  readonly paymentInfoValue: Locator;
  readonly shippingInfoLabel: Locator;
  readonly shippingInfoValue: Locator;
  readonly totalInfoLabel: Locator;
  readonly subtotalLabel: Locator;
  readonly taxLabel: Locator;
  readonly totalLabel: Locator;
  readonly checkmarkIcon: Locator;
  readonly orderConfirmationHeader: Locator;
  readonly orderConfirmationMessage: Locator;
  readonly backToHomeButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.firstNameField = this.page.locator('[data-test="firstName"]');
    this.lastNameField = this.page.locator('[data-test="lastName"]');
    this.postalCodeField = this.page.locator('[data-test="postalCode"]');
    this.continueButton = this.page.locator('[data-test="continue"]');
    this.finishButton = this.page.locator('[data-test="finish"]');
    this.paymentInfoLabel = page.locator('[data-test="payment-info-label"]');
    this.paymentInfoValue = page.locator('[data-test="payment-info-value"]');
    this.shippingInfoLabel = page.locator('[data-test="shipping-info-label"]');
    this.shippingInfoValue = page.locator('[data-test="shipping-info-value"]');
    this.totalInfoLabel = page.locator('[data-test="total-info-label"]');
    this.subtotalLabel = page.locator('[data-test="subtotal-label"]');
    this.taxLabel = page.locator('[data-test="tax-label"]');
    this.totalLabel = page.locator('[data-test="total-label"]');
    this.checkmarkIcon = page.locator('[data-test="pony-express"]');
    this.orderConfirmationHeader = page.locator('[data-test="complete-header"]');
    this.orderConfirmationMessage = page.locator('[data-test="complete-text"]');
    this.backToHomeButton = page.locator('[data-test="back-to-products"]');
  }

  async fillCheckoutDetails(
    firstName: string,
    lastName: string,
    postalCode: string
  ) {
    await this.firstNameField.fill(firstName);
    await this.lastNameField.fill(lastName);
    await this.postalCodeField.fill(postalCode);
  }

  async continueCheckout() {
    await this.continueButton.click();
}

  async completePurchase() {
    await this.finishButton.click();
  }
}
