import React from "react";
import { FieldArrayRenderProps } from "formik";
import { v4 } from "uuid";
import { InputField } from "components/formik";

interface IProps<T extends Array<{ [key: string]: string | number | Date }>> {
  headers?: string[];
  disabled: boolean;
  data: T[];
}

const GridField: React.VoidFunctionComponent<IProps<any> & FieldArrayRenderProps> = (props) => {
  const { headers, data } = props;

  const renderInputType = (key: string, value: string | number | Date, index: number) => {
    const name = `${props.name}[${index}].${key}`;

    if (key.includes("date")) {
      return <InputField name={`${name}`} type="date" placeholder="Please input value...." />;
    } else {
      return <InputField name={`${name}`} type="text" placeholder="Please input value...." />;
    }
  };

  return (
    <table>
      {headers && (
        <thead>
          <tr>
            {headers.map((header) => (
              <th key={header}>{header}</th>
            ))}
          </tr>
        </thead>
      )}
      <tbody>
        {data.map((row, index) => (
          <tr key={v4()}>
            {Object.keys(row).map((key) => (
              <td key={v4()}>{renderInputType(key, row[key], index)}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default GridField;
