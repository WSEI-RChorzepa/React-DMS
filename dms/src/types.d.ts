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
    onUpdate?: React.Dispatch<React.SetStateAction<T>>;
  }

  export type PaginationEvent = {
    [key: string]: (value?: number) => void;
  };

  export interface IContextProps<T> extends IProps {
    collection: T[];
  }
}

export interface IMainInformationProps {
  name: string;
  company: string;
  city: string;
  position: string;
  phone: string;
  email: string;
}

export interface IDetailsProps {
  expertise: string[];
  specialities: string[];
  admissionToPracticeLaw: string[];
  counties: string[];
  hourlyFee: string;
  termsAndConditions: string;
  file: string;
  propsals: IPropsals[];
  internalCorrespondants: IInternalCorrespondants[];
}

export interface IColumn {
  value: string | number;
}

export type Collection = Array<{ [key: string]: string | number }>;

export interface IPropsals {
  name: string;
  entity: string;
  location: string;
  expertise: string;
  date: string;
  firm: string;
}

export interface IInternalCorrespondants {
  firstname: string;
  lastName: string;
  message: string;
  profile: string;
}
