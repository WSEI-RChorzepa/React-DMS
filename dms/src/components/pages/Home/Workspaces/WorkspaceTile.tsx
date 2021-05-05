import React from "react";
import styled from "styled-components";
import { IconType } from "types";
import { Icon, Card } from "components/common";

export interface IWorkspaceTileProps {
  icon: IconType;
  title: string;
}

const Wrapper = styled(Card)`
  position: relative;
  display: inline-block;
  width: 200px;
  height: 200px;
  margin: 0 1rem;
`;

const IconCard = styled.div``;

const WorkspaceTile: React.VoidFunctionComponent<IWorkspaceTileProps> = ({ icon, title }) => (
  <Wrapper>
    <img src={"https://via.placeholder.com/200x90"} alt="Workspace" />
    <div>
      <IconCard>
        <Icon type={icon} />
      </IconCard>
      <div>{title}</div>
      <div>Contract 150 users</div>
      <div>Last update 2 days ago</div>
    </div>
  </Wrapper>
);

export default WorkspaceTile;
