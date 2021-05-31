import styled, { css } from "styled-components";
import { Card, Flex } from "components/common";
import { Variables } from "styledHelpers";
import { DisplayType } from "components/pages/Entities/types";

export namespace TasksWrapperComponents {
  export const Container = styled.div<{ display: DisplayType }>`
    ${(props) => props.display === "mosaic" && displayMosaic()};
    ${(props) => props.display === "rows" && displayRows()};
  `;

  export const Grid: any = styled.div`
    display: grid;
    grid-template-columns: 2fr 1fr;
    margin-top: 0.5rem;
  `;

  Grid.Configuration = styled.div`
    grid-column: 1;
    display: flex;
  `;

  Grid.Filter = styled.div`
    grid-column: 2;
  `;
}

export namespace TaskComponents {
  export const CardGrid = styled(Card)`
    padding: 0.5rem;
    display: grid;
    grid-template-columns: 245px 1fr;
    grid-template-rows: auto auto;
    grid-template-areas:
      "image title"
      "image company";
  `;

  export const Image = styled.img`
    grid-area: image;
    height: 150px;
  `;

  export const Tile = styled.p`
    :first-letter {
      text-transform: uppercase;
    }
    grid-area: title;
    color: ${Variables.Color.defaultFontColor};
    font-weight: 500;
    font-size: ${Variables.Font.size[14]};
  `;

  export const Company = styled.span`
    grid-area: company;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-start;
    color: ${Variables.Color.secondary};
  `;
}

const displayMosaic = () => css`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;

  > div {
    width: 30%;
  }
`;

const displayRows = () => css`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  > div {
    width: 100%;
  }
`;

export namespace ConditionFilter {
  export const StyledCard = styled(Card)`
    padding: 1rem;
    margin-top: 0.5rem;
  `;

  export const Wrapper = styled.div`
    margin: 0.5rem 0;
  `;

  export const ConditionsWrapper = styled(Flex)`
    margin-bottom: 0.2rem;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 10px;

    > button {
      grid-column: 1;
    }

    > select::nth-child(1) {
      grid-column: 2;
    }

    > select::nth-child(2) {
      grid-column: 3;
    }
    > input {
      grid-column: 4;
    }
  `;
}
