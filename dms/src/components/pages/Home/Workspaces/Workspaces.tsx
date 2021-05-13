import React from "react";
import { useAppSelector } from "hooks";
import { workspaces as WorkspacesState } from "slices/workspaceSlice";
import WorkspacesSlider from "./WorkspacesSlider";

const Worksapces: React.VoidFunctionComponent = () => {
  const { workspaces } = useAppSelector(WorkspacesState);
  return (
    <div>
      <h5>Workspaces</h5>
      <div>
        <WorkspacesSlider source={workspaces} />
      </div>
    </div>
  );
};

export default Worksapces;
