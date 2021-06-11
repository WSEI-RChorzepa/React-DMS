import React, { forwardRef } from "react";
import styled, { css } from "styled-components";
import { Color } from "styledHelpers/variables";
import * as Mixin from "styledHelpers/mixins";
import { Variables } from "styledHelpers";

const Wrapper = styled.div<{ block?: boolean }>`
  position: relative;
  ${(props) => Mixin.block(props.block)}
`;

const ChildWrapper = styled.div`
  position: absolute;
  top: 0;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0.2;
`;

const Prepend = styled(ChildWrapper)`
  left: 10px;

  + input {
    padding-left: 30px;
  }
`;

const Append = styled(ChildWrapper)`
  right: 10px;
`;

const StyledInput = styled.input<Props>`
  ${Mixin.fontFamily()}
  ${Mixin.border()}
  height: 30px;
  border-radius: 2px;
  padding-left: 10px;

  ${(props) =>
    props.align &&
    css`
      text-align: ${props.align};
    `}

  ${(props) => Mixin.block(props.block)}

    &:focus,
    &:active {
    outline: none;
  }

  &::placeholder {
    color: ${Color.secondary};
  }

  &:disabled {
    border: 1px solid transparent;
    background: ${Variables.Color.border};
  }
`;

interface Props extends React.ComponentPropsWithoutRef<"input"> {
  block?: boolean;
  align?: string;
}

interface Children {
  prepend?: React.ReactNode;
  append?: React.ReactNode;
}

const InputComponent = forwardRef<HTMLInputElement, Props>((props, ref) => <StyledInput ref={ref} {...props} />);

export const Input: React.VoidFunctionComponent<Props & Children> = (props) => {
  const { block, prepend, append, ...restProps } = props;

  return (
    <Wrapper block={block}>
      {prepend && <Prepend>{prepend}</Prepend>}
      <InputComponent {...restProps} block={props.block} />
      {append && <Append>{append}</Append>}
    </Wrapper>
  );
};
