import React, { useContext } from "react";
import styled from "styled-components";
import { ITaskWithUser } from "models";
import { InputSearch, DropdownFollowed } from "components";
import { Context } from "./Tasks/context";

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const Filter: React.VoidFunctionComponent<{ elements: ITaskWithUser[] }> = ({ elements }) => {
  const { onPageChange, onUpdate } = useContext(Context);

  const handleFilterByText = (value: string) => {
    onPageChange(1);
    onUpdate && onUpdate(elements.filter((a) => a.title.toLocaleLowerCase().includes(value.toLocaleLowerCase())));
  };

  const handleFilterById = (value: number) => {
    onPageChange(1);
    onUpdate && onUpdate(elements.filter((a) => a.userId === value));
  };

  const handleReset = () => onUpdate && onUpdate(elements);

  return (
    <Wrapper>
      <DropdownFollowed onChange={handleFilterById} reset={handleReset} />
      <InputSearch onChange={handleFilterByText} />
    </Wrapper>
  );
};

export default Filter;
