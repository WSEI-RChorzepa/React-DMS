import { useCallback } from "react";
import { IMainInformationProps } from "types";
import { useAppSelector } from "hooks";
import { user, updatePersonalInfo } from "slices/userSlice";
import { store } from "store/store";

export const useMainInformation = () => {
  const { user: data } = useAppSelector(user);

  const initialValues: IMainInformationProps = {
    name: data ? data.name : "",
    company: data ? data.company.name : "",
    city: data ? data.address.city : "",
    position: "Partner",
    phone: data ? data.phone : "",
    email: data ? data.email : "",
  };

  const handleSubmit = useCallback((fields: IMainInformationProps) => {
    store.dispatch(updatePersonalInfo(fields));
  }, []);

  return {
    initialValues,
    handleSubmit,
  };
};
