import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { IUser, IPhoto } from "models";
import { RootState, IUserState } from "store";
import { IMainInformationProps } from "types";
import { localStorage } from "utils/browserStorageHelpers";
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

export const fetchUsersDataAsync = createAsyncThunk<{ users: IUser[] }>("users/fetch", async () => {
  const key = "users";
  let users: IUser[] = [];

  if (localStorage.hasKey(key)) {
    users = localStorage.get<IUser[]>(key) as IUser[];
  } else {
    const usersData = await UserService.getUsersData();
    localStorage.set(key, usersData.body as IUser[]);
    users = usersData.body as IUser[];
  }

  return {
    users,
  };
});

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    updatePersonalInfo: (state, action: PayloadAction<IMainInformationProps>): any => {
      return {
        ...state,
        user: {
          ...state.user,
          name: action.payload.name,
        },
      };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserDataAsync.pending, (state) => {
        return {
          ...state,
          status: "pending",
        };
      })
      .addCase(fetchUserDataAsync.fulfilled, (state, action) => {
        return {
          ...state,
          status: "fulfilled",
          user: action.payload.data,
          photo: action.payload.photo,
        };
      });
  },
});

export const { updatePersonalInfo } = userSlice.actions;
export const user = (state: RootState) => state.user;
export default userSlice.reducer;
