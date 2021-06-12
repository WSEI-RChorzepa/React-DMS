import * as Service from "./genericService";
import { Response } from "./types";
import { IComment } from "models";

export const getPosts = async (): Promise<Response<IComment[]>> => Service.all<IComment[]>("comments");
