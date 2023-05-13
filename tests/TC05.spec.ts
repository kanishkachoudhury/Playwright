import { test, expect } from "@playwright/test";
import { HomePage } from "../page/HomePage";
import { WidgitPage } from "../page/WidgitPage";

test("Verify Tool Tip", async ({ page }) => {
  const HP = new HomePage(page);
  const WP = new WidgitPage(page);

  await page.goto("https://demoqa.com/");
  await HP.gotoWidgitPage();
  await WP.clickToolTipLink();
  await WP.hoverOverButton();
  let tooltipText = await WP.getToolTipText();
  expect(tooltipText[0].trim()).toBe("You hovered over the Button");
});
