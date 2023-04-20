import { expect } from "@playwright/test";
import { Locator, Page } from "playwright";

export class ContactUsPage{
    readonly page: Page;
    readonly nameField: Locator;
    readonly emailField: Locator;
    readonly subjectField: Locator;
    readonly messageField: Locator;
    readonly submitButton: Locator;
    readonly informationMessage: Locator;
    private successMessage: string = "Success! Your details have been submitted successfully.";
    private titleOfThePage: string = "Automation Exercise - Contact Us";

    constructor(page: Page){
        this.page = page;
        this.nameField = page.locator('input[name="name"]');
        this.emailField = page.locator('input[name="email"]');
        this.subjectField = page.locator('input[name="subject"]');
        this.messageField = page.locator('#message');
        this.submitButton = page.locator('input[name="submit"]');
        this.informationMessage = page.locator('div[class="status alert alert-success"]');
    }

    async goto() {
        await this.page.goto('https://automationexercise.com/contact_us');
    }

    async verifyTitleOfThePage(){
        const title = await this.page.title();
        await expect.soft(title).toEqual(this.titleOfThePage);
    }

    async populateNameAndEmail(name: string, email: string){
        // Start debugger
        //await this.page.pause();
        await this.nameField.fill(name);
        await this.emailField.fill(email);
    }

    async populateSubjectAndMessage(subject: string, message: string){
        await this.subjectField.fill(subject);
        await this.messageField.fill(message);
    }

    async verifySuccessMessage(){
        this.page.on('dialog', dialog => {
            console.log(`Dialog message: ${dialog.message()}`);
            dialog.accept().catch(() => { });
        });
        await this.submitButton.click();
        const messageInfo = await this.informationMessage.innerText();
        await console.log(messageInfo);
        await expect(messageInfo).toContain(this.successMessage);
    }

}