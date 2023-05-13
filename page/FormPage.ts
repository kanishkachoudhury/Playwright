import { Locator, Page } from "@playwright/test";

export class FormPage {
  readonly page: Page;
  readonly practiceFormLink: Locator;
  readonly firstName: Locator;
  readonly lastName: Locator;
  readonly email: Locator;
  readonly gender: Locator;
  readonly mobile: Locator;
  readonly DOB: Locator;
  readonly subject: Locator;
  readonly hobbies: Locator;
  readonly address: Locator;
  readonly state: Locator;
  readonly city: Locator;
  readonly fileBtn: string;
  readonly submitButton: Locator;
  readonly tbelement: Locator;

  constructor(page: Page) {
    this.page = page;
    this.practiceFormLink = page.getByText("Practice Form");
    this.firstName = page.locator("#firstName");
    this.lastName = page.locator("#lastName");
    this.email = page.locator("#userEmail");
    this.gender = page.getByText("Male", { exact: true });
    this.mobile = page.locator("#userNumber");
    this.DOB = page.locator("#dateOfBirthInput");
    this.hobbies = page.getByText("Reading", { exact: true });
    this.subject = page.locator("#subjectsContainer");
    this.address = page.locator("#currentAddress");
    this.state = page.getByText("Select State");
    this.city = page.getByText("Select City");
    this.fileBtn = "#uploadPicture";
    this.submitButton = page.locator("#submit");
    this.tbelement = page.locator("table td:nth-child(2)");
  }

  async selectFiledValue(loc: Locator, val: string) {
    //await this.page.keyboard.press("body", "Control+ -");
    //await this.page.keyboard.press("Control+-");
    //await this.page.evaluate("document.body.style.zoom=0.6");
    await this.page.evaluate("document.body.style.transform = 'scale(0.75)'");
    await loc.click();
    await this.page.keyboard.insertText(val);
    await this.page.keyboard.press("ArrowDown");
    await this.page.keyboard.press("Enter");
  }

  async checkRadioCB(val: string) {
    let loc: Locator = this.page.getByText(val, { exact: true });
    loc.click();
  }

  async clickPracticeFormLink() {
    await this.practiceFormLink.click();
  }

  async fillForm(
    fname: string,
    lname: string,
    email: string,
    gender: string,
    mobile: string,
    dob: string,
    address: string,
    file: string,
    subject: string,
    hobbies: string,
    state: string,
    city: string
  ) {
    await this.firstName.fill(fname);
    await this.lastName.fill(lname);
    await this.email.fill(email);
    await this.checkRadioCB(gender);
    await this.mobile.fill(mobile);
    await this.checkRadioCB(hobbies);
    await this.DOB.fill(dob);
    await this.address.click();
    await this.address.fill(address);
    await this.page.setInputFiles(this.fileBtn, file);
    await this.selectFiledValue(this.subject, subject);
    await this.selectFiledValue(this.state, state);
    await this.selectFiledValue(this.city, city);
    await this.submitButton.click();
  }
  async readData() {
    const texts = await this.tbelement.allTextContents();
    return texts;
  }
}
