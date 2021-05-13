import { IWorkspace } from "models";
import { IconType } from "types";

export interface IWorkspaceTileProps {
  icon: IconType;
  title: string;
  backgroundImage: string;
}

export interface IWorkspaceSliderProps {
  source: IWorkspace[];
}
