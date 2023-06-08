const { test ,expect} = require('@playwright/test');
test('TC_01: Verify Email Address / Login Id and Password field is visible on login page',async ({page})=>{
  await page.goto('https://www.testyou.in/Login.aspx');
  expect(page.locator('#ctl00_CPHContainer_txtUserLogin').isVisible);
  expect(page.locator('#ctl00_CPHContainer_txtPassword').isVisible);
  await page.close();
})

test('TC_02: Verify Login button is visible and clickable on login page',async ({page})=>{

  await page.goto('https://www.testyou.in/Login.aspx');
  await page.getByRole('button', { name: 'Login' }).isVisible();
  await page.getByRole('button', { name: 'Login' }).isEnabled();
  await page.close();
})

test('TC_03: Verify user is unable to login with invalid credentials', async ({ page }) => {
   //launch the url
 await page.goto('https://www.testyou.in/Login.aspx');
 await page.locator('#ctl00_CPHContainer_txtUserLogin').fill('lalitgarg2041@gmail.com');
 await page.locator('#ctl00_CPHContainer_txtPassword').fill('dhiru@12');
 await page.getByRole('button', { name: 'Login' }).click();
 //assertion
 await expect(page.locator(".lblboxerror")).toHaveText('Userid or Password did Not Match !!');
 await expect(page).toHaveURL('https://www.testyou.in/Login.aspx');
 //close the browser
 await page.close();

})

test('TC_04: Verify validation message on login with empty loginid and password fields', async ({ page }) => {
 //launch the url
await page.goto('https://www.testyou.in/Login.aspx');
await page.locator('#ctl00_CPHContainer_txtUserLogin').clear;
await page.locator('#ctl00_CPHContainer_txtPassword').clear;
await page.getByRole('button', { name: 'Login' }).click();
//assertion
await expect(page.locator("#ctl00_CPHContainer_valsAll")).toHaveText('Enter Login Id , Enter Login Password ,');
await expect(page.locator(".lblboxerror")).toHaveText('Userid or Password did Not Match !!');
await expect(page).toHaveURL('https://www.testyou.in/Login.aspx');
//close the browser
await page.close();

})

test('TC_05: Verify user is able login wth valid credentials', async ({ page }) => {
 //launch the url
await page.goto('https://www.testyou.in/Login.aspx');
await page.locator('#ctl00_CPHContainer_txtUserLogin').fill('lalitgarg2041@gmail.com');
 await page.locator('#ctl00_CPHContainer_txtPassword').fill('Xyzc@1208');
 await page.getByRole('button', { name: 'Login' }).click();
//assertion
// I have put assertion to not have current url, as i dont have valid credentials, I am unable to login w=in application.
await expect(page).not.toHaveURL('https://www.testyou.in/Login.aspx');
//close the browser
await page.close();

})

test('TC_06: Verify user is navigated to forgot password page on clicking forgot password link', async ({ page }) => {
 await page.goto('https://www.testyou.in/Login.aspx');
 await page.getByRole('link', { name: 'Forgot Password ?' }).click();
// assertion for url change to forgot password
 await expect(page).toHaveURL('https://www.testyou.in/ForgetPassword.aspx');

//close the browser
await page.close();

})

test('TC_07: Verify user is message , userid field and submit button on Forgot password page', async ({ page }) => {
 await page.goto('https://www.testyou.in/Login.aspx');
 await page.getByRole('link', { name: 'Forgot Password ?' }).click();
// assertion for url change to forgot password
 await expect(page).toHaveURL('https://www.testyou.in/ForgetPassword.aspx');

 expect(page.getByRole('link', { name: 'Forgot Password ?' }).isVisible);
 expect(page.getByRole('button', { name: 'Submit' }).isVisible);

//close the browser
await page.close();

})

test('TC_08: Verify validation message on clicking Submit button with empty userid fields on forgot password page', async ({ page }) => {
 await page.goto('https://www.testyou.in/Login.aspx');
 await page.getByRole('link', { name: 'Forgot Password ?' }).click();
// assertion for url change to forgot password
 await expect(page).toHaveURL('https://www.testyou.in/ForgetPassword.aspx');

 await page.getByRole('button', { name: 'Submit' }).click();

 // assertion validation message and * for email id empty field
 await expect(page.locator("#ctl00_CPHContainer_vasResetPass>ul>li")).toHaveText('Enter LoginId or EmailId !');
 await expect(page.locator("#ctl00_CPHContainer_rfvEmailId")).toHaveText('*');
//close the browser
await page.close();

})

test('TC_09: Verify validation message on clicking Submit button with invalid userid fields on forgot password page', async ({ page }) => {
  await page.goto('https://www.testyou.in/Login.aspx');
  await page.getByRole('link', { name: 'Forgot Password ?' }).click();
 // assertion for url change to forgot password
  await expect(page).toHaveURL('https://www.testyou.in/ForgetPassword.aspx');
 
  await page.getByRole('textbox', { name: 'Write Your TestYou LoginId or EmailId Here !' }).fill('lalitgarg2041@gmail.com');
  await page.getByRole('button', { name: 'Submit' }).click();
 
  // assertion validation message and * for email id empty field
  await expect(page.locator("#ctl00_CPHContainer_lblOutput")).toHaveText('Incorrect Email-ID / LoginId OR Your Account Not Activated Please do activate your account !');
 //close the browser
 await page.close();
 
 })

test('TC_10: Verify Term and Conditions link is available on login page and user is able to click on it', async ({ page }) => {
  await page.goto('https://www.testyou.in/Login.aspx');
  await page.getByRole('link', { name: 'Terms & Conditions' }).click();
});

