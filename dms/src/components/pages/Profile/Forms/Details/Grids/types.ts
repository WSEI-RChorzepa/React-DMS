export interface IProps<T> {
  disabled: boolean;
  values: T[];
  push: (obj: any) => void;
  remove: (index: number) => void;
}
