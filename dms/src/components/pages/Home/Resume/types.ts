import { IComment } from "models";

export interface ICommentProps {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}

export interface IResumeContext {
  comments: IComment[];
  filterByTitle: (value: string) => void;
  filterByOwner: (id: number) => void;
  reset: () => void;
}
