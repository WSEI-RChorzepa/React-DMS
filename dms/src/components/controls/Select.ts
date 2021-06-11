import styled from "styled-components";
import * as Mixin from "styledHelpers/mixins";
import { Variables } from "styledHelpers";

const Select = styled.select<{ block?: boolean }>`
  ${Mixin.fontFamily()};
  ${Mixin.border()};
  ${(props) => Mixin.block(props.block)}
  height: 30px;
  border-radius: 2px;
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

  &:disabled {
    border: 1px solid transparent;
    background: ${Variables.Color.border};
  }
`;

export default Select;
