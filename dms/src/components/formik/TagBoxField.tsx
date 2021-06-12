import React from "react";
import styled from "styled-components";
import { FieldArrayRenderProps } from "formik";
import { Label } from "components";
import { ErrorMessage } from "./components";
import { Badge, TagBox } from "components/controls/TagBox";

const Wrapper = styled.div`
  margin-bottom: 0.5rem;
`;

const Readonly = styled.div`
  height: 30px;
  margin: 0.5rem 0;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

interface IProps {
  label?: string;
  values: string[];
  dictionary: string[];
  disabled: boolean;
}

const TagBoxField: React.VoidFunctionComponent<IProps & FieldArrayRenderProps> = (props) => {
  const { push, remove, values, disabled } = props;
  const { errors, touched } = props.form;

  return (
    <Wrapper>
      {props.label && <Label>{props.label}</Label>}
      {disabled ? (
        <Readonly>
          {values.map((value) => (
            <Badge key={value} readonly={true}>
              {value}
            </Badge>
          ))}
        </Readonly>
      ) : (
        <>
          <TagBox values={values} dictionary={props.dictionary} push={push} remove={remove} />
          {errors[props.name] && touched && <ErrorMessage>{errors[props.name]}</ErrorMessage>}{" "}
        </>
      )}
    </Wrapper>
  );
};

export default TagBoxField;
