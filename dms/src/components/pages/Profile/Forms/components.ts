import styled from "styled-components";

export namespace PersonalInfo {
  export const Grid = styled.div`
    position: relative;
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: repeat(4, auto);
    grid-gap: 0.2rem;

    > div:nth-child(1) {
      grid-column: 1;
      grid-row: 1;
    }

    > div:nth-child(2) {
      grid-column: 1;
      grid-row: 2;
    }

    > div:nth-child(3) {
      grid-column: 1;
      grid-row: 3;
    }

    > div:nth-child(4) {
      grid-column: 1;
      grid-row: 4;
    }

    > div:nth-child(5) {
      grid-column: 2;
      grid-row: 3;
    }

    > div:nth-child(6) {
      grid-column: 2;
      grid-row: 4;
    }
  `;
}
