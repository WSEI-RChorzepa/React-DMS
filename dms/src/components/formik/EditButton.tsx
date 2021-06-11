import React, { useState } from "react";
import { FaEdit, FaSave, FaTimes } from "react-icons/fa";
import { Button, Flex } from "components";
import { EditButtonWrapper } from "./components";
import { Variables } from "styledHelpers";
import { useFormikContext } from "formik";

const EditButton: React.VoidFunctionComponent<{ toggleMode: (open: boolean) => void }> = ({ toggleMode }) => {
  const [editMode, setEditMode] = useState(false);
  const { submitForm, resetForm } = useFormikContext();

  const handleOpenEditMode = () => {
    setEditMode(true);
    toggleMode(false);
  };

  const handleCloseEditMode = () => {
    setEditMode(false);
    toggleMode(true);
    resetForm();
  };

  const handleSubmit = () => {
    submitForm();
    setEditMode(false);
    toggleMode(true);
  };

  return (
    <EditButtonWrapper>
      {!editMode ? (
        <Button onClick={handleOpenEditMode}>
          <FaEdit size="15px" />
        </Button>
      ) : (
        <Flex direction="row" justifyContent="center" alignItems="center">
          <Button onClick={handleSubmit}>
            <FaSave size="15px" color={Variables.Color.primary} />
          </Button>
          <Button onClick={handleCloseEditMode}>
            <FaTimes size="15px" color={Variables.Color.danger} />
          </Button>
        </Flex>
      )}
    </EditButtonWrapper>
  );
};

export default EditButton;
