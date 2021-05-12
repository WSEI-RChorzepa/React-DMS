/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { IUser, IPhoto } from "models";
import { useAppDispatch, useAppSelector } from "hooks";
import { user } from "slices/userSlice";
import { post, fetchPostsAsync } from "slices/postsSlice";
import { Card, Link } from "components";
import { publications } from "./components";
import MainPublication from "./MainPublication";
import LatestPublications from "./LatestPublications";

const { Grid, Container } = publications;

const LastPublications: React.VoidFunctionComponent = () => {
  const dispatch = useAppDispatch();
  const { user: author, photo } = useAppSelector(user);
  const { posts, status } = useAppSelector(post);

  useEffect(() => {
    if (author !== null) {
      if (!posts.length) {
        dispatch(fetchPostsAsync(author.id));
      }
    }
  }, [author]);

  return (
    <Card>
      {status === "fulfilled" && (
        <Grid>
          <MainPublication author={{ name: (author as IUser).name, thumbnailUrl: (photo as IPhoto).thumbnailUrl }} publication={posts[0]} />
          <Container>
            <h5>Latest publications</h5>
            <LatestPublications
              author={{ name: (author as IUser).name, thumbnailUrl: (photo as IPhoto).thumbnailUrl }}
              publications={posts.slice(0, 4)}
            />
            <Link to="/publications">See more publications</Link>
          </Container>
        </Grid>
      )}
    </Card>
  );
};

export default LastPublications;
