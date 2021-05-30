import React, { useContext } from "react";
import styled from "styled-components";
import { DropdownProvider, DropdownContext } from "components/controls/Dropdown/context";
import { Dropdown as DropdownComponent, Dot } from "components";
import { user as userState } from "slices/userSlice";
import { useAppSelector } from "hooks";
import { IUser } from "models";

export namespace dropdownOption {
  export const Wrapper = styled.div`
    display: flex;
    flex-wrap: nowrap;
    flex-direction: column;
    align-items: flex-start;
    padding: 1rem 0.3rem 1rem;
  `;

  export const Button = styled.button`
    margin-bottom: 5px;
    width: 100%;
    background: transparent;
    border: none;
    font-weight: 600;

    &:hover {
      cursor: pointer;
    }
  `;
}

interface IDropdownOption {
  value: string;
  onClick: () => void;
}

interface IDropdownProps {
  onChange: (value: number) => void;
  reset: () => void;
}

const FollowedDropdown: React.VoidFunctionComponent<IDropdownProps> = ({ onChange, reset }) => {
  const { user } = useAppSelector(userState);
  const { onSelect } = useContext(DropdownContext);

  const handleSelect = (value: "all" | "my") => {
    onSelect(value.toLocaleUpperCase(), "cog");

    if (value.toLocaleLowerCase() === "my") {
      const userId = (user as IUser).id;
      onChange(userId);
    } else {
      reset();
    }
  };

  const options: IDropdownOption[] = [
    {
      value: "All",
      onClick: () => handleSelect("all"),
    },
    {
      value: "My",
      onClick: () => handleSelect("my"),
    },
  ];

  return (
    <DropdownComponent defaultValue="Followed" defultIcon="cog" arrow={true}>
      <dropdownOption.Wrapper>
        {options.map((option) => (
          <dropdownOption.Button key={option.value} onClick={option.onClick}>
            <Dot /> {option.value}
          </dropdownOption.Button>
        ))}
      </dropdownOption.Wrapper>
    </DropdownComponent>
  );
};

const Component: React.VoidFunctionComponent<IDropdownProps> = (props) => (
  <DropdownProvider>
    <FollowedDropdown {...props} />
  </DropdownProvider>
);

export default Component;
