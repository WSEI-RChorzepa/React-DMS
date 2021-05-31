import styled from "styled-components";
import * as Mixin from "styledHelpers/mixins";

const Select = styled.select`
  ${Mixin.fontFamily()};
  ${Mixin.border()};
  height: 35px;
  padding: 0 10px;

  &:hover {
    cursor: pointer;
  }

  &:focus {
    ${Mixin.boxShadow()}
    outline: none;
  }

  &::-ms-expand {
    display: none;
  }
`;

export default Select;
