import { Locator, Page } from "@playwright/test";

export class HomePage {
  readonly page: Page;
  readonly elementLink: Locator;
  readonly formlink: Locator;
  readonly widgetLink: Locator;
  readonly interactionsLink: Locator;

  constructor(page: Page) {
    this.page = page;
    this.elementLink = page.locator("//h5[text()='Elements']");
    this.formlink = page.locator("//h5[text()='Forms']");
    this.widgetLink = page.locator("//h5[text()='Widgets']");
    this.interactionsLink = page.locator("//h5[text()='Interactions']");
  }

  async gotoelementpage() {
    await this.elementLink.click();
  }

  async gotoformpage() {
    await this.formlink.click();
  }

  async gotoWidgitPage() {
    await this.widgetLink.click();
  }

  async gotoInteractionspage() {
    await this.interactionsLink.click();
  }
}
