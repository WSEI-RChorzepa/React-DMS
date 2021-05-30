import { useState } from "react";
import { pagination } from "types";

const usePagination = <T>(props: pagination.hook.IProps<T>) => {
  const [elements, setElements] = useState(props.elements);
  const [page, setPage] = useState(1);
  const [pageSize] = useState(10);

  const indexOfLastElement = page * pageSize;
  const indexOfFirstElement = indexOfLastElement - pageSize;
  const currentElements = elements.slice(indexOfFirstElement, indexOfLastElement);
  const onPageChange = (pageNumber: number) => setPage(pageNumber);

  return {
    pages: elements.length,
    page,
    currentElements,
    pageSize,
    setElements,
    onPageChange,
  };
};

export function DefaultPaginationProps<T>(): pagination.IContextProps<T> {
  return {
    collection: [] as T[],
    page: 0,
    pages: 0,
    pageSize: 10,
    onPageChange: (pageNumber: number) => {},
  };
}

export default usePagination;
