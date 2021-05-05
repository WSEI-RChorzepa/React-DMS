import styled from "styled-components";
import { Link as RouterLink } from "react-router-dom";
import { Variables, Mixin } from "styledHelpers";

const Link = styled(RouterLink)<{ primary?: boolean }>`
  ${Mixin.fontFamily(Variables.Color.primary)};
  font-weight: 500;
  text-decoration: none;
  transition: all 200ms ease-in-out;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;

  > div > img {
    width: 25px;
    margin-right: 0.3rem;
  }

  &:hover {
    cursor: pointer;
  }
`;

export default Link;
