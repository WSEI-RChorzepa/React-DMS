import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { IComment } from "models";
import { RootState, ICommentState } from "store";
import { localStorage } from "utils/browserStorageHelpers";
import * as CommentService from "services/commentService";

const initialState: ICommentState = {
  status: null,
  comments: [],
};

export const fetchCommentsAsync = createAsyncThunk<{ comments: IComment[] }>("comment/fetch", async () => {
  const key = "comments";
  let comments: IComment[] = [];

  if (localStorage.hasKey(key)) {
    comments = localStorage.get<IComment[]>(key) as IComment[];
  } else {
    const commentsData = await CommentService.getPosts();
    localStorage.set(key, commentsData.body as IComment[]);
    comments = commentsData.body as IComment[];
  }

  return {
    comments,
  };
});

export const commentSlice = createSlice({
  name: "comments",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCommentsAsync.pending, (state) => {
        state.status = "pending";
      })
      .addCase(fetchCommentsAsync.fulfilled, (state, action) => {
        state.status = "fulfilled";
        state.comments = action.payload.comments;
      });
  },
});

export const comments = (state: RootState) => state.comments;
export default commentSlice.reducer;
