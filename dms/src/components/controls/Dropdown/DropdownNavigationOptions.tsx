import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { DropdownContext } from "./context";
import { StyledDropdownNavigation as Styled, DropdownNavigation } from "./infrastructure";

const Option: React.VoidFunctionComponent<DropdownNavigation.IOptionProps> = ({ value, icon, route, prepend }) => {
  const history = useHistory();
  const { onSelect } = useContext(DropdownContext);

  const handleOnSelect = () => {
    history.push(route);
    onSelect(value, icon);
  };

  return (
    <Styled.Wrapper onClick={handleOnSelect}>
      <Styled.Prepend>{prepend}</Styled.Prepend>
      <Styled.Value>{value}</Styled.Value>
    </Styled.Wrapper>
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
          <Styled.Category>{category}</Styled.Category>
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
