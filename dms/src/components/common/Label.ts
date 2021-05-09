import styled, { css } from "styled-components";
import { Variables, Mixin } from "styledHelpers";

interface ILabelProps {
  color?: string;
}

const Label = styled.label<ILabelProps>`
  ${Mixin.fontFamily(Variables.Color.defaultFontColor, Variables.Font.size[12])};
  ${(props) =>
    props.color &&
    css`
      color: ${props.color};
    `};
  font-weight: 600;
`;

export default Label;
