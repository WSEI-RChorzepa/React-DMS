import React from "react";
import styled, { css } from "styled-components";
import { Variables } from "styledHelpers";

interface IPaginationProps {
  page: number;
  pages: number;
  perPage: number;
  onPageChange: (pageNumber: number) => void;
}

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Button = styled.button<{ active: boolean }>`
  background: transparent;
  border: none;
  color: ${Variables.Color.primary};
  font-weight: 500;
  font-size: ${Variables.Font.size[12]};
  width: 30px;
  height: 30px;
  padding: 0.5rem;
  transition: all 300ms ease;

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

const Pagination: React.VoidFunctionComponent<IPaginationProps> = (props) => {
  const pageNumbers: number[] = [];

  for (let i = 1; i <= Math.ceil(props.pages / props.perPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <Wrapper>
      {pageNumbers &&
        pageNumbers.map((number) => (
          <Button key={number} onClick={() => props.onPageChange(number)} active={number === props.page}>
            {number}
          </Button>
        ))}
    </Wrapper>
  );
};

export default Pagination;
