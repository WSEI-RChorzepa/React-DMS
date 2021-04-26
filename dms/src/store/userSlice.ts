import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { RootState } from './store';
import { IUser } from './types';
import { UserResponse, PhotoResponse } from 'services/types';
import * as UserService from 'services/userService';

const initialState: IUser = {
    data: null,
    photo: null,
    status: null,
};

export const fetchUserDataAsync = createAsyncThunk<{ data: UserResponse.User; photo: PhotoResponse.Photo }>(
    'user/fetch',
    async () => {
        const userId = 1;
        const userData = await UserService.getUserData(userId);
        const userPhoto = await UserService.getUserPhoto(userId);

        return {
            data: userData.body as UserResponse.User,
            photo: userPhoto.body as PhotoResponse.Photo,
        };
    },
);

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchUserDataAsync.pending, (state) => {
                state.status = 'pending';
            })
            .addCase(fetchUserDataAsync.fulfilled, (state, action) => {
                state = {
                    status: 'fulfilled',
                    ...action.payload,
                };
            });
    },
});

export const user = (state: RootState) => state.user;
export default userSlice.reducer;
