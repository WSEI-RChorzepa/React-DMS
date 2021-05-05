import React from "react";
import styled from "styled-components";
import { IPostWithImage } from "models";
import { Thumbnail } from "components/common";
import { Body, Text, Release } from "./Helpers";

export const Wrapper = styled.div`
  position: relative;
  grid-area: main;
  width: 345px;
  height: 345px;

  > img {
    position: absolute;
    width: inherit;
    height: inherit;
    top: 0;
    left: 0;
    z-index: 1;
  }
`;

const StyledBod = styled(Body)`
  bottom: 20px;
`;

interface IMainPublicationProps {
  author: {
    name: string;
    thumbnailUrl: string;
  };
  publication: IPostWithImage;
}

const MainPublication: React.VoidFunctionComponent<IMainPublicationProps> = ({ author, publication }) => (
  <Wrapper>
    <img src={publication.imageUrl} alt={publication.imageTitle} />
    <StyledBod position="absolute">
      <Text>{publication.body}</Text>
      <Release>
        <span>{new Date().toLocaleDateString()}</span>
        <Thumbnail src={publication.imageUrl} small border />
        <span>{author.name}</span>
      </Release>
    </StyledBod>
  </Wrapper>
);

export default MainPublication;
