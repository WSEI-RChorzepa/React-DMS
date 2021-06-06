export type DisplayType = "mosaic" | "rows";

export enum Type {
  And = "And",
  Where = "Where",
}

export enum Operator {
  Contains = "Contains",
  Is = "Is",
  EndsBefore = "Ends before",
}

export enum Field {
  Company = "Company",
  Status = "Status",
}

export interface IFilter {
  index: number;
  type: Type;
  field: Field;
  operator: Operator;
}

export interface IEntitiesContext {
  displayType: DisplayType;
  showFilterConditions: boolean;
  toogleFilterConditions: () => void;
}
