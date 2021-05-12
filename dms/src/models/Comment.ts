export interface IComment {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}

export interface ICommentWithOwner extends IComment {
  owner: string;
}
