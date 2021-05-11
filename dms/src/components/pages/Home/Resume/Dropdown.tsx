import React, { useContext } from "react";
import { DropdownProvider, DropdownContext } from "components/controls/Dropdown/context";
import { Dropdown as DropdownComponent } from "components";

import { user as userState } from "slices/userSlice";
import { ResumeContext } from "./context";
import { useAppSelector } from "hooks";
import { IUser } from "models";

const FollowedDropdown: React.VoidFunctionComponent = (props) => {
  const { user } = useAppSelector(userState);
  const { onSelect } = useContext(DropdownContext);
  const { filterByOwner, reset } = useContext(ResumeContext);

  const handleSelect = (event: React.MouseEvent<HTMLButtonElement>) => {
    const { value } = event.target as HTMLButtonElement;

    onSelect(value.toLocaleUpperCase(), "ecosystem");

    if (value.toLocaleLowerCase() === "my") {
      const userId = (user as IUser).id;
      filterByOwner(userId);
    } else {
      reset();
    }
  };

  return (
    <DropdownComponent defaultValue="Followed" defultIcon="ecosystem" arrow={true}>
      <ul>
        <li>
          <button onClick={handleSelect} value="all">
            All
          </button>
        </li>
        <li>
          <button onClick={handleSelect} value="my">
            My
          </button>
        </li>
      </ul>
    </DropdownComponent>
  );
};

const Component: React.VoidFunctionComponent = () => (
  <DropdownProvider>
    <FollowedDropdown />
  </DropdownProvider>
);

export default Component;
