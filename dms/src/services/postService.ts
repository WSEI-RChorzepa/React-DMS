import * as Service from "./genericService";
import { Response } from "./types";
import { IPost } from "models";

export const getPostsByUserId = async (userId: number): Promise<Response<IPost[]>> => Service.byQuery<IPost[]>("posts", `?userId=${userId}`);
