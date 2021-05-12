import styled from "styled-components";
import { Variables } from "styledHelpers";

export namespace profile {
  export const Wrapper = styled.div`
    position: relative;
    width: 100%;
    border-top: 1px solid ${Variables.Color.border};
    padding: 0.7rem;
  `;

  export const Account = styled.strong`
    display: block;
    margin-bottom: 0.5rem;
  `;

  export const Info = styled.div`
    display: grid;
    grid-template-areas: "thumbnail data";
    grid-template-columns: 40px auto;

    > img {
      grid-area: thumbnail;
    }

    > div {
      grid-area: data;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;

      > a {
        margin-top: 0.2rem;
      }
    }
  `;

  export const Links = styled.div`
    margin-top: 1rem;
    > a {
      margin-bottom: 0.5rem;
    }
  `;
}

export namespace logout {
  export const Wrapper = styled.button`
    width: 100%;
    height: 40px;
    border: none;
    border-top: 1px solid ${Variables.Color.border};
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: transparent;

    &:hover {
      cursor: pointer;
    }

    img {
      margin-right: 10px;
    }
  `;
}
