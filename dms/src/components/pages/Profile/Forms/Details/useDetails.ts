import { useCallback } from "react";
import { IDetailsProps } from "types";
import * as Dictionary from "./dictionaries";

export const useDetails = () => {
  const initialValues: IDetailsProps = {
    expertise: ["Mergers and acquisition"],
    specialities: ["Cross border operation"],
    admissionToPracticeLaw: ["Paris bar association"],
    counties: ["Tunisia"],
    hourlyFee: "610€/hour ( Negociated )",
    termsAndConditions: "Monthly 10k€ retainer - see with Jeanny Smith",
    file: "",
    propsals: Dictionary.propsals,
    internalCorrespondants: Dictionary.internalCorrespondants,
  };

  const handleSubmit = useCallback((fields: IDetailsProps) => {
    console.log(fields);
  }, []);

  return {
    initialValues,
    handleSubmit,
  };
};
