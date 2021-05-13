import styled from "styled-components";

export const ImageContainer = styled.div`
  overflow: hidden;
  width: 100%;
  height: 300px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30%;
`;

export const Body = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  padding: 1rem;
`;

export const Content = styled.div`
  p {
    line-height: 15px;
  }
`;

export const Settings = styled.div`
  position: absolute;
  top: 1rem;
  right: 1rem;
`;
