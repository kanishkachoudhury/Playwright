import { test, expect } from "@playwright/test";
import { HomePage } from "../page/HomePage";
import { FormPage } from "../page/FormPage";
import formData from "../data/formUser.json";

test("User can add data in the table", async ({ page }) => {
  const HP = new HomePage(page);
  const FP = new FormPage(page);
  await page.goto("https://demoqa.com/");
  await HP.gotoformpage();
  await FP.clickPracticeFormLink();
  await FP.fillForm(
    formData.firstname,
    formData.lastname,
    formData.email,
    formData.gender,
    formData.mobile,
    formData.dob,
    formData.Address,
    formData.Picture,
    formData.Subjects,
    formData.Hobbies,
    formData.State,
    formData.City
  );
  const data = await FP.readData();
  expect(data[0]).toBe(formData.firstname + " " + formData.lastname);
  expect(data[1]).toBe(formData.email);
  expect(data[2]).toBe(formData.gender);
  expect(data[3]).toBe(formData.mobile);
  expect(data[4]).toBe(formData.viewDob);
  expect(data[5]).toBe(formData.Subjects);
  expect(data[6]).toBe(formData.Hobbies);
  expect(formData.Picture).toContain(data[7]);
  expect(data[8]).toBe(formData.Address);
  expect(data[9]).toBe(formData.State + " " + formData.City);
});
