/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import styled from "styled-components";
import { useAppDispatch, useAppSelector } from "hooks";
import { Spinner, Comments } from "components";
import { fetchUserDataAsync, fetchUsersDataAsync } from "slices/userSlice";
import { fetchCommentsAsync, comments } from "slices/commentSlice";
import LastPublications from "./Publications/Publications";
import Workspaces from "./Workspaces/Workspaces";

const Wrapper = styled.div`
  > div {
    margin-bottom: 1rem;
  }
`;

const Loader = styled.div`
  height: 50vh;
  display: flex;
  justify-content: center;
  align-items: center;

  p {
    text-align: center;
    margin-bottom: 0.5rem;
  }
`;

const Home: React.VoidFunctionComponent = () => {
  const { status } = useAppSelector(comments);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchUserDataAsync());
    dispatch(fetchUsersDataAsync());
    dispatch(fetchCommentsAsync());
  }, []);

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
