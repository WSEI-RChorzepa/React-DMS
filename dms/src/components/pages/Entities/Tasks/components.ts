import styled, { css } from "styled-components";
import Card from "components/common/Card";
import { Variables } from "styledHelpers";
import { DisplayType } from "components/pages/Entities/types";

export namespace TasksWrapperComponents {
  export const Container = styled.div<{ display: DisplayType }>`
    margin-top: 2rem;
    ${(props) => props.display === "mosaic" && displayMosaic()};
    ${(props) => props.display === "rows" && displayRows()};
  `;

  export const Grid: any = styled.div`
    display: grid;
    grid-template-columns: 2fr 1fr;
  `;

  Grid.Configuration = styled.div`
    grid-column: 1;
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
