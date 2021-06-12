import React, { useState, useRef } from "react";
import { Form, FormikProps, Formik } from "formik";
import { IMainInformationProps } from "types";
import { InputField, SelectField, Button } from "components/formik";
import { schema } from "./validationSchema";
import { PersonalInfo } from "../components";
import { useMainInformation } from "./useMainInformation";
import * as Dictionaries from "./dictionaries";

const FormComponent: React.VoidFunctionComponent = () => {
  const ref = useRef<HTMLFormElement>(null);
  const { initialValues, handleSubmit } = useMainInformation();
  const [disabled, setDisabled] = useState(true);

  return (
    <>
      <Formik initialValues={initialValues} validationSchema={schema} onSubmit={handleSubmit}>
        {(props: FormikProps<IMainInformationProps>) => (
          <Form ref={ref}>
            <fieldset disabled={disabled}>
              <PersonalInfo.Grid>
                <InputField name="name" type="text" placeholder="Username" />
                <InputField name="company" type="text" placeholder="Company" />
                <SelectField name="city" type="text" placeholder="City" values={Dictionaries.cities} />
                <SelectField name="position" type="text" placeholder="Position" values={Dictionaries.positions} />
                <InputField name="phone" type="text" placeholder="Phone number" />
                <InputField name="email" type="email" placeholder="Email address" />
              </PersonalInfo.Grid>
            </fieldset>
            <Button.EditGroup toggleMode={setDisabled} />
          </Form>
        )}
      </Formik>
    </>
  );
};

export default FormComponent;
