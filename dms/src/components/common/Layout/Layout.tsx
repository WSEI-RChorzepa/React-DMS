/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "hooks";
import { fetchUserDataAsync, fetchUsersDataAsync, user } from "slices/userSlice";
import { fetchCommentsAsync } from "slices/commentSlice";
import { Wrapper, Navbar, Navigation, Main, LinksWrapper } from "./components";
import { UserProfile } from "components";
import Link from "../Link";
import Icon from "../Icon";
import { LayoutContext } from "./context";

const Layout: React.FunctionComponent<{ className?: string }> = ({ children, className }) => {
  const dispatch = useAppDispatch();
  const { user: userState } = useAppSelector(user);
  const [showNavigation, setShowNavigation] = useState<boolean>(true);

  const loadData = () => {
    dispatch(fetchUserDataAsync());
    dispatch(fetchUsersDataAsync());
    dispatch(fetchCommentsAsync());
  };

  useEffect(() => {
    !userState && loadData();
  }, []);

  return (
    <LayoutContext.Provider value={{ showNavigation: showNavigation, toggleShowNavigation: () => setShowNavigation(!showNavigation) }}>
      <Wrapper className={className} showNavigation={showNavigation}>
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
    </LayoutContext.Provider>
  );
};

export default Layout;
