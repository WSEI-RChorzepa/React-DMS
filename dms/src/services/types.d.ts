export type Response<T> = {
  status: number;
  statusText: string;
  body: T | null;
};
