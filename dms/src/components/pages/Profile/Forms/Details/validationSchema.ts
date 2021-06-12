import * as Yup from "yup";

export const schema = Yup.object().shape({
  expertise: Yup.array().required("Please select value."),
  specialities: Yup.array().of(Yup.string()).required("Please select value.").min(1, "Select minimum one value"),
  internalCorrespondants: Yup.array().of(
    Yup.object().shape({
      firstname: Yup.string().required("Please input first name value."),
      lastName: Yup.string().required("Please input last name value."),
    })
  ),
  propsals: Yup.array().of(
    Yup.object().shape({
      name: Yup.string().required("Please input Name value."),
      entity: Yup.string().required("Please input Entity value."),
      location: Yup.string().required("Please input Location value."),
      expertise: Yup.string().required("Please input Expertise value."),
      date: Yup.string().required("Please input Date value."),
      firm: Yup.string().required("Please input Firm value."),
    })
  ),
  internalReviews: Yup.array().of(
    Yup.object().shape({
      name: Yup.string().required("Please input Name value."),
      entity: Yup.string().required("Please input Entity value."),
      location: Yup.string().required("Please input Location value."),
      expertise: Yup.string().required("Please input Expertise value."),
      date: Yup.string().required("Please input Date value."),
    })
  ),
  amountOfFees: Yup.array().of(
    Yup.object().shape({
      costCenter: Yup.string().required("Please input Cost center value."),
      totalAmount: Yup.string().required("Please input Total amount value."),
      lawFirm: Yup.string().required("Please input Law firm value."),
    })
  ),
});
