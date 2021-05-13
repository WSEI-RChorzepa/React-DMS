import styled from "styled-components";
import { Dot } from "components";
import { Variables } from "styledHelpers";

export namespace header {
  export const Container = styled.div`
    display: flex;
    flex-wrap: nowrap;
    flex-direction: row;
    justify-content: space-between;
    align-items: baseline;
    margin-bottom: 0.3rem;
  `;
  export const Title = styled.h5``;

  export const Navigation = styled.div`
    display: flex;
    flex-wrap: nowrap;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
  `;
}

export namespace comment {
  export namespace grid {
    export const Container = styled.div`
      position: relative;
      display: grid;
      grid-template-areas:
        "header"
        "body"
        "footer";
      grid-template-rows: repeat(4, auto);
      padding: 1rem;
    `;

    export const Header = styled.h5`
      grid-area: header;
      color: ${Variables.Color.primary};

      &::first-letter {
        text-transform: uppercase;
      }
    `;

    export const Body = styled.p`
      grid-area: body;
      font-weight: 400;
      margin-bottom: 0.2rem;

      &::first-letter {
        text-transform: uppercase;
      }
    `;

    export const Footer = styled.div`
      grid-area: footer;

      ul {
        margin: 0.5rem 0 0;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        font-size: ${Variables.Font.size[11]};
        color: ${Variables.Color.secondary};

        li {
          display: inline-block;
          display: flex;
          align-items: center;

          ${Dot} {
            margin: 0 0.5rem;
          }

          svg {
            margin-right: 0.5rem;
          }
        }
      }
    `;
  }
}

export namespace dropdownOption {
  export const Wrapper = styled.div`
    display: flex;
    flex-wrap: nowrap;
    flex-direction: column;
    align-items: flex-start;
    padding: 1rem 0.3rem 1rem;
  `;

  export const Button = styled.button`
    margin-bottom: 5px;
    width: 100%;
    background: transparent;
    border: none;
    font-weight: 600;

    &:hover {
      cursor: pointer;
    }
  `;
}
