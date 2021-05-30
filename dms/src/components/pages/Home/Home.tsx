/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import styled from "styled-components";
import { useAppSelector } from "hooks";
import { Spinner, Comments, Loader } from "components";
import { comments } from "slices/commentSlice";
import LastPublications from "./Publications/Publications";
import Workspaces from "./Workspaces/Workspaces";

const Wrapper = styled.div`
  > div {
    margin-bottom: 1rem;
  }
`;

const Home: React.VoidFunctionComponent = () => {
  const { status } = useAppSelector(comments);

  return (
    <Wrapper>
      {status === "pending" ? (
        <Loader>
          <div>
            <Spinner />
            <p>LOADING DATA</p>
            <p>please wait</p>
          </div>
        </Loader>
      ) : (
        <>
          <LastPublications />
          <Workspaces />
          <Comments title="Resume your work" />
        </>
      )}
    </Wrapper>
  );
};

export default Home;
