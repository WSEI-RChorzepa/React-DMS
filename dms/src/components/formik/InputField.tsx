import React from "react";
import styled, { css } from "styled-components";
import { useField } from "formik";
import { Input, Label } from "components";
import { ErrorMessage } from "./components";

interface IProps {
  name: string;
  type: string;
  placeholder: string;
  label?: string;
}

const Wrapper = styled.div<{ withMargin: boolean; withPadding: boolean }>`
  ${(props) =>
    props.withMargin &&
    css`
      input {
        margin: 0.5rem 0;
      }
    `}

  ${(props) =>
    props.withPadding &&
    css`
      input {
        padding-top: 4px;
      }
    `}
`;

const InputField: React.VoidFunctionComponent<IProps> = (props) => {
  const [field, { error, touched }] = useField({ name: props.name, type: props.type });

  return (
    <Wrapper withMargin={props.label !== undefined} withPadding={props.type === "file"}>
      {props.label && <Label>{props.label}</Label>}
      <Input {...field} {...props} block />
      {error && touched && <ErrorMessage>{error}</ErrorMessage>}{" "}
    </Wrapper>
  );
};

export default InputField;
