import styled from "styled-components";
import { Variables } from "styledHelpers";

export const Wrapper = styled.div`
  position: relative;
  display: grid;
  grid-template-areas: "brand search badges";
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr;
  background-color: #fff;
  padding: 0 2rem;
  box-shadow: 0 2px 10px ${Variables.Color.boxShadow};
`;

export const Brand = styled.div`
  grid-area: brand;
  display: flex;
  align-items: center;

  > div {
    width: 300px;
    > button {
      width: 100%;
    }
  }
`;

export const Search = styled.div`
  grid-area: search;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Badges = styled.div`
  grid-area: badges;
  display: flex;
  justify-content: flex-end;
  align-items: center;

  ul {
    display: flex;
    justify-content: center;
    align-items: center;

    li {
      display: inline-block;
      margin-right: 10px;
      &:last-child {
        margin-right: 0;
      }
    }
  }
`;
