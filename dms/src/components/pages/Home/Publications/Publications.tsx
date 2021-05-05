import React, { useEffect } from "react";
import styled from "styled-components";
import { useAppDispatch, useAppSelector } from "hooks";
import { user } from "slices/userSlice";
import { post, fetchPostsAsync } from "slices/postsSlice";
import { Card } from "components";

import MainPublication from "./MainPublication";
import LatestPublications from "./LatestPublications";

import { IUser } from "models/User";
import { IPhoto } from "models/Photo";
import { Link } from "components/common";

const Grid = styled.div`
  position: relative;
  display: grid;
  grid-template-areas: "main publications";
  grid-template-columns: auto 2fr;
`;

const PublicationsContainer = styled.div`
  grid-area: publications;
  padding: 0.5rem 1rem;

  > a {
    margin-top: 20px;
  }
`;

const LastPublications: React.VoidFunctionComponent = () => {
  const dispatch = useAppDispatch();
  const { user: author, photo } = useAppSelector(user);
  const { posts, status } = useAppSelector(post);

  useEffect(() => {
    if (author !== null) {
      dispatch(fetchPostsAsync(author.id));
    }
  }, [author]);

  return (
    <Card>
      {status === "pending" && <div>Loading data</div>}
      {status === "fulfilled" && (
        <Grid>
          <MainPublication author={{ name: (author as IUser).name, thumbnailUrl: (photo as IPhoto).thumbnailUrl }} publication={posts[0]} />
          <PublicationsContainer>
            <h5>Latest publications</h5>
            <LatestPublications
              author={{ name: (author as IUser).name, thumbnailUrl: (photo as IPhoto).thumbnailUrl }}
              publications={posts.slice(0, 4)}
            />
            <Link to="/publications">See more publications</Link>
          </PublicationsContainer>
        </Grid>
      )}
    </Card>
  );
};

export default LastPublications;
