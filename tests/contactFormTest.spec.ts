import test, { expect } from "@playwright/test";
import { ContactUsPage } from "../pages/ContactUsPage";
import testData from "../data/testDataContactForm.json";

test('Verify title of the Contact us Page', async({page}) => {
  const contactUsPage = new ContactUsPage(page);
  await contactUsPage.goto();
  await contactUsPage.verifyTitleOfThePage();
});

test("Submit form and verify success message", async({page}) => {
  const contactUsPage = new ContactUsPage(page);
  await contactUsPage.goto();
  await contactUsPage.populateNameAndEmail(testData.tesstdata.validData.name, testData.tesstdata.validData.email);
  await contactUsPage.populateSubjectAndMessage(testData.tesstdata.validData.subject, testData.tesstdata.validData.message);
  await contactUsPage.verifySuccessMessage();
});
