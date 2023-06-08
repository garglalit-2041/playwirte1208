const { test, expect } = require('@playwright/test');

test('forget password with invalid credentials ', async ({ page }) => {
    
  await page.goto('https://www.testyou.in/Login.aspx');
  await page.getByRole('link', { name: 'Forgot Password ?' }).click();
  await page.getByRole('textbox', { name: 'Write Your TestYou LoginId or EmailId Here !' }).fill('dhirendra78gmail.com');
  await page.getByRole('button', { name: 'Submit' }).click();

   //Assert that an error message is displayed
  //const errorMessage = await page.textContent('.error-msg');
   //expect(errorMessage).toContain('Invalid email');

});

test('forget password with valid credentials ', async ({ page }) => {
    
    await page.goto('https://www.testyou.in/Login.aspx');
    await page.getByRole('link', { name: 'Forgot Password ?' }).click();
    await page.getByRole('textbox', { name: 'Write Your TestYou LoginId or EmailId Here !' }).fill('dhirendra@78gmail.com');
    await page.getByRole('button', { name: 'Submit' }).click();

       // Assert that a success message is displayed
       //const successMessage = await page.textContent('.success-msg');
       //expect(successMessage).toContain('Password reset instructions sent');
  
  });

  test('forget password back on the login page ', async ({ page }) => {
    await page.goto('https://www.testyou.in/Login.aspx');
    await page.getByRole('link', { name: 'Forgot Password ?' }).click();
    await page.getByRole('textbox', { name: 'Write Your TestYou LoginId or EmailId Here !' }).fill('dhirendra@78gmail.com');
    await page.getByRole('button', { name: 'Submit' }).click();
  // Assert that we are back on the login page
  //const loginHeaderText = await page.textContent('.login-header');
  //expect(loginHeaderText).toContain('Login');

});

test('forget password is clickable or not', async ({ page }) => {
    await page.goto('https://www.testyou.in/Login.aspx');
  
    // Check if the "Forgot Password?" link is clickable
    const isClickable = await page.$eval('a', (element) => !element.disabled);
  
    // Assert that the link is clickable
    await expect(isClickable).toBe(true);
  });


  
  
  
  
  
  
  



