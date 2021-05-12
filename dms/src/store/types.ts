import { IPhoto, IUser, IPostWithImage, ICommentWithOwner } from "models";

type Status = null | "pending" | "rejected" | "fulfilled";

interface IState {
  status: Status;
}

export interface IUserState extends IState {
  user: IUser | null;
  photo: IPhoto | null;
}

export interface IPostState extends IState {
  posts: IPostWithImage[] | [];
}

export interface ICommentState extends IState {
  comments: ICommentWithOwner[];
}
