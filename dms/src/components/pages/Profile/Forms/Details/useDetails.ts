import { useCallback } from "react";
import { IDetailsProps } from "types";
import * as initialData from "./initialData";

export const useDetails = () => {
  const initialValues: IDetailsProps = {
    expertise: ["Mergers and acquisition"],
    specialities: ["Cross border operation"],
    admissionToPracticeLaw: ["Paris bar association"],
    counties: ["Tunisia"],
    hourlyFee: "610€/hour ( Negociated )",
    termsAndConditions: "Monthly 10k€ retainer - see with Jeanny Smith",
    file: "",
    internalCorrespondants: initialData.internalCorrespondants,
    propsals: initialData.propsals,
    internalReviews: initialData.internalReviews,
    amountOfFees: initialData.amountOfFees,
  };

  const handleSubmit = useCallback((fields: IDetailsProps) => {
    console.log(fields);
  }, []);

  return {
    initialValues,
    handleSubmit,
  };
};
