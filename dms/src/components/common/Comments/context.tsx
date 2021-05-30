/* eslint-disable react-hooks/exhaustive-deps */
import React, { createContext, useEffect } from "react";
import { useAppSelector, usePagination } from "hooks";
import { comments as commentState } from "slices/commentSlice";
import { ICommentsContext } from "./types";
import { ICommentWithOwner } from "models";

const defaultContext: ICommentsContext = {
  comments: [],
  pagination: {
    page: 0,
    pages: 0,
    pageSize: 10,
    onPageChange: (pageNumber: number) => {},
  },
  filterByTitle: (value: string) => {},
  filterByOwner: (id: number) => {},
  reset: () => {},
};

const CommentsContext = createContext<ICommentsContext>(defaultContext);

const CommentsProvider: React.FunctionComponent = ({ children }) => {
  const { comments } = useAppSelector(commentState);

  const paginationState = usePagination<ICommentWithOwner>({
    elements: comments,
  });

  useEffect(() => {
    paginationState.setElements(comments);
  }, [comments]);

  const filterByTitle = (value: string): void => {
    paginationState.onPageChange(1);
    paginationState.setElements(comments.filter((comment) => comment.name.toLocaleLowerCase().includes(value.toLocaleLowerCase())));
  };

  const filterByOwner = (id: number): void => {
    paginationState.onPageChange(1);
    paginationState.setElements(comments.filter((comment) => comment.postId === id));
  };

  const reset = () => paginationState.setElements(comments);

  const value: ICommentsContext = {
    comments: paginationState.currentElements,
    pagination: {
      page: paginationState.page,
      pageSize: paginationState.pageSize,
      pages: paginationState.pages,
      onPageChange: paginationState.onPageChange,
    },
    filterByTitle,
    filterByOwner,
    reset,
  };

  return <CommentsContext.Provider value={value}>{children}</CommentsContext.Provider>;
};

export { CommentsContext, CommentsProvider };
