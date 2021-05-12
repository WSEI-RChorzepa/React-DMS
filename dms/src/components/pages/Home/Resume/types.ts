import { ICommentWithOwner } from "models";

export interface ICommentProps {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
  owner: string;
}

export interface IPagination {
  page: number;
  pages: number;
  perPage: number;
  onPageChange: (pageNumber: number) => void;
}

export interface IResumeContext {
  comments: ICommentWithOwner[];
  pagination: IPagination;
  filterByTitle: (value: string) => void;
  filterByOwner: (id: number) => void;
  reset: () => void;
}

export interface IDropdownOption {
  value: string;
  onClick: () => void;
}
