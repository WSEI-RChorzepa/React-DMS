import styled, { css } from "styled-components";

const Thumbnail = styled.img<{ small?: boolean; border?: boolean }>`
  border-radius: 50%;
  width: ${(props) => (props.small ? "25px" : "50px")};
  height: ${(props) => (props.small ? "25px" : "50px")};
  ${(props) =>
    props.border &&
    css`
      border: 1px solid rgba(255, 255, 255, 0.5);
    `}
`;

export default Thumbnail;
