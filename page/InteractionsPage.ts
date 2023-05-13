import { Locator, Page } from "@playwright/test";

export class InteractionsPage {
  readonly page: Page;
  readonly droppableLink: Locator;
  readonly dragItm: Locator;
  readonly dropLoc: Locator;

  constructor(page: Page) {
    this.page = page;
    this.droppableLink = page.getByText("Droppable");
    this.dragItm = page.locator("(//*[@id='draggable'])[1]");
    this.dropLoc = page.locator("//*[@id='droppable']");
  }

  async clickDroppableLink() {
    await this.droppableLink.click();
  }
  async dragAndDrop() {
    await this.dragItm.first().dragTo(this.dropLoc.first());
    // await this.dragItm.first().hover();
    // await this.page.mouse.down();
    // await this.dropLoc.first().hover();
    // await this.page.mouse.up();
  }

  async getTextAftDrop() {
    const text = await this.dropLoc.allTextContents();
    return text;
  }
}
