import { IEntity } from "types";
import { Response } from "./types";
import { buildUrl, GET } from "./http";

const url = buildUrl("https://jsonplaceholder.typicode.com");

export const all = async <T extends IEntity>(endpoint: string): Promise<Response<T>> => {
  return await GET<T>(url(endpoint));
};

export const byId = async <T extends IEntity>(endpoint: string, id: number): Promise<Response<T>> => {
  return await GET<T>(url(`${endpoint}/${id}`));
};

export const byQuery = async <T extends IEntity>(endpoint: string, query: string): Promise<Response<T>> => {
  return await GET<T>(url(`${endpoint}/${query}`));
};
