import React, { useState, createContext, useEffect } from "react";
import { useAppSelector } from "hooks";
import { comments as commentState } from "slices/commentSlice";
import { IResumeContext } from "./types";
import { IComment } from "models";

const defaultContext: IResumeContext = {
  comments: [],
  filterByTitle: (value: string) => {},
  filterByOwner: (id: number) => {},
  reset: () => {},
};

const ResumeContext = createContext<IResumeContext>(defaultContext);

const ResumeProvider: React.FunctionComponent = ({ children }) => {
  const { comments } = useAppSelector(commentState);
  const [data, setData] = useState<IComment[]>([]);

  useEffect(() => {
    setData(comments);
  }, [comments]);

  const filterByTitle = (value: string): void => {
    setData(comments.filter((comment) => comment.name.toLocaleLowerCase().includes(value.toLocaleLowerCase())));
  };

  const filterByOwner = (id: number): void => {
    setData(comments.filter((comment) => comment.postId === id));
  };

  const reset = () => setData(comments);

  const value: IResumeContext = {
    comments: data,
    filterByTitle,
    filterByOwner,
    reset,
  };

  return <ResumeContext.Provider value={value}>{children}</ResumeContext.Provider>;
};

export { ResumeContext, ResumeProvider };
