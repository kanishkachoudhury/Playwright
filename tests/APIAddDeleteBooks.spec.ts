import { test, expect, request } from "@playwright/test";
import apiUserdata from "../data/mainApiUserData.json";
import apiMsg from "../data/apiMsg.json";
import ISBNData from "../data/ISBNData.json";

let apiToken: string;

test.beforeAll(async ({ request }) => {
  let _response = await request.post("/Account/v1/GenerateToken", {
    data: {
      userName: apiUserdata.userName,
      password: apiUserdata.password,
    },
  });
  const res = await _response.json();
  apiToken = res.token;
});

test("POST: Add Books", async ({ request }) => {
  let _response = await request.post("/BookStore/v1/Books", {
    data: {
      userId: apiUserdata.userID,
      collectionOfIsbns: [
        {
          isbn: ISBNData.isbn,
        },
      ],
    },
    headers: {
      Authorization: "Bearer " + apiToken,
    },
  });
  const res = await _response.json();
  await expect(_response).toBeOK();
  expect(res.books[0].isbn).toBe(ISBNData.isbn);
});

test("POST: ISBN not in list", async ({ request }) => {
  let _response = await request.post("/BookStore/v1/Books", {
    data: {
      userId: apiUserdata.userID,
      collectionOfIsbns: [
        {
          isbn: "11111111111",
        },
      ],
    },
    headers: {
      Authorization: "Bearer " + apiToken,
    },
  });
  const res = await _response.json();
  expect(res.code).toBe(apiMsg.addBooks.code);
  expect(res.message).toBe(apiMsg.addBooks.message);
});

test("DELETE: Books from User", async ({ request }) => {
  let _response = await request.delete("/BookStore/v1/Book", {
    data: {
      isbn: ISBNData.isbn,
      userId: apiUserdata.userID,
    },
    headers: {
      Authorization: "Bearer " + apiToken,
    },
  });
  await expect(_response).toBeOK();
});
