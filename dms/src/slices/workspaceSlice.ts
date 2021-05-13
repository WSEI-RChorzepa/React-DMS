import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "store";
import fakeData from "services/workspaceService";

const initialState = fakeData;

export const workspaceSlice = createSlice({
  name: "workspaces",
  initialState,
  reducers: {},
});

export const workspaces = (state: RootState) => state.workspaces;
export default workspaceSlice.reducer;
