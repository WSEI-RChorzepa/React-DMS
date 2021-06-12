import React from "react";
import styled, { css } from "styled-components";
import { Variables, Mixin } from "styledHelpers";

interface IButtonProps {
  selected?: boolean;
  size?: "sm" | "lg";
  onClick?: () => void;
  primary?: boolean;
  danger?: boolean;
  variant?: "info" | "primary" | "danger" | "default";
}

const StyledButton = styled.button<IButtonProps>`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  border: none;
  border-radius: 2px;

  ${({ variant }) =>
    variant === "default" &&
    css`
      background: transparent;
      ${Mixin.fontFamily(Variables.Color.defaultFontColor, Variables.Font.size[12])};

      svg {
        margin-right: 0.5rem;
      }
    `}

  ${({ variant }) =>
    variant === "danger" &&
    css`
      background-color: ${Variables.Color.danger};
      ${Mixin.fontFamily("#FFF", Variables.Font.size[12])};
      text-align: center;
      padding: 0.2rem;

      svg {
        margin-right: 0.2rem;
      }
    `};

  ${({ variant }) =>
    variant === "primary" &&
    css`
      background: ${Variables.Color.primary};
      ${Mixin.fontFamily("#FFF", Variables.Font.size[12])};
      text-align: center;
      padding: 0.2rem;

      svg {
        margin-right: 0.2rem;
      }
    `};

  ${({ variant }) =>
    variant === "info" &&
    css`
      background: ${Variables.Color.info};
      ${Mixin.fontFamily("#FFF", Variables.Font.size[12])};
      text-align: center;
      padding: 0.2rem;

      svg {
        margin-right: 0.2rem;
      }
    `};

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

  &:hover {
    cursor: pointer;
  }

  &:active,
  &:focus {
    outline: none;
  }
`;

const Button: React.FunctionComponent<IButtonProps> = (props) => {
  return (
    <StyledButton selected={props.selected} size={props.size} onClick={props.onClick} variant={props.variant ? props.variant : "default"} type="button">
      {props.danger && <span> Danger</span>}
      {props.children}
    </StyledButton>
  );
};

export default Button;
