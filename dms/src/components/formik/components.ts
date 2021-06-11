import styled from "styled-components";
import { Color } from "styledHelpers/variables";

export const ErrorMessage = styled.p`
  color: ${Color.danger};
  font-weight: 500;
  padding: 0.2rem 0 1rem;
`;

export const EditButtonWrapper = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
`;
