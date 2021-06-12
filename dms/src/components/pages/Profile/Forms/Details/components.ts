import styled, { css } from "styled-components";
import { Variables } from "styledHelpers";

export const Section = styled.div<{ disabled: boolean }>`
  padding: 1rem;
  ${({ disabled }) =>
    !disabled &&
    css`
      background-color: rgba(0, 0, 0, 0.03);
    `};
  margin-bottom: 0.5rem;
`;

export const SectionTitle = styled.p`
  font-weight: 600;
  margin: 1rem 0;
  padding-bottom: 0.5rem;
  color: ${Variables.Color.defaultFontColor};
  border-bottom: 1px solid ${Variables.Color.border};
`;

export const Fieldset = styled.fieldset<{ disabled: boolean }>`
  margin-top: 1.5rem;
`;

export const TagBoxGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 0.5rem;

  > div:nth-child(1) {
    grid-column: 1;
  }

  > div:nth-child(2) {
    grid-column: 2;
  }
`;
