import React, { useContext } from "react";
import { DropdownProvider, DropdownContext } from "components/controls/Dropdown/context";
import { Dropdown as DropdownComponent, Dot } from "components";
import { dropdownOption } from "./components";
import { IDropdownOption } from "./types";
import { user as userState } from "slices/userSlice";
import { ResumeContext } from "./context";
import { useAppSelector } from "hooks";
import { IUser } from "models";

const FollowedDropdown: React.VoidFunctionComponent = () => {
  const { user } = useAppSelector(userState);
  const { onSelect } = useContext(DropdownContext);
  const { filterByOwner, reset } = useContext(ResumeContext);

  const handleSelect = (value: "all" | "my") => {
    onSelect(value.toLocaleUpperCase(), "cog");

    if (value.toLocaleLowerCase() === "my") {
      const userId = (user as IUser).id;
      filterByOwner(userId);
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

const Component: React.VoidFunctionComponent = () => (
  <DropdownProvider>
    <FollowedDropdown />
  </DropdownProvider>
);

export default Component;
