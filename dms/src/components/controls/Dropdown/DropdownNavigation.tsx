import React, { useEffect, useState } from "react";
import { DropdownProvider } from "./context";
import { Icon, Input, Dropdown as DropdownComponent } from "components";
import { NavigationFactory, StyledDropdownNavigation as Styled, DropdownNavigation } from "./infrastructure";
import { Empty } from "components/common";

import DropdownNavigationOptions from "./DropdownNavigationOptions";
import Profile from "./Profile";
import Logout from "./Logout";

const DropdownNavigationComponent: React.VoidFunctionComponent<DropdownNavigation.IProps> = (props) => {
  let timeout: ReturnType<typeof setTimeout>;
  const [options, setOptions] = useState<DropdownNavigation.IOption[]>(props.options);
  const [hasOptions, setHasOptions] = useState<boolean>(true);

  useEffect(() => {
    setHasOptions(options.map((a) => a.options.length).reduce((acc, value) => acc + value, 0) !== 0);
  }, [options]);

  const handleFilter = (ev: React.ChangeEvent<HTMLInputElement>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      const value = ev.target.value;
      setOptions(
        props.options.map((item) => {
          return {
            ...item,
            options: item.options.filter((v) => v.value.toLocaleLowerCase().includes(value.toLocaleLowerCase())),
          };
        })
      );
    }, 500);
  };

  return (
    <DropdownComponent defaultValue="Home" defultIcon="house" arrow={true}>
      <Styled.Filter>
        <Input append={<Icon type="search" />} placeholder="Filter..." block onChange={handleFilter} />
      </Styled.Filter>
      <Styled.Options>
        {options && options.map((option) => <DropdownNavigationOptions key={option.category} {...option} />)}
        {!hasOptions && <Empty message="No result" />}
      </Styled.Options>
      <Profile />
      <Logout />
    </DropdownComponent>
  );
};

const Component: React.VoidFunctionComponent = () => (
  <DropdownProvider>
    <DropdownNavigationComponent options={NavigationFactory.createNavigationOptions()} />
  </DropdownProvider>
);

export default Component;
