import styled, { css } from "styled-components";
import { Variables } from "styledHelpers";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Button = styled.button<{ active?: boolean }>`
  background: transparent;
  border: none;
  color: ${Variables.Color.primary};
  font-weight: 500;
  font-size: ${Variables.Font.size[12]};
  padding: 0.5rem;

  &:hover {
    cursor: pointer;
  }

  ${(props) =>
    props.active &&
    css`
      background: ${Variables.Color.primary};
      color: #fff;
    `}
`;
