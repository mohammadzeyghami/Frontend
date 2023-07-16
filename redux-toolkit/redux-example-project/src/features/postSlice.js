import { createSlice } from "@reduxjs/toolkit";

//initail state

const initialState = [
  { id: 1, title: "you learning somethings", content: " i like this " },
  { id: 2, title: "you learning redux", content: " im having fun " },
];

const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    postAdded(state, action) {
      state.push(action.payload);
    },
  },
});

export const selectAllPosts = (state) => state.posts;
export const { postAdded } = postSlice.actions;
export default postSlice.reducer;
