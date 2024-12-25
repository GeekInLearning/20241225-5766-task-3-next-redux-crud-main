import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface IPostStateSlice {
  id: number;
  title: string;
  description: string;
}

const initialState: IPostStateSlice[] = [
  { id: 1, title: "Post 1", description: "Description of Post 1" },
  { id: 2, title: "Post 2", description: "Description of Post 2" },
  { id: 3, title: "Post 3", description: "Description of Post 3" },
];

const postsSlice = createSlice({
  name: "posts",
  initialState: initialState,
  reducers: {
    addPost: (state, action: PayloadAction<IPostStateSlice>) => {
      // Implementasi logika untuk menambahkan post
      return [...state, { ...action.payload }];
    },
    updatePost: (state, action: PayloadAction<IPostStateSlice>) => {
      const { id, title, description } = action.payload;
      const postIndex = state.findIndex((post: any) => post.id === id);
      if (postIndex !== -1) {
        state[postIndex].title = title;
        state[postIndex].description = description;
      }
    },
    deletePost: (state, action: PayloadAction<number>) => {
      // Implementasi logika untuk menghapus post
      return state.filter((val) => val.id !== action.payload);
    },
  },
});

export const { addPost, updatePost, deletePost } = postsSlice.actions;

export const selectPostById = (state: any, postId: number) =>
  state.posts.find((post: any) => post.id === postId);

export default postsSlice.reducer;
