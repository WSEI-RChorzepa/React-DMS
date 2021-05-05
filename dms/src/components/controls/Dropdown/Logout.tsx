import React from "react";
import styled from "styled-components";
import { Icon } from "components";
import { Variables } from "styledHelpers";

const Wrapper = styled.button`
  width: 100%;
  height: 40px;
  border: none;
  border-top: 1px solid ${Variables.Color.border};
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;

  &:hover {
    cursor: pointer;
  }

  img {
    margin-right: 10px;
  }
`;

const Logout: React.VoidFunctionComponent = () => (
  <Wrapper>
    <Icon type="logout" size="medium" />
    <strong>Logout</strong>
  </Wrapper>
);

export default Logout;
