import { test, expect } from "@playwright/test";
import { HomePage } from "../page/HomePage";
import { InteractionsPage } from "../page/InteractionsPage";

test("Verify Tool Tip", async ({ page }) => {
  const HP = new HomePage(page);
  const IP = new InteractionsPage(page);

  await page.goto("https://demoqa.com/");
  await HP.gotoInteractionspage();
  await IP.clickDroppableLink();
  await IP.dragAndDrop();
  const text = await IP.getTextAftDrop();
  expect(text[0].trim()).toBe("Dropped!");
});
