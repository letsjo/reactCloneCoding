import { createSlice } from "@reduxjs/toolkit";

let initialState = {
  comments: [
    {
      commentId: null,
      scope: null,
      content: null,
      createdAt: null,
      writer: {
        username: null,
      },
    },
  ],
};

const commentSlice = createSlice({
  name: "comment",
  initialState,
  reducers: {
    getCommentsList(state,action){
        state.comments = action.payload;
    }
  },
});

export const commentSliceAction = commentSlice.actions;
export default commentSlice.reducer;
