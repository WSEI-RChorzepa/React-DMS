import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { DropdownContext } from "components/controls/Dropdown/context";
import { DropdownNavigation } from "components/controls/Dropdown/types";
import { dropdownNavigation } from "components/controls/Dropdown/components";

const { Wrapper, Prepend, Value, Category } = dropdownNavigation;

const Option: React.VoidFunctionComponent<DropdownNavigation.IOptionProps> = ({ value, icon, route, prepend }) => {
  const history = useHistory();
  const { onSelect } = useContext(DropdownContext);

  const handleOnSelect = () => {
    history.push(route);
    onSelect(value, icon);
  };

  return (
    <Wrapper onClick={handleOnSelect}>
      <Prepend>{prepend}</Prepend>
      <Value>{value}</Value>
    </Wrapper>
  );
};

const DropdownNavigationOptions: React.VoidFunctionComponent<{ category: string; options: DropdownNavigation.IOptionProps[] }> = ({
  category,
  options,
}) => {
  return (
    <React.Fragment>
      {options.length ? (
        <>
          <Category>{category}</Category>
          {options.map((option) => (
            <Option key={option.value} {...option} />
          ))}
        </>
      ) : (
        <></>
      )}
    </React.Fragment>
  );
};

export default DropdownNavigationOptions;
