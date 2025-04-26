import { test, expect } from '@playwright/test';

test.describe("FRONT PAGE", () => {
    test.beforeEach(async ({page}) => {
      await page.goto('https://thriving-duckanoo-3d0681.netlify.app/')
    })
    test("API TEST", async({page, request}) => {
      const response = await request.get('https://northcoders-project-week-app.onrender.com/api/articles');
      
      // Check the status code
      expect(response.status()).toBe(200);
    
      const data = await response.json();
    
      // Check that articles exist and have expected structure
      expect(Array.isArray(data.articles)).toBe(true);
      expect(data.articles.length).toBeGreaterThan(0);
    
      const article = data.articles[0];
      expect(article).toHaveProperty('title');
      expect(article).toHaveProperty('author');
      expect(article).toHaveProperty('article_id');
    })
  })