const { test, expect } = require('@playwright/test');

test('invalid credentials', async ({ page }) => {
    //lunch the url
  await page.goto('https://www.testyou.in/Login.aspx');
  await page.locator('#ctl00_CPHContainer_txtUserLogin').fill('dhirendra56@gmail.com');
  await page.locator('#ctl00_CPHContainer_txtPassword').fill('dhiru@12');
  await page.getByRole('button', { name: 'Login' }).click();
  //assertion
  await expect(page).toHaveURL('https://www.testyou.in/Login.aspx');
  //close the browser
  await page.close();

});

test('successful login', async ({ page }) => {
  await page.goto('https://www.testyou.in/Login.aspx');

  await page.locator('#ctl00_CPHContainer_txtUserLogin').fill('dhirendra56@gmail.com');
  await page.locator('#ctl00_CPHContainer_txtPassword').fill('dhiru@12');
  await page.getByRole('button', { name: 'Login' }).click();
  //assertion
  await expect(page).toHaveURL('https://www.testyou.in/Login.aspx');

  // Wait for the page to load after login
  await page.waitForLoadState();

  // Assert that login is successful by checking for a specific element on the page
 // const welcomeMessage = await page.textContent('.welcome-message');
  //expect(welcomeMessage).toContain('Welcome, username');
  //close the browser
  await page.close();
});

test('login with invalid credentials', async ({ page }) => {
  await page.goto('https://www.testyou.in/Login.aspx');

  await page.locator('#ctl00_CPHContainer_txtUserLogin').fill('dhirendra56@gmail.com');
  await page.locator('#ctl00_CPHContainer_txtPassword').fill('dhiru@12');
  await page.getByRole('button', { name: 'Login' }).click();
  //assertion
  await expect(page).toHaveURL('https://www.testyou.in/Login.aspx')

  // Wait for the page to load after login
  await page.waitForLoadState();

  // Assert that an error message is displayed on the page
  //const errorMessage = await page.textContent('.error-message');
  //expect(errorMessage).toContain('Invalid credentials');
  //close the browser
  await page.close();

});

test('login with empty fields', async ({ page }) => {
  await page.goto('https://www.testyou.in/Login.aspx');

  // Submit the login form without filling any fields
  await page.getByRole('button', { name: 'Login' }).click();

  // Wait for the page to load after login
  await page.waitForLoadState();

  // Assert that an error message is displayed for empty fields
  //const errorMessage = await page.textContent('.error-message');
 // expect(errorMessage).toContain('Please enter username and password');
  //close the browser
  await page.close();
});
