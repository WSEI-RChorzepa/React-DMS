import styled, { css } from "styled-components";
import NavbarComponent from "../Navbar/Navbar";

const gridWithNavigation = () => css`
  display: grid;
  grid-template-columns: 250px calc(100% - 250px);
  grid-template-rows: 50px calc(100vh - 50px);
  grid-template-areas:
    "header header"
    "navigation main";
  width: 100%;
  position: relative;
`;

const gridWithoutNavigation = () => css`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 50px calc(100vh - 50px);
  grid-template-areas:
    "header header"
    "main main";
  width: 100%;
  position: relative;

  > div:nth-child(2) {
    display: none;
  }
`;

export const Wrapper = styled.div<{ showNavigation: boolean }>`
  ${(props) => (props.showNavigation ? gridWithNavigation() : gridWithoutNavigation())}
`;

export const Navbar = styled(NavbarComponent)`
  grid-area: header;
  grid-row: 1;
`;

export const Navigation = styled.div`
  grid-area: navigation;
  grid-row: 2;
  padding: 1rem;
`;

export const Main = styled.div`
  grid-area: main;
  grid-row: 2;
  padding: 1rem;

  > div {
    padding-bottom: 1rem;
  }
`;

export const LinksWrapper = styled.div`
  padding: 0.5rem 1rem;

  a {
    margin-bottom: 0.5rem;
  }
`;
