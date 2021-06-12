/* eslint-disable react-hooks/exhaustive-deps */
import React, { FunctionComponent, useEffect, useState } from "react";
import styled, { css } from "styled-components";

const Wrapper = styled.div<{ stick: boolean }>`
  transition: all 200ms ease-in-out;
  ${({ stick }) =>
    stick &&
    css`
      position: fixed;
      top: 0.5rem;
      right: 1rem;
    `}
`;

const Sticky: FunctionComponent<{ height: number }> = ({ children, height }) => {
  const [stick, setStick] = useState(false);

  useEffect(() => {
    const stick = (ev: Event) => {
      if (window.pageYOffset >= height) {
        setStick(true);
      } else {
        setStick(false);
      }
    };

    window.addEventListener("scroll", stick);
    return () => window.removeEventListener("scroll", stick);
  }, []);

  return <Wrapper stick={stick}>{children}</Wrapper>;
};

export default Sticky;
