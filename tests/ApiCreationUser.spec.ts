import { test, expect, request } from "@playwright/test";
import apiUserdata from "../data/apiUserData.json";
import apiMsg from "../data/apiMsg.json";

test("POST: Create User", async ({ request }) => {
  let user = apiUserdata.userName + "_" + Math.floor(Math.random() * 999);
  let _response = await request.post("/Account/v1/User", {
    data: {
      userName: user,
      password: apiUserdata.password,
    },
  });
  const res = await _response.json();
  expect(await _response.ok()).toBeTruthy();
  expect(res.username).toBe(user);
});

test("POST: Create User Error", async ({ request }) => {
  let _response = await request.post("/Account/v1/User", {
    data: {
      userName: apiUserdata.userName,
      password: "1",
    },
  });
  const res = await _response.json();
  expect(res.code).toBe(apiMsg.userCreation.errorCode);
  expect(res.message).toBe(apiMsg.userCreation.userError);
});
