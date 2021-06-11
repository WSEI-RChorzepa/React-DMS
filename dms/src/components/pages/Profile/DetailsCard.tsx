import React from "react";
import { Card } from "./components";
import DetailsForm from "./Forms/Details/DetailsForm";

const DetailsCard: React.VoidFunctionComponent = () => {
  return (
    <Card>
      <DetailsForm />
    </Card>
  );
};

export default DetailsCard;
