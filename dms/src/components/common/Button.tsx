import React from "react";
import styled, { css } from "styled-components";
import { Variables, Mixin } from "styledHelpers";

interface IButtonProps {
  selected?: boolean;
  size?: "sm" | "lg";
  onClick?: () => void;
}

const StyledButton = styled.button<IButtonProps>`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  border: none;
  background: transparent;
  ${(props) =>
    props.selected &&
    css`
      background-color: RGBA(0, 0, 0, 0.07);
    `}
  ${(props) =>
    props.size === "lg"
      ? css`
          padding: 0.5rem 1rem;
        `
      : css`
          padding: 0.2rem;
        `}  
  ${Mixin.fontFamily(Variables.Color.defaultFontColor, Variables.Font.size[12])};

  &:hover {
    cursor: pointer;
  }

  &:active,
  &:focus {
    outline: none;
  }

  svg {
    margin-right: 0.5rem;
  }
`;

const Button: React.FunctionComponent<IButtonProps> = (props) => {
  return (
    <StyledButton selected={props.selected} size={props.size} onClick={props.onClick} type="button">
      {props.children}
    </StyledButton>
  );
};

export default Button;
