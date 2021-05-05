import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { IUser, IPhoto } from "models";
import { RootState, IUserState } from "store";
import * as UserService from "services/userService";

const initialState: IUserState = {
  status: null,
  photo: null,
  user: null,
};

export const fetchUserDataAsync = createAsyncThunk<{ data: IUser; photo: IPhoto }>("user/fetch", async () => {
  const userId = 1;
  const userData = await UserService.getUserData(userId);
  const userPhoto = await UserService.getUserPhoto(userId);

  return {
    data: userData.body as IUser,
    photo: userPhoto.body as IPhoto,
  };
});

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserDataAsync.pending, (state) => {
        state.status = "pending";
      })
      .addCase(fetchUserDataAsync.fulfilled, (state, action) => {
        state.status = "fulfilled";
        state.user = action.payload.data;
        state.photo = action.payload.photo;
      });
  },
});

export const user = (state: RootState) => state.user;
export default userSlice.reducer;
