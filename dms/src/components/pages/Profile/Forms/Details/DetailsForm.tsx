import React, { useState, useRef } from "react";
import { Form, FormikProps, Formik, FieldArray } from "formik";
import { IDetailsProps } from "types";
import { SectionTitle } from "./components";
import { TagBoxField, EditButton, GridField } from "components/formik";
import { InputField } from "components/formik";
import { schema } from "./validationSchema";
import { useDetails } from "./useDetails";
import * as Dictionaries from "./dictionaries";

const FormComponent: React.VoidFunctionComponent = () => {
  const ref = useRef<HTMLFormElement>(null);
  const { initialValues, handleSubmit } = useDetails();
  const [disabled, setDisabled] = useState(true);

  return (
    <>
      <Formik initialValues={initialValues} validationSchema={schema} onSubmit={handleSubmit}>
        {(formikProps: FormikProps<IDetailsProps>) => (
          <Form ref={ref}>
            <fieldset disabled={disabled}>
              <FieldArray name="expertise" render={(props) => <TagBoxField disabled={disabled} {...props} label="Expertise" values={(props.form.values as IDetailsProps).expertise} dictionary={Dictionaries.expertise} />} />
              <FieldArray
                name="specialities"
                render={(props) => <TagBoxField disabled={disabled} {...props} label="Specialities" values={(props.form.values as IDetailsProps).specialities} dictionary={Dictionaries.specialities} />}
              />
              <FieldArray
                name="admissionToPracticeLaw"
                render={(props) => (
                  <TagBoxField disabled={disabled} {...props} label="Admission to practice law" values={(props.form.values as IDetailsProps).admissionToPracticeLaw} dictionary={Dictionaries.admissionToPracticeLaw} />
                )}
              />
              <FieldArray name="counties" render={(props) => <TagBoxField disabled={disabled} {...props} label="Counties" values={(props.form.values as IDetailsProps).counties} dictionary={Dictionaries.counties} />} />

              <SectionTitle>Panel informations</SectionTitle>

              <InputField name="hourlyFee" type="text" placeholder="" label="Hourly fee" />
              <InputField name="termsAndConditions" type="text" placeholder="" label="Terms & conditions" />
              <InputField name="file" type="file" placeholder="" />

              <SectionTitle>Service & projects</SectionTitle>
              <p>Corporate M&A and international qcquisitions</p>

              <SectionTitle>Internal correspondants</SectionTitle>
              <FieldArray name="internalCorrespondants" render={(props) => <GridField {...props} disabled={disabled} headers={["First name", "Last name", "Message", "Profile"]} data={Dictionaries.internalCorrespondants} />} />

              <SectionTitle>Propsals</SectionTitle>
              <FieldArray name="propsals" render={(props) => <GridField {...props} disabled={disabled} headers={["Name", "Entity", "Location", "Expertise", "Date", "Firm"]} data={Dictionaries.propsals} />} />

              <SectionTitle>Internal reviews</SectionTitle>
              {/* <GridField disabled={disabled} headers={["Name", "Entity", "Location", "Expertise", "Date"]} data={Dictionaries.internalReviews} /> */}
              <SectionTitle>Amount of fees</SectionTitle>
              {/* <GridField disabled={disabled} headers={["Year", "Cost center", "Total amount", "Law firm"]} data={Dictionaries.amountOfFees} /> */}
            </fieldset>

            <EditButton toggleMode={setDisabled} />
          </Form>
        )}
      </Formik>
    </>
  );
};

export default FormComponent;
