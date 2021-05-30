import React, { useContext } from "react";
import styled from "styled-components";
import { ITaskWithUser } from "models";
import { InputSearch, DropdownFollowed } from "components";
import { Context } from "./context";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Filter: React.VoidFunctionComponent<{ elements: ITaskWithUser[] }> = ({ elements }) => {
  const { onPageChange, opUpdate } = useContext(Context);

  const handleFilterByText = (value: string) => {
    onPageChange(1);
    opUpdate && opUpdate(elements.filter((a) => a.title.toLocaleLowerCase().includes(value.toLocaleLowerCase())));
  };

  const handleFilterById = (value: number) => {
    onPageChange(1);
    opUpdate && opUpdate(elements.filter((a) => a.userId === value));
  };

  const handleReset = () => opUpdate && opUpdate(elements);

  return (
    <Wrapper>
      <DropdownFollowed onChange={handleFilterById} reset={handleReset} />
      <InputSearch onChange={handleFilterByText} />
    </Wrapper>
  );
};

export default Filter;
