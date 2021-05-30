import React from "react";

export type Dictionary<T> = {
  [key: string]: T;
};

export type SizeType = "small" | "medium" | "large";

export type IconType =
  | "administration"
  | "arrow-down"
  | "bell"
  | "cog"
  | "comments"
  | "ecosystem"
  | "entities"
  | "entities2"
  | "house"
  | "logout"
  | "network"
  | "people"
  | "plus"
  | "privacy"
  | "publications"
  | "search"
  | "settings"
  | "user-plus"
  | "box";

export type VerticalType = "top" | "bottom" | "center";

export type HorizontalType = "left" | "right" | "center";

export type ShapeType = "circle" | "rectangle";

export interface IEntity {}

export namespace pagination {
  export namespace hook {
    export interface IProps<T> {
      elements: T[];
    }
  }

  export interface IProps {
    page: number;
    pages: number;
    pageSize: number;
    onPageChange: (pageNumber: number) => void;
    opUpdate?: React.Dispatch<React.SetStateAction<T>>;
  }

  export type PaginationEvent = {
    [key: string]: (value?: number) => void;
  };

  export interface IContextProps<T> extends IProps {
    collection: T[];
  }
}
