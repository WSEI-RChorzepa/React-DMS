import { useState } from "react";

interface IProps<T> {
  elements: T[];
}

const usePagination = <T>(props: IProps<T>) => {
  const [elements, setElements] = useState(props.elements);
  const [currentPage, setCurrentPage] = useState(1);
  const [elementsPerPage, setElementsPerPage] = useState(10);

  const indexOfLastElement = currentPage * elementsPerPage;
  const indexOfFirstElement = indexOfLastElement - elementsPerPage;
  const currentElements = elements.slice(indexOfFirstElement, indexOfLastElement);
  const onPageChange = (pageNumber: number) => setCurrentPage(pageNumber);

  return {
    pages: elements.length,
    setElements,
    currentPage,
    currentElements,
    elementsPerPage,
    onPageChange,
  };
};

export default usePagination;
