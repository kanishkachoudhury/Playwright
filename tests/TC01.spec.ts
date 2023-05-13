import { test, expect } from "@playwright/test";
import { HomePage } from "../page/HomePage";
import { ElementPage } from "../page/ElementPage";
import { RegistrationPage } from "../page/RegistrationPage";
import userdata from "../data/userData.json";
import updateUser from "../data/userUpdate.json";

test("User can add data in the table", async ({ page }) => {
  const HP = new HomePage(page);
  const EP = new ElementPage(page);
  const RP = new RegistrationPage(page);
  await page.goto("https://demoqa.com/");
  await HP.gotoelementpage();
  await EP.clickWebLink();
  await EP.clickAddButton();
  await RP.fillForm(
    userdata.firstname,
    userdata.lastname,
    userdata.email,
    userdata.age,
    userdata.salary,
    userdata.department
  );
  let data = await EP.getTableData(userdata.email);
  expect(data[0].trim()).toBe(userdata.firstname);
  expect(data[1]).toBe(userdata.lastname);
  expect(data[2]).toBe(userdata.age);
  expect(data[3]).toBe(userdata.email);
  expect(data[4]).toBe(userdata.salary);
  expect(data[5]).toBe(userdata.department);
});

test("Update name", async ({ page }) => {
  const EP = new ElementPage(page);
  const RP = new RegistrationPage(page);
  const HP = new HomePage(page);

  await page.goto("https://demoqa.com/");
  await HP.gotoelementpage();
  await EP.clickWebLink();
  EP.clickEdit();
  RP.updateFirstName(updateUser.firstname);
  RP.updateLastName(updateUser.lastname);
  RP.clicksubmit();
  let data = await EP.getTableData(updateUser.email);
  expect(data[0].trim()).toBe(updateUser.firstname);
  expect(data[1]).toBe(updateUser.lastname);
});
