import { test, expect } from "@playwright/test";
import { HomePage } from "../page/HomePage";
import { WidgitPage } from "../page/WidgitPage";

test("Verify Progress Bar", async ({ page }) => {
  const HP = new HomePage(page);
  const WP = new WidgitPage(page);
  await page.goto("https://demoqa.com/");
  await HP.gotoWidgitPage();
  await WP.clickProgressBarLink();
  await WP.clickStartButton();
  await expect(page.getByText("Reset")).toBeVisible();
});
