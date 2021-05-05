import React from "react";
import styled from "styled-components";
import { user } from "slices/userSlice";
import { useAppSelector } from "hooks";
import { Icon, Thumbnail, Link, Card } from "components/common";
import { Variables } from "styledHelpers";

const Grid = styled.div`
  position: relative;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.05);
  padding: 1rem 0 0;
  display: grid;
  grid-template-rows: 0.5fr 1px auto;
  width: 100%;
`;

const Details = styled.div`
  grid-row: 1;
  height: 100%;
  padding: 0.5rem 1rem;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
`;

const Navigation = styled.div`
  grid-row: 3;
  padding: 1rem 1rem 0.5rem;

  a {
    display: block;
    width: 100%;
    margin-bottom: 0.5rem;
  }
`;

const Divider = styled.hr`
  grid-row: 2;
  width: 100%;
  border: none;
  border-bottom: 1px solid rgba(236, 240, 241, 1);
`;

const Name = styled.h6`
  color: rgba(52, 152, 219, 1);
  font-weight: 500;
  margin: 0.5rem 0 0.2rem 0;
`;

const Company = styled.p`
  font-weight: 400;
  font-size: ${Variables.Font.size[11]};
`;

const LinkWrapper = styled.div`
  display: grid;
  grid-template-columns: 30px auto 30px;
  align-items: center;

  & img:nth-child(1) {
    grid-column: 1;
  }

  & strong {
    grid-column: 2;
  }

  & img:nth-child(2) {
    grid-column: 3;
  }
`;

const Profile: React.VoidFunctionComponent = () => {
  const { user: data, photo } = useAppSelector(user);

  return (
    <Card>
      <Grid>
        <Details>
          <Thumbnail src={photo?.thumbnailUrl} />
          <Name>{data?.name}</Name>
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
