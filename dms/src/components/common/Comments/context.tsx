/* eslint-disable react-hooks/exhaustive-deps */
import React, { createContext, useEffect } from "react";
import { useAppSelector, usePagination } from "hooks";
import { comments as commentState } from "slices/commentSlice";
import { IResumeContext } from "./types";
import { ICommentWithOwner } from "models";

const defaultContext: IResumeContext = {
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

const ResumeContext = createContext<IResumeContext>(defaultContext);

const ResumeProvider: React.FunctionComponent = ({ children }) => {
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

  const value: IResumeContext = {
    comments: paginationState.currentElements,
    pagination: {
      page: paginationState.currentPage,
      pageSize: paginationState.elementsPerPage,
      pages: paginationState.pages,
      onPageChange: paginationState.onPageChange,
    },
    filterByTitle,
    filterByOwner,
    reset,
  };

  return <ResumeContext.Provider value={value}>{children}</ResumeContext.Provider>;
};

export { ResumeContext, ResumeProvider };
