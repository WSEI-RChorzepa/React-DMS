import * as Yup from "yup";

export const schema = Yup.object().shape({
  name: Yup.string().required("Please input user name"),
  company: Yup.string().max(30, "Please input 30 characters or less").required("Please input company name"),
  city: Yup.string().max(20, "Please input 30 characters or less").required("Please input city name"),
  position: Yup.string().max(20, "Please input 20 characters or less").required("Please input position name"),
  phone: Yup.string().max(55, "Please input 55 characters or less").required("Please input phone number"),
  email: Yup.string().email("Please input valid email address.").max(30, "Please input 30 characters or less").required("Please input email address"),
});
