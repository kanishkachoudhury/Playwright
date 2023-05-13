import { expect, Locator, Page } from "@playwright/test";

export class ElementPage {
  readonly page: Page;
  readonly webLink: Locator;
  readonly addButton: Locator;
  readonly search: Locator;
  readonly table: Locator;
  readonly editSecButton: Locator;
  readonly brokenImageLink: Locator;

  constructor(page: Page) {
    this.page = page;
    this.webLink = page.locator("(//*[@id='item-3'])[1]");
    this.brokenImageLink = page.locator("(//*[@id='item-6'])[1]");
    this.addButton = page.locator("#addNewRecordButton");
    this.search = page.getByPlaceholder("Type to search");
    this.table = this.page.locator(
      "//*[@id='app']/div/div/div[2]/div[2]/div[2]/div[3]/div[1]/div[2]/div[1]"
    );
    this.editSecButton = this.page.locator("#edit-record-2");
  }

  async clickWebLink() {
    await this.webLink.click();
  }
  async clickBrokenInageLink() {
    await this.brokenImageLink.click();
  }
  async clickAddButton() {
    await this.addButton.click();
  }

  async getTableData(email: string) {
    await this.search.fill(email);
    const texts = await this.table.allInnerTexts();
    let _data = texts[0].split("\n");
    return _data;
  }

  async clickEdit() {
    await this.editSecButton.click();
  }
}

// const name = this.page.locator(
//   '//*[@id="app"]/div/div/div[2]/div[2]/div[2]/div[3]/div[1]/div[2]/div[1]/div/div[2]'
// );
// console.log(await name.allTextContents());
