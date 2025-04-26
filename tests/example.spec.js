import { test, expect } from '@playwright/test';

test.describe("Contact Page", () => {
  test.beforeEach(async ({page}) =>{
    await page.goto('https://thriving-duckanoo-3d0681.netlify.app/contact')
  })

  test("Title and nav links", async({page, request}) => {
  
    //check title is correct
    await expect(page).toHaveTitle("Vite + React");

    //check nav links
        const links = [
          "https://thriving-duckanoo-3d0681.netlify.app/",
          "https://thriving-duckanoo-3d0681.netlify.app/contact",
          "https://thriving-duckanoo-3d0681.netlify.app/about"
        ];
      
        for (const link of links) {
          const response = await request.get(link);
          expect(response.status()).toBe(200);
        }
})

test("Form Validation", async ({page}) => {
  await page.click('button[type="submit"]');

  await expect(page.locator('p.error-message')).toHaveText([
    'Name is required.',
    'Email is required.',
    'Message is required.'
  ]);
  
  })

  test("Form submit test", async({page}) => {
    await page.fill('#fname', 'Aaron Smith');
    await page.fill('#email', 'aaron@example.com');
    await page.fill('#message', 'This is a test message.');
  
    await page.click('button[type="submit"]');
    await expect(page.locator('text=Your message has been sent successfully!')).toBeVisible();
  })
})




