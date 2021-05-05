import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { IPost, IPostWithImage, IPhoto } from "models";
import { RootState, IPostState } from "store";
import * as PostService from "services/postService";
import * as PhotoService from "services/photoService";

const initialState: IPostState = {
  status: null,
  posts: [],
};

export const fetchPostsAsync = createAsyncThunk<{ posts: IPostWithImage[] }, number>("posts", async (id) => {
  const postsReponse = await PostService.getPostsByUserId(id);
  const postsData = postsReponse.body as IPost[];

  const postsWithImage: IPostWithImage[] = await Promise.all(
    postsData.map(
      async (post): Promise<IPostWithImage> => {
        const photo = await PhotoService.getPhoto(post.id);
        const { url, title } = photo.body as IPhoto;

        return {
          ...post,
          imageUrl: url,
          imageTitle: title,
        };
      }
    )
  );

  return {
    posts: postsWithImage,
  };
});

export const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPostsAsync.pending, (state) => {
        state.status = "pending";
      })
      .addCase(fetchPostsAsync.fulfilled, (state, action) => {
        state.status = "fulfilled";
        state.posts = action.payload.posts;
      });
  },
});

export const post = (state: RootState) => state.post;
export default postSlice.reducer;
