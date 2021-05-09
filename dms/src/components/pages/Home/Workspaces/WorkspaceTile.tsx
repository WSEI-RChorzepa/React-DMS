import React from "react";
import { FiUsers } from "react-icons/fi";
import { IconType } from "types";
import { Icon, Label } from "components/common";

import { Tile } from "./helpers";
const { Grid, Image, IconCard, Container } = Tile;

export interface IWorkspaceTileProps {
  icon: IconType;
  title: string;
  backgroundImage: string;
}

const WorkspaceTile: React.VoidFunctionComponent<IWorkspaceTileProps> = ({ icon, title, backgroundImage }) => (
  <Container>
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

export default WorkspaceTile;
