import React from "react";
import styled from "styled-components";
import { IPostWithImage } from "models";
import { Thumbnail } from "components/common";
import { Body, Text, Release, ReleaseDate, Author } from "./Helpers";
import { Variables } from "styledHelpers";

const Wrapper = styled.div`
  height: 60px;
  display: flex;
  justify-content: flex-start;
  margin-bottom: 0.5rem;

  > img {
    position: relative;
  }
`;

const StyledText = styled(Text)`
  font-weight: 500;
`;

interface IPublicationProps {
  author: {
    name: string;
    thumbnailUrl: string;
  };
  publications: IPostWithImage[];
}

const LatestPublications: React.VoidFunctionComponent<IPublicationProps> = ({ author, publications }) => (
  <>
    {publications.map((publication) => (
      <Wrapper key={publication.id}>
        <img src={publication.imageUrl} alt={publication.imageTitle} />
        <Body position="relative">
          <StyledText color={Variables.Color.defaultFontColor}>{publication.body}</StyledText>
          <Release color={Variables.Color.secondary}>
            <ReleaseDate>{new Date().toLocaleDateString()}</ReleaseDate>
            <Thumbnail src={author.thumbnailUrl} small border />
            <Author>{author.name}</Author>
          </Release>
        </Body>
      </Wrapper>
    ))}
  </>
);

export default LatestPublications;
