import React from "react";
import { useField } from "formik";
import { Select } from "components/controls";
import { ErrorMessage } from "./components";

interface IProps {
  name: string;
  type: string;
  placeholder: string;
  label?: string;
  values: string[];
}

const SelectField: React.VoidFunctionComponent<IProps> = (props) => {
  const [field, { error, touched }] = useField({ name: props.name, type: props.type });

  return (
    <div>
      {props.label && <label>{props.label}</label>}
      <Select {...field} {...props} block>
        {props.values.map((value) => (
          <option key={value} value={value}>
            {value}
          </option>
        ))}
      </Select>
      {error && touched && <ErrorMessage>{error}</ErrorMessage>}{" "}
    </div>
  );
};

export default SelectField;
