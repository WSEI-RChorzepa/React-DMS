import { Response } from "./types";
import { buildUrl, GET } from "./http";
import { IUser, IPhoto } from "models";

const url = buildUrl("https://jsonplaceholder.typicode.com");

export const getUsersData = async (): Promise<Response<IUser[]>> => {
  return await GET<IUser[]>(url("users"));
};

export const getUserData = async (userId: number): Promise<Response<IUser>> => {
  return await GET<IUser>(url(`users/${userId}`));
};

export const getUserPhoto = async (userId: number): Promise<Response<IPhoto>> => {
  return await GET<IPhoto>(url(`photos/${userId}`));
};
