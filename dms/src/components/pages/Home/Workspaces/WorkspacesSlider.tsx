import React from "react";
import styled from "styled-components";
import { IWorkspaceTileProps } from "./WorkspaceTile";
import WorkspaceTile from "./WorkspaceTile";

const Workspaces: IWorkspaceTileProps[] = [
  {
    icon: "publications",
    title: "Client contract",
  },
  {
    icon: "publications",
    title: "Supplier contract",
  },
  {
    icon: "entities",
    title: "Corporate",
  },
  {
    icon: "ecosystem",
    title: "Group norms",
  },
  {
    icon: "ecosystem",
    title: "Real Estate contracts",
  },
  {
    icon: "publications",
    title: "Client contract 2",
  },
  {
    icon: "publications",
    title: "Supplier contract 2",
  },
  {
    icon: "entities",
    title: "Corporate 2",
  },
  {
    icon: "ecosystem",
    title: "Group norms 2",
  },
  {
    icon: "ecosystem",
    title: "Real Estate contracts 2",
  },
];

const Wrapper = styled.div`
  position: relative;
  white-space: nowrap;
  overflow-x: hidden;
`;

const WorkspacesSlider: React.VoidFunctionComponent = () => {
  return (
    <Wrapper>
      {Workspaces.map((workspace) => (
        <WorkspaceTile key={workspace.title} icon={workspace.icon} title={workspace.title} />
      ))}
    </Wrapper>
  );
};

export default WorkspacesSlider;
