import { Locator, Page } from "@playwright/test";
export class WidgitPage {
  readonly page: Page;
  readonly progressBarLink: Locator;
  readonly startButton: Locator;
  readonly toolTipLink: Locator;
  readonly toolTipButton: Locator;
  readonly toolTipText: Locator;

  constructor(page: Page) {
    this.page = page;
    this.progressBarLink = page.getByText("Progress Bar");
    this.startButton = page.getByText("Start");
    this.toolTipLink = page.getByText("Tool Tips");
    this.toolTipButton = page.locator("#toolTipButton");
    this.toolTipText = page.locator("#buttonToolTip");
  }

  async clickProgressBarLink() {
    await this.progressBarLink.click();
  }

  async clickStartButton() {
    await this.startButton.click();
  }

  async clickToolTipLink() {
    await this.toolTipLink.click();
  }

  async hoverOverButton() {
    await this.toolTipButton.hover();
  }

  async getToolTipText() {
    const tooltipTxt = await this.toolTipText.allTextContents();
    return tooltipTxt;
  }
}
