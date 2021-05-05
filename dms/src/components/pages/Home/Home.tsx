import React, { useEffect } from "react";
import styled from "styled-components";
import { useAppDispatch } from "hooks";
import { fetchUserDataAsync } from "slices/userSlice";
import LastPublications from "./Publications/Publications";
import Workspaces from "./Workspaces/Workspaces";
import Resume from "./Resume";

const Wrapper = styled.div`
  > div {
    margin-bottom: 1rem;
  }
`;

const Home: React.VoidFunctionComponent = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchUserDataAsync());
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
