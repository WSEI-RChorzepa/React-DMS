import React from "react";
import { IWorkspaceProps } from "./types";
import { Card, Comments } from "components";
import { Icon } from "components/common";
import { Body, Content, IconContainer, ImageContainer, Settings } from "./components";

const Workspace: React.VoidFunctionComponent<IWorkspaceProps> = ({ data }) => {
  return (
    <div>
      <Card>
        <ImageContainer>
          <img src={data.backgroundImage} alt="workspace_image" />
        </ImageContainer>
        <Body>
          <IconContainer>
            <Icon type={data.icon} size="large" />
          </IconContainer>
          <Content>
            <h5>{data.title}</h5>
            <p>{data.body}</p>
          </Content>
          <Settings>
            <Icon type="cog" />
          </Settings>
        </Body>
      </Card>

      <Comments title="Last updates" />
    </div>
  );
};

export default Workspace;
