import { IEntity } from "types";

export interface ITask extends IEntity {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

export interface ITaskWithUser extends ITask {
  owner: string;
  company: string;
  imageUrl: string;
}
