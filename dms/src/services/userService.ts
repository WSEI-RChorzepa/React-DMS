import { Response } from "./types";
import { IUser, IPhoto } from "models";

import * as Service from "./genericService";

export const getUsersData = async (): Promise<Response<IUser[]>> => Service.all<IUser[]>("users");

export const getUserData = async (userId: number): Promise<Response<IUser>> => Service.byId("users", userId);

export const getUserPhoto = async (userId: number): Promise<Response<IPhoto>> => Service.byId("photos", userId);
