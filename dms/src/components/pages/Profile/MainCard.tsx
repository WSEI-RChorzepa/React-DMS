import React from "react";
import styled from "styled-components";
import { useAppSelector } from "hooks";
import { user } from "slices/userSlice";
import { Thumbnail, Link, Flex } from "components";
import { Card } from "./components";
import PersonalInformationForm from "./Forms/Main/MainForm";

const Grid = styled.div`
  display: grid;
  grid-template-areas: "thumbnailContainer dataContainer";
  grid-template-columns: 200px 60%;

  > div:nth-child(1) {
    grid-area: thumbnailContainer;

    img {
      margin-bottom: 0.5rem;
    }
  }

  > div:nth-child(2) {
    grid-area: dataContainer;
  }
`;

const MainCard: React.VoidFunctionComponent = () => {
  const { photo } = useAppSelector(user);

  return (
    <Card>
      <Grid>
        <Flex direction="column" justifyContent="center" alignItems="center">
          <Thumbnail src={photo?.thumbnailUrl} />
          <Link to="/profile">
            <h6>See profile</h6>
          </Link>
        </Flex>
        <PersonalInformationForm />
      </Grid>
    </Card>
  );
};

export default MainCard;
