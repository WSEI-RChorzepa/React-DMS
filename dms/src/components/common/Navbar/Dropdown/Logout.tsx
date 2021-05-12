import React from "react";
import { logout } from "./components";
import { Icon } from "components";

const { Wrapper } = logout;

const Logout: React.VoidFunctionComponent = () => (
  <Wrapper>
    <Icon type="logout" size="medium" />
    <strong>Logout</strong>
  </Wrapper>
);

export default Logout;
