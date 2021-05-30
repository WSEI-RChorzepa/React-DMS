import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "hooks";
import { fetchUserDataAsync, fetchUsersDataAsync, user } from "slices/userSlice";
import { fetchCommentsAsync } from "slices/commentSlice";
import { Wrapper, Navbar, Navigation, Main, LinksWrapper } from "./components";
import { UserProfile } from "components";
import Link from "../Link";
import Icon from "../Icon";

const Layout: React.FunctionComponent<{ className?: string }> = ({ children, className }) => {
  const dispatch = useAppDispatch();
  const { user: userState } = useAppSelector(user);

  const loadData = () => {
    dispatch(fetchUserDataAsync());
    dispatch(fetchUsersDataAsync());
    dispatch(fetchCommentsAsync());
  };

  useEffect(() => {
    !userState && loadData();
  }, []);

  return (
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
};

export default Layout;
