import React from "react";
import { useHistory } from "react-router-dom";
import { FiUsers } from "react-icons/fi";
import { Icon, Label } from "components/common";
import { Tile } from "./components";
import { IWorkspace } from "models";
const { Grid, Image, IconCard, Container } = Tile;

const WorkspaceTile: React.VoidFunctionComponent<IWorkspace> = ({ id, icon, title, backgroundImage }) => {
  const history = useHistory();

  const handleSelect = () => {
    history.push(`/workspace/${id}`);
  };

  return (
    <Container onClick={handleSelect}>
      <Grid.Image>
        <Image src={backgroundImage} alt="Workspace image" />
      </Grid.Image>
      <Grid.Icon>
        <IconCard>
          <Icon type={icon} size="large" />
        </IconCard>
      </Grid.Icon>
      <Grid.Label>
        <Label>{title}</Label>
      </Grid.Label>
      <Grid.Contract>
        <Icon type={icon} size="small" />
        <small>Contract</small>
      </Grid.Contract>
      <Grid.Users>
        <FiUsers />
        <small>150 users</small>
      </Grid.Users>
      <Grid.Update>
        <small> Last update 2 days ago</small>
      </Grid.Update>
    </Container>
  );
};

export default WorkspaceTile;
