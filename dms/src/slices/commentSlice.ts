import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { IComment, ICommentWithOwner, IUser } from "models";
import { RootState, ICommentState } from "store";
import { localStorage } from "utils/browserStorageHelpers";
import * as CommentService from "services/commentService";

const initialState: ICommentState = {
  status: null,
  comments: [],
};

export const fetchCommentsAsync = createAsyncThunk<{ comments: ICommentWithOwner[] }>("comment/fetch", async () => {
  const key = "comments";
  let comments: IComment[] = [];

  if (localStorage.hasKey(key)) {
    comments = localStorage.get<IComment[]>(key) as IComment[];
  } else {
    const commentsData = await CommentService.getPosts();
    localStorage.set(key, commentsData.body as IComment[]);
    comments = commentsData.body as IComment[];
  }

  const users = localStorage.get<IUser[]>("users") as IUser[];

  const commentWithOwner: ICommentWithOwner[] = comments.map((comment) => {
    return {
      ...comment,
      owner: users.filter((user) => user.id === comment.postId).length ? users.filter((user) => user.id === comment.postId)[0].name : "Unknown user",
    };
  });

  return {
    comments: commentWithOwner,
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
