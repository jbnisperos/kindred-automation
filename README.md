# SauceDemo E2E Purchase Automation

Successful purchase flow on [SauceDemo](https://www.saucedemo.com/inventory.html) using Playwright to ensure a smooth purchase process.

---

## Objective
Test the successful purchase of any product on SauceDemo, validating the flow from login to order confirmation.

---

## Scenarios Covered
- **Login** with `standard_user`
- **Select and add a product** to the cart
- **Verify product details** in the cart
- **Proceed to checkout**
- **Complete purchase** and confirm the order

---

## Installation
1. Clone the repository:
    ```bash
    git clone https://github.com/jbnisperos/kindred-automation
    cd kindred-automation
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Create a `.env` file:
    ```
    USERNAME=standard_user
    PASSWORD=secret_sauce
    ```

---

## Running the Tests
- Run all tests in headless mode:
    ```bash
    npm test
    ```

- Run tests with an HTML report:
    ```bash
    npm run test:report
    ```

- Run tests with a browser UI (headed mode):
    ```bash
    npm run test:headed
    ```

---

## Test Reports
HTML reports are generated in the `playwright-report` folder.  
To view the report:
```bash
npm run report
