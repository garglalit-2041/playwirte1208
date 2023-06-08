const { test, expect } = require('@playwright/test');

test('click on terms and condition', async ({ page }) => {
  await page.goto('https://www.testyou.in/Login.aspx');
  await page.getByRole('link', { name: 'Terms & Conditions' }).click();
    // Perform assertions on the Terms and Conditions page
    await page.waitForLoadState();
    // Assert that the Terms and Conditions page is loaded
    //const pageTitle = await page.title();
    //expect(pageTitle).toContain('Terms and Conditions');

});

test('clickable on terms and condition or not', async ({ page }) => {
    await page.goto('https://www.testyou.in/Login.aspx');
    await page.getByRole('link', { name: 'Terms & Conditions' }).isEnabled();
    expect(isClickable).toBe(true);
});