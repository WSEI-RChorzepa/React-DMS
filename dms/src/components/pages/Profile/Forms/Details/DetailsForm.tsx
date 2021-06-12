import React, { useState, useEffect } from "react";
import { Form, FormikProps, Formik, FieldArray } from "formik";
import { IDetailsProps } from "types";
import { Sticky } from "components";
import { Section, SectionTitle, Fieldset, TagBoxGrid } from "./components";
import { InputField, TagBoxField, Button } from "components/formik";
import { schema } from "./validationSchema";
import { useDetails } from "./useDetails";
import * as initialData from "./initialData";

import * as Grids from "./Grids";

const FormComponent: React.VoidFunctionComponent = () => {
  const { initialValues, handleSubmit } = useDetails();
  const [disabled, setDisabled] = useState(true);

  useEffect(() => {}, []);

  return (
    <>
      <Formik initialValues={initialValues} validationSchema={schema} onSubmit={handleSubmit}>
        {({ values }: FormikProps<IDetailsProps>) => (
          <Form>
            <Fieldset disabled={disabled}>
              <Section disabled={disabled}>
                <TagBoxGrid>
                  <FieldArray name="expertise" render={(props) => <TagBoxField label="Expertise" disabled={disabled} {...props} values={(props.form.values as IDetailsProps).expertise} dictionary={initialData.expertise} />} />
                  <FieldArray
                    name="specialities"
                    render={(props) => <TagBoxField disabled={disabled} {...props} label="Specialities" values={(props.form.values as IDetailsProps).specialities} dictionary={initialData.specialities} />}
                  />
                </TagBoxGrid>

                <TagBoxGrid>
                  <FieldArray
                    name="admissionToPracticeLaw"
                    render={(props) => (
                      <TagBoxField disabled={disabled} {...props} label="Admission to practice law" values={(props.form.values as IDetailsProps).admissionToPracticeLaw} dictionary={initialData.admissionToPracticeLaw} />
                    )}
                  />
                  <FieldArray name="counties" render={(props) => <TagBoxField disabled={disabled} {...props} label="Counties" values={(props.form.values as IDetailsProps).counties} dictionary={initialData.counties} />} />
                </TagBoxGrid>
              </Section>

              <Section disabled={disabled}>
                <SectionTitle>Panel informations</SectionTitle>
                <InputField name="hourlyFee" type="text" placeholder="" label="Hourly fee" />
                <InputField name="termsAndConditions" type="text" placeholder="" label="Terms & conditions" />
                <InputField name="file" type="file" placeholder="" />
              </Section>

              <Section disabled={disabled}>
                <SectionTitle>Service & projects</SectionTitle>
                <p>Corporate M&A and international qcquisitions</p>

                <SectionTitle>Internal correspondants</SectionTitle>
                <FieldArray name="internalCorrespondants">{(props) => <Grids.InternalCorrespondants disabled={disabled} values={values.internalCorrespondants} push={props.push} remove={props.remove} />}</FieldArray>
              </Section>

              <Section disabled={disabled}>
                <SectionTitle>Propsals</SectionTitle>
                <FieldArray name="propsals">{(props) => <Grids.PropsalsGrid disabled={disabled} values={values.propsals} push={props.push} remove={props.remove} />}</FieldArray>
              </Section>

              <Section disabled={disabled}>
                <SectionTitle>Internal reviews</SectionTitle>
                <FieldArray name="internalReviews">{(props) => <Grids.InternalReviewsGrid disabled={disabled} values={values.internalReviews} push={props.push} remove={props.remove} />}</FieldArray>
              </Section>

              <Section disabled={disabled}>
                <SectionTitle>Amount of fees</SectionTitle>
                <FieldArray name="amountOfFees">{(props) => <Grids.AmountOfFeesGrid disabled={disabled} values={values.amountOfFees} push={props.push} remove={props.remove} />}</FieldArray>
              </Section>
            </Fieldset>

            <Sticky height={250}>
              {" "}
              <Button.EditGroup toggleMode={setDisabled} />
            </Sticky>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default React.memo(FormComponent);
