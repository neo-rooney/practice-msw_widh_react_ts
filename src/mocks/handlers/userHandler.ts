import { rest } from "msw";
import people from "../dummy.json";
import { sleep } from "../utils";

const getUsers = rest.get(`*/people`, async (req, res, ctx) => {
  await sleep(200);

  return res(ctx.status(200), ctx.json(people));
});

const AddUser = rest.post(`*/people`, async (req, res, ctx) => {
  await sleep(200);
  people.push({
    id: "345",
    name: "son",
    country: "asia",
    lang: "php",
  });

  return res(ctx.status(201), ctx.json(people));
});

const userHandlers = { getUsers, AddUser };

export default userHandlers;
