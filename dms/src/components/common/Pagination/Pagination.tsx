/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import { v4 } from "uuid";
import { pagination } from "types";
import { Wrapper, Button } from "./components";

const Pagination: React.VoidFunctionComponent<pagination.IProps> = (props) => {
  const [numbers, setNumbers] = useState<number[]>([]);

  useEffect(() => {
    let nums: number[] = [];
    for (let i = 1; i <= Math.ceil(props.pages / props.pageSize); i++) {
      nums.push(i);
    }
    setNumbers(nums);
  }, [props.pages, props.pageSize]);

  const Events: pagination.PaginationEvent = {
    previous: () => props.onPageChange(numbers[numbers.indexOf(props.page) - 1]),
    next: () => props.onPageChange(numbers[numbers.indexOf(props.page) + 1]),
    first: () => props.onPageChange(numbers[0]),
    last: () => props.onPageChange(numbers[numbers.length - 1]),
  };

  const handleChange = (value: number) => props.onPageChange(value);

  const getMiddle = (): number[] => [numbers[props.page - 2], numbers[props.page - 1], numbers[props.page]];

  return (
    <Wrapper>
      {props.page > 1 && (
        <>
          <Button onClick={() => Events["first"]()}>First</Button>
          <Button onClick={() => Events["previous"]()}>Previous</Button>
        </>
      )}

      {props.page > 2 && (
        <>
          <Button onClick={() => Events["first"]()}>{numbers[0]}</Button>
          <>...</>
        </>
      )}

      {getMiddle().map((number) => (
        <Button key={v4()} onClick={() => handleChange(number)} active={number === props.page}>
          {number}
        </Button>
      ))}

      {props.page < numbers[numbers.length - 2] && (
        <>
          <>...</>
          <Button onClick={() => Events["last"]()}>{numbers[numbers.length - 1]}</Button>
        </>
      )}

      {props.page < numbers[numbers.length - 1] && (
        <>
          <Button onClick={() => Events["next"]()}>Next</Button>
          <Button onClick={() => Events["last"]()}>Last</Button>
        </>
      )}
    </Wrapper>
  );
};

export default Pagination;
