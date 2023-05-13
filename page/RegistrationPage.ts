import { Locator, Page } from "@playwright/test";

export class RegistrationPage {
  readonly page: Page;
  readonly firstName: Locator;
  readonly lastName: Locator;
  readonly email: Locator;
  readonly age: Locator;
  readonly salary: Locator;
  readonly department: Locator;
  readonly submitButton: Locator;
  constructor(page: Page) {
    this.page = page;
    this.firstName = page.locator("#firstName");
    this.lastName = page.locator("#lastName");
    this.email = page.getByPlaceholder("name@example.com");
    this.age = page.getByPlaceholder("Age");
    this.salary = page.getByPlaceholder("Salary");
    this.department = page.getByPlaceholder("Department");
    this.submitButton = page.getByText("Submit");
  }

  async fillForm(
    firstname: string,
    lastname: string,
    email: string,
    age: string,
    salary: string,
    department: string
  ) {
    await this.firstName.fill(firstname);
    await this.lastName.fill(lastname);
    await this.email.fill(email);
    await this.age.fill(age);
    await this.salary.fill(salary);
    await this.department.fill(department);
    await this.submitButton.click();
  }

  async updateFirstName(fname: string) {
    await this.firstName.clear();
    await this.firstName.click();
  }

  async updateLastName(lastname: string) {
    await this.lastName.clear();
    await this.lastName.fill(lastname);
  }

  async clicksubmit() {
    await this.submitButton.click();
  }
}
