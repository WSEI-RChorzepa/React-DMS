import { configureStore } from "@reduxjs/toolkit";

import userReducer from "slices/userSlice";
import postReducer from "slices/postsSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    post: postReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
