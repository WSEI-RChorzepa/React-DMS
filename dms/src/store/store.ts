import { configureStore } from "@reduxjs/toolkit";

import userReducer from "slices/userSlice";
import postReducer from "slices/postsSlice";
import commentsReducer from "slices/commentSlice";
import workspaceReducer from "slices/workspaceSlice";
import tasksReducer from "slices/taskSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    post: postReducer,
    comments: commentsReducer,
    workspaces: workspaceReducer,
    tasks: tasksReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
