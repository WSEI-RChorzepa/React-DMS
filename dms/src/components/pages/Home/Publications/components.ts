import styled from "styled-components";
import { Variables } from "styledHelpers";

export const Body = styled.div<{ position: "relative" | "absolute" }>`
  position: ${(props) => props.position};
  z-index: 99;
  padding: 0.5rem;
  bottom: 0;
  left: 0;
`;

export const Text = styled.p<{ color?: string }>`
  letter-spacing: 0.5px;
  line-height: 14px;
  font-weight: 400;
  text-align: left;
  text-transform: capitalize;
  color: ${(props) => (props.color ? props.color : "#FFF")};
`;

export const Release = styled.div<{ color?: string }>`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-top: 0.2rem;

  > span {
    color: ${(props) => (props.color ? props.color : "#FFF")};
    font-weight: 400;
    letter-spacing: 0.5px;
  }

  > span,
  img {
    margin-right: 5px;
  }
`;

export const ReleaseDate = styled.span`
  font-size: ${Variables.Font.size[10]};
`;

export const Author = styled.span`
  font-size: ${Variables.Font.size[10]};
`;
