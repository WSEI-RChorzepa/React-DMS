import { Response } from "./types";
import { buildUrl, GET } from "./http";
import { IPost } from "models";

const url = buildUrl("https://jsonplaceholder.typicode.com");

export const getPosts = async (): Promise<Response<IPost[]>> => {
  return await GET<IPost[]>(url("/posts"));
};

export const getPostsByUserId = async (userId: number): Promise<Response<IPost[]>> => {
  return await GET<IPost[]>(url(`posts?userId=${userId}`));
};
