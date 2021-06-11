import React from "react";
import { user } from "slices/userSlice";
import { useAppSelector } from "hooks";
import { Grid, Details, Name, Company, Divider, Navigation, LinkWrapper } from "./components";
import { Icon, Thumbnail, Link, Card } from "components/common";

const Profile: React.VoidFunctionComponent = () => {
  const { user: data, photo } = useAppSelector(user);

  return (
    <Card>
      <Grid>
        <Details>
          <Thumbnail src={photo?.thumbnailUrl} />
          <Link to="/profile">
            <Name>{data?.name}</Name>
          </Link>
          <Company>Job title - {data?.company.name}</Company>
        </Details>
        <Divider />
        <Navigation>
          <Link to="network">
            <LinkWrapper>
              <Icon type="people" />
              <strong>Your network</strong>
              <Icon type="user-plus" size="small" shape="rectangle" />
            </LinkWrapper>
          </Link>
          <Link to="publications">
            <LinkWrapper>
              <Icon type="comments" />
              <strong>Your publications</strong>
              <Icon type="plus" size="small" shape="rectangle" />
            </LinkWrapper>
          </Link>
        </Navigation>
      </Grid>
    </Card>
  );
};

export default Profile;
