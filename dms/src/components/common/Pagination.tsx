/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import styled, { css } from "styled-components";
import { v4 } from "uuid";
import { Variables } from "styledHelpers";

interface IPaginationProps {
  page: number;
  pages: number;
  pageSize: number;
  onPageChange: (pageNumber: number) => void;
}

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Button = styled.button<{ active?: boolean }>`
  background: transparent;
  border: none;
  color: ${Variables.Color.primary};
  font-weight: 500;
  font-size: ${Variables.Font.size[12]};
  padding: 0.5rem;

  &:hover {
    cursor: pointer;
  }

  ${(props) =>
    props.active &&
    css`
      background: ${Variables.Color.primary};
      color: #fff;
    `}
`;

type PaginationEvent = {
  [key: string]: (value?: number) => void;
};

const Pagination: React.VoidFunctionComponent<IPaginationProps> = (props) => {
  const [numbers, setNumbers] = useState<number[]>([]);

  useEffect(() => {
    let nums: number[] = [];
    for (let i = 1; i <= Math.ceil(props.pages / props.pageSize); i++) {
      nums.push(i);
    }
    setNumbers(nums);
  }, [props.pages, props.pageSize]);

  const Events: PaginationEvent = {
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
