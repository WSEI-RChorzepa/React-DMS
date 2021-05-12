export interface IPaginationProps {
  page: number;
  pages: number;
  pageSize: number;
  onPageChange: (pageNumber: number) => void;
}

export type PaginationEvent = {
  [key: string]: (value?: number) => void;
};
