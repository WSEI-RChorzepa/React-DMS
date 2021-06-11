import * as Yup from "yup";

export const schema = Yup.object().shape({
  expertise: Yup.array().required("Please select value."),
  specialities: Yup.array().required("Please select value."),
});
