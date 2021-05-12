import { FunctionComponent } from "react";
import styled from "styled-components";
import NavbarComponent from "../common/Navbar";
import { UserProfile } from "components";
import Link from "./Link";
import Icon from "./Icon";

namespace Grid {
  export const Wrapper = styled.div`
    display: grid;
    grid-template-columns: 250px calc(100% - 250px);
    grid-template-rows: 50px calc(100vh - 50px);
    grid-template-areas:
      "header header"
      "navigation main";
    width: 100%;
    position: relative;
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

    > div {
      padding-bottom: 1rem;
    }
  `;
}

const LinksWrapper = styled.div`
  padding: 0.5rem 1rem;

  a {
    margin-bottom: 0.5rem;
  }
`;

const Layout: FunctionComponent<{ className?: string }> = ({ children, className }) => (
  <Grid.Wrapper className={className}>
    <Grid.Navbar />
    <Grid.Navigation>
      <UserProfile />
      <LinksWrapper>
        <Link to="/publications">
          <Icon type="comments" />
          <strong>Publications</strong>
        </Link>
        <Link to="/ecosystem">
          <Icon type="ecosystem" />
          <strong>Ecosystem</strong>
        </Link>
        <Link to="/entities">
          <Icon type="entities" />
          <strong>Entities</strong>
        </Link>
      </LinksWrapper>
    </Grid.Navigation>
    <Grid.Main>{children}</Grid.Main>
  </Grid.Wrapper>
);

export default Layout;
