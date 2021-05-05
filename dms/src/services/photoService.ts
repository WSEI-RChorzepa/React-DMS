import { Response } from "./types";
import { buildUrl, GET } from "./http";
import { IPhoto } from "models";

const url = buildUrl("https://jsonplaceholder.typicode.com");

export const getPhoto = async (id: number): Promise<Response<IPhoto>> => {
  return await GET<IPhoto>(url(`photos/${id}`));
};
