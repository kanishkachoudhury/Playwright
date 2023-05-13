import { test, expect, Locator } from "@playwright/test";
import { HomePage } from "../page/HomePage";
import { ElementPage } from "../page/ElementPage";
import { RegistrationPage } from "../page/RegistrationPage";
import userdata from "../data/userData.json";
import updateUser from "../data/userUpdate.json";

test("Verify Broken Image", async ({ page }) => {
  const HP = new HomePage(page);
  const EP = new ElementPage(page);
  const RP = new RegistrationPage(page);
  await page.goto("https://demoqa.com/");
  await HP.gotoelementpage();
  await EP.clickBrokenInageLink();
  const brokenImg = page.locator(
    "//*[@id='app']/div/div/div[2]/div[2]/div[2]/img[2]"
  );
  await expect(brokenImg).toBeVisible();
});
