import * as Service from "./genericService";
import { Response } from "./types";
import { IPhoto } from "models";

export const getPhoto = async (id: number): Promise<Response<IPhoto>> => Service.byId<IPhoto>("photos", id);
