import React, { useEffect } from "react";
import styled from "styled-components";
import { useAppDispatch } from "hooks";
import { fetchUserDataAsync, fetchUsersDataAsync } from "slices/userSlice";
import { fetchCommentsAsync } from "slices/commentSlice";
import LastPublications from "./Publications/Publications";
import Workspaces from "./Workspaces/Workspaces";
import Resume from "./Resume/Resume";

const Wrapper = styled.div`
  > div {
    margin-bottom: 1rem;
  }
`;

const Home: React.VoidFunctionComponent = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchUserDataAsync());
    dispatch(fetchUsersDataAsync());
    dispatch(fetchCommentsAsync());
  }, []);

  return (
    <Wrapper>
      <LastPublications />
      <Workspaces />
      <Resume />
    </Wrapper>
  );
};

export default Home;
