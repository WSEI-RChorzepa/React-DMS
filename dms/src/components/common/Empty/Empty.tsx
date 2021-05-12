import React from "react";
import { Wrapper, StyledIcon, Message } from "./components";

const Empty: React.VoidFunctionComponent<{ message: string }> = ({ message }) => {
  const source = require(`assets/icons/box.svg`).default;

  return (
    <Wrapper>
      <div>
        <StyledIcon src={source} />
        <Message>{message}</Message>
      </div>
    </Wrapper>
  );
};

export default Empty;
