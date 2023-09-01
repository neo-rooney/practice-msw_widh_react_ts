import { rest } from "msw";
import people from "./dummy.json";

const baseUrl = process.env.REACT_APP_API_BASE_URL;

export const handlers = [
  rest.get(`${baseUrl}/people`, async (req, res, ctx) => {
    await sleep(200);

    return res(ctx.status(200), ctx.json(people));
  }),

  rest.post(`${baseUrl}/people`, async (req, res, ctx) => {
    await sleep(200);
    people.push({
      id: "345",
      name: "son",
      country: "asia",
      lang: "php",
    });

    return res(ctx.status(201), ctx.json(people));
  }),
];

async function sleep(timeout: number) {
  return new Promise((resolve) => {
    setTimeout(resolve, timeout);
  });
}
