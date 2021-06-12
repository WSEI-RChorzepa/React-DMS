import { VoidFunctionComponent, useState } from "react";
import styled from "styled-components";
import { useFormikContext } from "formik";
import { FaPlusCircle, FaEdit, FaSave, FaTimes, FaTrash } from "react-icons/fa";
import { Flex } from "components";
import Button from "components/common/Button";

const EditGroupWrapper = styled.div`
  position: absolute;
  top: 1rem;
  right: 1rem;

  button {
    padding-left: 0.5rem;
    padding-right: 0.5rem;

    &:first-child {
      margin-right: 1px;
    }

    &:last-child {
      margin-right: 0;
    }
  }
`;

export const Add: VoidFunctionComponent<{ onClick: () => void }> = (props) => (
  <Button variant="primary" onClick={props.onClick}>
    <FaPlusCircle /> Add new row
  </Button>
);

export const Edit: VoidFunctionComponent<{ onClick: () => void }> = (props) => (
  <Button variant="info" onClick={props.onClick}>
    <FaEdit /> Edit
  </Button>
);

export const Save: VoidFunctionComponent<{ onClick: () => void }> = (props) => (
  <Button variant="primary" onClick={props.onClick}>
    <FaSave /> Save
  </Button>
);

export const Cancel: VoidFunctionComponent<{ onClick: () => void }> = (props) => (
  <Button variant="danger" onClick={props.onClick}>
    <FaTimes /> Cancel
  </Button>
);

export const Remove: VoidFunctionComponent<{ onClick: () => void }> = (props) => (
  <Button variant="danger" onClick={props.onClick}>
    <FaTrash /> Remove
  </Button>
);

export const EditGroup: VoidFunctionComponent<{ toggleMode: (open: boolean) => void }> = ({ toggleMode }) => {
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
    <EditGroupWrapper>
      {!editMode ? (
        <Edit onClick={handleOpenEditMode} />
      ) : (
        <Flex direction="row" justifyContent="center" alignItems="center">
          <Save onClick={handleSubmit} />
          <Cancel onClick={handleCloseEditMode} />
        </Flex>
      )}
    </EditGroupWrapper>
  );
};
