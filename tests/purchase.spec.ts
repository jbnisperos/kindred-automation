import { test, expect } from "@playwright/test";
import { login } from "../helper/login";
import { InventoryPage } from "../pages/inventoryPage";
import { CartPage } from "../pages/cartPage";
import { CheckoutPage } from "../pages/checkoutPage";
import { products } from "../data/products";
import logger from "../helper/logger";

const testData = {
  firstName: "Ervin",
  lastName: "Test",
  postalCode: "2141",
};

const productList = [
  "backpack",
  "tshirt",
  "onesie",
  "bikelight",
  "jacket",
  "redshirt",
];

test.beforeEach(async ({ page }) => {
  logger.info("Starting new test execution...");
  await login(page);
  await expect(page).toHaveURL(/inventory/);
  logger.info("Navigated to the home page.");
});

test("Successful purchase Sauce Labs Backpack", async ({ page }) => {
  const inventoryPage = new InventoryPage(page);
  const cartPage = new CartPage(page);
  const checkoutPage = new CheckoutPage(page);

  // Pick a random product
  const selectedProduct = productList[Math.floor(Math.random() * productList.length)];
  logger.info(`Selected product: ${selectedProduct}`);
  const product = products[selectedProduct]; 
  // Add an item to the cart
  await inventoryPage.addToCart(selectedProduct);
  await inventoryPage.goToCart();
  await expect(page).toHaveURL(/cart/);

  // Verify cart item is correct
  await expect(page.getByText(product.name, { exact: true })).toBeVisible();
  logger.info(`Verified cart contains: ${product.name}`);
  await expect(page.getByText(product.description)).toBeVisible();
  await expect(page.getByText(product.price)).toBeVisible();
  const quantity = await cartPage.getItemQuantity();
  expect(quantity).toBe("1");

  // Proceed to checkout
  await cartPage.proceedToCheckout();
  await checkoutPage.fillCheckoutDetails(
    testData.firstName,
    testData.lastName,
    testData.postalCode
  );
  await checkoutPage.continueCheckout();

  // Verify checkout overview
  await expect(page.getByText(product.name, { exact: true })).toBeVisible();
  await expect(page.getByText(product.description)).toBeVisible();
  await expect(page.getByText(product.price).nth(0)).toBeVisible();
  expect(quantity).toBe("1");

  // Verify payment and shipping details
  await expect(checkoutPage.paymentInfoLabel).toBeVisible();
  await expect(checkoutPage.paymentInfoValue).toBeVisible();
  await expect(checkoutPage.shippingInfoLabel).toBeVisible();
  await expect(checkoutPage.shippingInfoValue).toBeVisible();
  await expect(checkoutPage.totalInfoLabel).toBeVisible();
  await expect(checkoutPage.subtotalLabel).toBeVisible();
  await expect(checkoutPage.taxLabel).toBeVisible();
  await expect(checkoutPage.totalLabel).toBeVisible();

  await checkoutPage.completePurchase();

  // Verify order completion
  await expect(checkoutPage.checkmarkIcon).toBeVisible();
  await expect(checkoutPage.orderConfirmationHeader).toHaveText(
    "Thank you for your order!"
  );
  logger.info("Order confirmation verified.");
  await expect(checkoutPage.orderConfirmationMessage).toHaveText(
    "Your order has been dispatched, and will arrive just as fast as the pony can get there!"
  );

  await checkoutPage.backToHomeButton.click();
  await expect(page).toHaveURL(/inventory/);
});
