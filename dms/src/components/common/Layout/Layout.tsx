import { FunctionComponent } from "react";
import { Wrapper, Navbar, Navigation, Main, LinksWrapper } from "./components";
import { UserProfile } from "components";
import Link from "../Link";
import Icon from "../Icon";

const Layout: FunctionComponent<{ className?: string }> = ({ children, className }) => (
  <Wrapper className={className}>
    <Navbar />
    <Navigation>
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
    </Navigation>
    <Main>{children}</Main>
  </Wrapper>
);

export default Layout;
