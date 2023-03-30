import {test} from "../fixture/testFixture";
import testData from "../data/testDataContactForm.json";

test('Verify title of the Contact us Page', async({ contactUsPage} ) => {
  await contactUsPage.verifyTitleOfThePage();
});

test("Submit form and verify success message", async({ contactUsPage }) => {
  await contactUsPage.populateNameAndEmail(testData.tesstdata.validData.name, testData.tesstdata.validData.email);
  await contactUsPage.populateSubjectAndMessage(testData.tesstdata.validData.subject, testData.tesstdata.validData.message);
  await contactUsPage.verifySuccessMessage();
});
