import { test as base } from '@playwright/test';
import { ContactUsPage } from '../pages/ContactUsPage';

// Declare the types of your fixtures.
export type MyFixtures = {
    contactUsPage: ContactUsPage;
};

export const test = base.extend<MyFixtures>({

    contactUsPage: async ({ page }, use) => {
      const contactUsPage = new ContactUsPage(page);
      await contactUsPage.goto();
      await use(contactUsPage);
    }
});
    
 