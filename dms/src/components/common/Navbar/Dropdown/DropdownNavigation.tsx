import React, { useEffect, useState } from "react";
import { DropdownProvider } from "components/controls/Dropdown/context";
import { DropdownNavigation } from "components/controls/Dropdown/types";
import { dropdownNavigation } from "components/controls/Dropdown/components";
import DropdownNavigationOptions from "./DropdownNavigationOptions";
import { Icon, Input, Dropdown as DropdownComponent } from "components";
import { Empty } from "components/common";
import source from "./source";
import Profile from "./Profile";
import Logout from "./Logout";

const { Filter, Options } = dropdownNavigation;

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
      <Filter>
        <Input append={<Icon type="search" />} placeholder="Filter..." block onChange={handleFilter} />
      </Filter>
      <Options>
        {options && options.map((option) => <DropdownNavigationOptions key={option.category} {...option} />)}
        {!hasOptions && <Empty message="No result" />}
      </Options>
      <Profile />
      <Logout />
    </DropdownComponent>
  );
};

const Component: React.VoidFunctionComponent = () => (
  <DropdownProvider>
    <DropdownNavigationComponent options={source.createNavigationOptions()} />
  </DropdownProvider>
);

export default Component;
