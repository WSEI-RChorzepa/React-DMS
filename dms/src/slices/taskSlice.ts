import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { ITask, ITaskWithUser, IUser } from "models";
import { RootState, ITasksState } from "store";
import * as Service from "services/genericService";
import { localStorage } from "utils/browserStorageHelpers";
import { getRandomTaskImage } from "utils/randomImage";

const initialState: ITasksState = {
  status: null,
  data: [],
};

export const fetchTasksAsync = createAsyncThunk<{ tasks: ITaskWithUser[] }>("tasks/fetch", async () => {
  const tasksResponse = await Service.all<ITask[]>("todos");
  const tasksData = tasksResponse.body as ITask[];
  const users = localStorage.get<IUser[]>("users") as IUser[];

  const tasks: ITaskWithUser[] = tasksData.map((task) => {
    const { name, company } = users.find((a) => a.id === task.userId) as IUser;
    return {
      ...task,
      owner: name,
      company: company.name,
      imageUrl: getRandomTaskImage(),
    };
  });

  return {
    tasks,
  };
});

export const todosSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTasksAsync.pending, (state) => {
        return {
          ...state,
          status: "pending",
        };
      })
      .addCase(fetchTasksAsync.fulfilled, (state, action) => {
        return {
          ...state,
          status: "fulfilled",
          data: action.payload.tasks,
        };
      });
  },
});

export const tasks = (state: RootState) => state.tasks;
export default todosSlice.reducer;
