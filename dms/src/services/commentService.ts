import { Response } from "./types";
import { buildUrl, GET } from "./http";
import { IComment } from "models";

const url = buildUrl("https://jsonplaceholder.typicode.com");

export const getPosts = async (): Promise<Response<IComment[]>> => {
  return await GET<IComment[]>(url("comments"));
};
